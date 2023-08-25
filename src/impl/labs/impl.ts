import { Api } from "../../../dist/models";
import * as t from "../../../dist/api/labs/types";
import * as v from "../../../dist/validation";
import { kafka_server, nat_server, nats_timeout } from "../../admin";
import { v4 } from "uuid";
import { connect, ErrorCode, StringCodec, Subscription } from "nats";
import { TextEncoder } from "text-encoding";
import { Kafka, Partitioners } from "kafkajs";
import axios from "axios";

const kafka = new Kafka({
	clientId: "my-app",
	brokers: [kafka_server],
});
export class PatientLabsService {
	constructor() {
		this.getsLabs = this.getsLabs.bind(this);
		this.getAllLabs = this.getAllLabs.bind(this);
		this.deleteLabs = this.deleteLabs.bind(this);
		this.updateLabs = this.updateLabs.bind(this);
		this.labs = this.labs.bind(this);
	}

	async labs(request: Api.LabsDto | undefined): Promise<t.PostPatientsLabsResponse> {
		try {
			if (!request) {
				throw new Error("invalid-inputs");
			}
			const patientlabsRequest = v.modelApiLabsDtoFromJson(
				"patient_labs_reports",
				JSON.parse(JSON.stringify(request))
			);
			const producer = kafka.producer({ createPartitioner: Partitioners.DefaultPartitioner });
			await producer.connect();
			const createdPatientLabs= {
				...patientlabsRequest,
			};
			const outgoingMessage = {
				key: `create#${patientlabsRequest?.patientId?.toString()}`,
				value: JSON.stringify(createdPatientLabs),
			};
			await producer.send({
				topic: "patient_labs_reports",
				messages: [outgoingMessage],
			});

			return {
				status: 201,
				body: createdPatientLabs,
			};
		} catch (error: any) {
			console.error(error);
			if (error.toString().match("invalid-inputs")) {
				return {
					status: 422,
					body: {
						message: "Invalid request",
					},
				};
			}
		
			return {
				status: 404,
				body: { message: `something went wrong` },
			};
		}
	}

	async getsLabs(patientId: string): Promise<t.GetPatientsLabsGetResponse> {
		try {
			const nc = await connect({ servers: nat_server });
			const sc = StringCodec();
			const data = {
				patientId: patientId,
				type: "get",
			};
			const ddata = JSON.stringify(data);
			const encoder = new TextEncoder();
			const enc = encoder.encode(ddata);
			const m = await nc.request("patient_labs_reports", enc, { timeout: nats_timeout });
			const natsOutput = JSON.parse(sc.decode(m.data));

			if (natsOutput == "404") {
				await nc.close();
				return {
					status: 404,
					body: { message: `No labs found` },
				};
			} else {
				const labs = JSON.parse(JSON.stringify(natsOutput));
				const result = v.modelApiLabsDtoFromJson("patient_labs_reports", labs);

				await nc.close();
				return {
					status: 200,
					body: result,
				};
			}
		} catch (error: any) {
			console.error(error);
			return {
				status: 404,
				body: { message: `something went wrong` },
			};
		}
	}

	async getAllLabs(): Promise<t.GetPatientsLabsGetAllResponse> {
		try {
			const nc = await connect({ servers: nat_server });
			const sc = StringCodec();
			const data = {
				type: "getAll",
			};
			const ddata = JSON.stringify(data);
			const encoder = new TextEncoder();
			const enc = encoder.encode(ddata);
			const m = await nc.request("patient_labs_reports", enc, { timeout: nats_timeout });

			const natsOutput = JSON.parse(sc.decode(m.data));

			const patientLabs: Api.LabsDto[] = natsOutput.map((item: any) =>
				v.modelApiLabsDtoFromJson("patient_labs_reports", item)
			);

			if (natsOutput == 404) {
				await nc.close();
				return {
					status: 404,
					body: { message: `No labs found` },
				};
			} else {
				const allLabs: Api.LabsPagedResultDto = {
					totalCount: patientLabs.length,
					items: patientLabs,
				};
				await nc.close();
				return {
					status: 200,
					body: allLabs,
				};
			}
		} catch (error) {
			console.error(error);
			return {
				status: 404,
				body: { message: `something went wrong` },
			};
		}
	}
	async deleteLabs(id: string): Promise<t.DeletePatientsLabsDeleteResponse> {
		try {
			const checkPatient = await this.getsLabs(id);
			if (checkPatient.status == 404) {
				throw new Error("no-patient-found");
			}
			if (checkPatient.status === 200) {
				const data = checkPatient.body;
				const producer = kafka.producer({ createPartitioner: Partitioners.DefaultPartitioner });
				await producer.connect();
				const outgoingMessage = {
					key: `delete#${id.toString()}`,
					value: JSON.stringify({
						...data,
						updatedAt: new Date().toISOString(),
					}),
				};
				await producer.send({
					topic: "patient_labs_reports",
					messages: [outgoingMessage],
				});
				return {
					status: 200,
					body: {
						message: "Patient deleted successfully",
					},
				};
			} else {
				throw new Error("something went wrong");
			}
		} catch (error: any) {
			console.error(error);
			if (error.toString().match("no-patient-found")) {
				return {
					status: 422,
					body: {
						message: "No patient found",
					},
				};
			}
			return {
				status: 404,
				body: {
					message: "something went wrong",
				},
			};
		}
	}
	async updateLabs(request: Api.LabsDto | undefined, __user: any): Promise<t.PutPatientsLabsUpdateResponse> {
		try{
			if (!request) {
				throw new Error("invalid-inputs");
			}
			if (!request.patientId) {
				throw new Error("no-patientId-found");
			}
			const checkPatient = await this.getsLabs(request.patientId);
			if (checkPatient.status == 404) {
				throw new Error("no-patient-found");
			}
			if (checkPatient.status === 200) {
				const producer = kafka.producer({ createPartitioner: Partitioners.DefaultPartitioner });
				await producer.connect();
				const patientRequest = JSON.parse(JSON.stringify(request));
				console.log({ patientRequest });
				const outgoingMessage = {
					key: `update#${request.patientId.toString()}`,
					value: JSON.stringify({
						...patientRequest,
						updatedAt: new Date().toISOString(),
					}),
				};
				await producer.send({
					topic: "patient_labs_reports",
					messages: [outgoingMessage],
				});
				return {
					status: 200,
					body: {
						...patientRequest,
					},
				};
			} else {
				throw new Error("error-schemaRegistry");
			}
		}
		catch (error: any) {
			console.error(error);
			if (error.toString().match("invalid-inputs")) {
				return {
					status: 401,
					body: {
						message: "Invalid request",
					},
				};
			}
			if (error.toString().match("no-patient-found")) {
				return {
					status: 401,
					body: {
						message: "No patient found to update",
					},
				};
			}
			return {
				status: 404,
				body: { message: `something went wrong` },
			};
		}
	}
}
