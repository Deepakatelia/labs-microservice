import { PatientLabsService } from "./impl";
import * as t from "../../../dist/api/labs/types";
import { Api } from "../../../dist/models";

const service = new PatientLabsService();

export const patientlabsServiceImpl: t.LabsApi = {
	postPatientsLabs: service.labs,
	getPatientsLabsGet: service.getsLabs,
	getPatientsLabsGetAll: service.getAllLabs,
	deletePatientsLabsDelete: service.deleteLabs,
	putPatientsLabsUpdate: service.updateLabs,
};
