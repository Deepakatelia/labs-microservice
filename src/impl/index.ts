import { LabsApi } from "../../dist/api/labs/types";
import { ApiImplementation } from "../../dist/types";
import { patientlabsServiceImpl } from "./labs";
export class ServiceImplementation implements ApiImplementation {
	labs: LabsApi = patientlabsServiceImpl;
}
