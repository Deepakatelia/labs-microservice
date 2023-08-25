# Labs

## Operations

### postPatientsLabs

```http
POST /patients/labs
```


### deletePatientsLabsDelete

```http
DELETE /patients/labs/delete
```


### getPatientsLabsGet

```http
GET /patients/labs/get
```


### getPatientsLabsGetAll

```http
GET /patients/labs/getAll
```


### putPatientsLabsUpdate

```http
PUT /patients/labs/update
```


## Implementation

This is an example of the API implementation to use to update the actual API implementation
when the API structure has changed.

```typescript
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
```
