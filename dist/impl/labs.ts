import * as t from '../api/labs/types'
import { Api } from '../models'

async function postPatientsLabs(request: Api.LabsDto | undefined): Promise<t.PostPatientsLabsResponse> {
	throw 'Unimplemented'
}

async function deletePatientsLabsDelete(id: string, __user: any): Promise<t.DeletePatientsLabsDeleteResponse> {
	throw 'Unimplemented'
}

async function getPatientsLabsGet(id: string, __user: any): Promise<t.GetPatientsLabsGetResponse> {
	throw 'Unimplemented'
}

async function getPatientsLabsGetAll(__user: any): Promise<t.GetPatientsLabsGetAllResponse> {
	throw 'Unimplemented'
}

async function putPatientsLabsUpdate(request: Api.LabsDto | undefined, __user: any): Promise<t.PutPatientsLabsUpdateResponse> {
	throw 'Unimplemented'
}


const api: t.LabsApi = {
	postPatientsLabs,
	deletePatientsLabsDelete,
	getPatientsLabsGet,
	getPatientsLabsGetAll,
	putPatientsLabsUpdate,
}

export default api
