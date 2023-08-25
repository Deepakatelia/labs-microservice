/* eslint-disable */
// tslint:disable
/**
 * Labs Service
 * Labs Service
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator+.
 * https://github.com/karlvr/openapi-generator-plus
 * Do not edit the class manually.
 */

import { Express } from 'express'
import { Api } from '../../models'

export interface LabsApi {
	postPatientsLabs: (request: Api.LabsDto | undefined) => Promise<PostPatientsLabsResponse>
	deletePatientsLabsDelete: (id: string, __user: any) => Promise<DeletePatientsLabsDeleteResponse>
	getPatientsLabsGet: (id: string, __user: any) => Promise<GetPatientsLabsGetResponse>
	getPatientsLabsGetAll: (__user: any) => Promise<GetPatientsLabsGetAllResponse>
	putPatientsLabsUpdate: (request: Api.LabsDto | undefined, __user: any) => Promise<PutPatientsLabsUpdateResponse>
}

export type PostPatientsLabsResponse = PostPatientsLabs201Response | PostPatientsLabs401Response | PostPatientsLabs404Response | PostPatientsLabs422Response

export interface PostPatientsLabs201Response {
	status: 201
	body: Api.LabsDto
	headers?: never
}

export interface PostPatientsLabs401Response {
	status: 401
	body: Api.MessageDto
	headers?: never
}

export interface PostPatientsLabs404Response {
	status: 404
	body: Api.MessageDto
	headers?: never
}

export interface PostPatientsLabs422Response {
	status: 422
	body: Api.MessageDto
	headers?: never
}

export type DeletePatientsLabsDeleteResponse = DeletePatientsLabsDelete200Response | DeletePatientsLabsDelete401Response | DeletePatientsLabsDelete404Response | DeletePatientsLabsDelete422Response

export interface DeletePatientsLabsDelete200Response {
	status: 200
	body: Api.MessageDto
	headers?: never
}

export interface DeletePatientsLabsDelete401Response {
	status: 401
	body: Api.MessageDto
	headers?: never
}

export interface DeletePatientsLabsDelete404Response {
	status: 404
	body: Api.MessageDto
	headers?: never
}

export interface DeletePatientsLabsDelete422Response {
	status: 422
	body: Api.MessageDto
	headers?: never
}

export type GetPatientsLabsGetResponse = GetPatientsLabsGet200Response | GetPatientsLabsGet401Response | GetPatientsLabsGet404Response | GetPatientsLabsGet422Response

export interface GetPatientsLabsGet200Response {
	status: 200
	body: Api.LabsDto
	headers?: never
}

export interface GetPatientsLabsGet401Response {
	status: 401
	body: Api.MessageDto
	headers?: never
}

export interface GetPatientsLabsGet404Response {
	status: 404
	body: Api.MessageDto
	headers?: never
}

export interface GetPatientsLabsGet422Response {
	status: 422
	body: Api.MessageDto
	headers?: never
}

export type GetPatientsLabsGetAllResponse = GetPatientsLabsGetAll200Response | GetPatientsLabsGetAll401Response | GetPatientsLabsGetAll404Response

export interface GetPatientsLabsGetAll200Response {
	status: 200
	body: Api.LabsPagedResultDto
	headers?: never
}

export interface GetPatientsLabsGetAll401Response {
	status: 401
	body: Api.MessageDto
	headers?: never
}

export interface GetPatientsLabsGetAll404Response {
	status: 404
	body: Api.MessageDto
	headers?: never
}

export type PutPatientsLabsUpdateResponse = PutPatientsLabsUpdate200Response | PutPatientsLabsUpdate401Response | PutPatientsLabsUpdate404Response

export interface PutPatientsLabsUpdate200Response {
	status: 200
	body: Api.LabsDto
	headers?: never
}

export interface PutPatientsLabsUpdate401Response {
	status: 401
	body: Api.MessageDto
	headers?: never
}

export interface PutPatientsLabsUpdate404Response {
	status: 404
	body: Api.MessageDto
	headers?: never
}

