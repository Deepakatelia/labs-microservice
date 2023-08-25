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
import { Api } from './models'

type FromJsonFunction<T> = (name: string, value: any) => T
type MapOf<T> = { [name: string]: T }

/**
 * A conditional type to convert an interface model to the equivalent JSON model.
 * We may represent dates as Date objects in our object model, but we must translate
 * them to strings for the JSON model.
 */
type ToJson<T> =
	T extends Date ? string
	: T extends object ? {
		[P in keyof T]: ToJson<T[P]>
	}
	: T extends (infer R)[] ? ToJson<R>[]
	: T

export function arrayFromJson<T>(next: FromJsonFunction<T>): FromJsonFunction<T[]> {
	return function(name: string, value: any) {
		if (typeof value !== 'object' || typeof value.length !== 'number') {
			throw `Invalid type for ${name}: expected array got ${typeof value}`
		}
	
		const result: T[] = []
		for (const el of value) {
			result.push(next(name, el))
		}
		return result
	}
}

export function arrayToJson<T>(next: FromJsonFunction<T>): FromJsonFunction<T[]> {
	return arrayFromJson(next)
}

export function mapFromJson<T>(next: FromJsonFunction<T>): FromJsonFunction<MapOf<T>> {
	return function(name: string, value: any) {
		if (typeof value !== 'object') {
			throw `Invalid type for ${name}: expected object got ${typeof value}`
		}
	
		const result: MapOf<T> = {}
		for (const key in value) {
			if (value.hasOwnProperty(key)) {
				result[key] = next(name, value[key])
			}
		}
		return result
	}
}

export function mapToJson<T>(next: FromJsonFunction<T>): FromJsonFunction<MapOf<T>> {
	return mapFromJson(next)
}

export function allowNull<T>(next: FromJsonFunction<T>): FromJsonFunction<T | null> {
	return function(name: string, value: any) {
		if (value === null) {
			return null
		}
		return next(name, value)
	}
}

export function allowUndefined<T>(next: FromJsonFunction<T>): FromJsonFunction<T | undefined> {
	return function(name: string, value: any) {
		if (value === undefined) {
			return undefined
		}
		return next(name, value)
	}
}

export function allowNullOrUndefined<T>(next: FromJsonFunction<T>): FromJsonFunction<T | null | undefined> {
	return function(name: string, value: any) {
		if (value === null) {
			return null
		}
		if (value === undefined) {
			return undefined
		}
		return next(name, value)
	}
}

export function unsupportedFromJson(name: string, value: any): unknown {
	if (value === undefined) {
		throw `Invalid type for ${name}: expected unknown got undefined`
	}
	return value
}

export function unsupportedToJson(name: string, value: unknown): any {
	return unsupportedFromJson(name, value)
}

export function parseUnsupported(name: string, value: any): unknown {
	if (value === undefined) {
		throw `Invalid value for ${name}: expected unknown got undefined`
	}
	return value
}

export function booleanFromJson(name: string, value: any): boolean {
	if (typeof value !== 'boolean') {
		throw `Invalid type for ${name}: expected boolean got ${typeof value}`
	}
	return value
}

export function booleanToJson(name: string, value: boolean): any {
	return booleanFromJson(name, value)
}

export function parseBoolean(name: string, value: any): boolean {
	if (value === 'true') {
		return true
	} else if (value === 'false') {
		return false
	} else {
		throw `Invalid value for ${name}: expected boolean got "${value}"`
	}
}

export function stringFromJson(name: string, value: any): string {
	if (typeof value !== 'string') {
		throw `Invalid type for ${name}: expected string got ${typeof value}`
	}
	return value
}

export function stringToJson(name: string, value: string): any {
	return stringFromJson(name, value)
}

export function binaryFromJson(name: string, value: any): Buffer {
	if (typeof value !== 'string') {
		throw `Invalid type for ${name}: expected string got ${typeof value}`
	}
	return new Buffer(value, 'base64')
}

export function binaryToJson(name: string, value: string | Buffer): string {
	if (typeof value === 'string') {
		return value
	} else {
		return value.toString('base64')
	}
}

export function parseString(name: string, value: any): string {
	if (value === undefined) {
		throw `Invalid value for ${name}: expected string got undefined`
	}
	if (typeof value === 'string') {
		return value
	}
	if (typeof value === 'object' && typeof value.length === 'number') {
		if (value.length > 0) {
			return value[0]
		}
	}

	throw `Invalid value for ${name}: expected string got ${typeof value}`
}

export function integerFromJson(name: string, value: any): number {
	if (typeof value !== 'number') {
		throw `Invalid type for ${name}: expected number got ${typeof value}`
	}
	if (isNaN(value)) {
		throw `Invalid NaN for ${name}`
	}
	if (Math.floor(value) !== value) {
		throw `Invalid value for ${name}: expected integer got "${value}"`
	}
	return value
}

export function integerToJson(name: string, value: number): any {
	return integerFromJson(name, value)
}

export function parseInteger(name: string, value: any): number {
	if (typeof value === 'object' && typeof value.length === 'number' && value.length > 0) {
		value = value[0]
	}
	if (typeof value === 'string') {
		if (value.indexOf('.') !== -1) {
			throw `Invalid value for ${name}: expected integer got "${value}"`
		}

		const result = parseInt(value, 10)
		if (isNaN(result)) {
			throw `Invalid value for ${name}: expected integer got "${value}"`
		}
		return result
	}
	throw `Invalid value for ${name}: expected integer got ${typeof value}`
}

export function numberFromJson(name: string, value: any): number {
	if (typeof value !== 'number') {
		throw `Invalid type for ${name}: expected number got ${typeof value}`
	}
	if (isNaN(value)) {
		throw `Invalid NaN for ${name}`
	}
	return value
}

export function numberToJson(name: string, value: number): any {
	return numberFromJson(name, value)
}

export function parseNumber(name: string, value: any): number {
	if (typeof value === 'object' && typeof value.length === 'number' && value.length > 0) {
		value = value[0]
	}
	if (typeof value === 'string') {
		const result = parseFloat(value)
		if (isNaN(result)) {
			throw `Invalid value for ${name}: expected float got "${value}"`
		}
		return result
	}
	throw `Invalid value for ${name}: expected number got ${typeof value}`
}

export function dateFromJson(name: string, value: any): string {
	if (typeof value !== 'string') {
		throw `Invalid type for ${name}: expected string got ${typeof value}`
	}
	if (!value.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)) {
		throw `Invalid value for ${name}: expected valid date string got "${value}"`
	}
	return value
}

export function parseDate(name: string, value: any): string {
	return dateFromJson(name, value)
}

export function dateToJson(name: string, value: string): string {
	return dateFromJson(name, value)
}

export function dateTimeFromJson(name: string, value: any): Date {
	if (typeof value !== 'string') {
		throw `Invalid type for ${name}: expected string got ${typeof value}`
	}
	if (!value.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}(:[0-9]{2}(\.[0-9]+)?)?(Z|(\+|-)[0-9]{2}(:?[0-9]{2})?)$/)) {
		throw `Invalid value for ${name}: expected valid datetime string got "${value}"`
	}
	return new Date(value)
}

export function parseDateTime(name: string, value: any): Date {
	return dateTimeFromJson(name, value)
}

export function dateTimeToJson(name: string, value: Date): string {
	if (typeof value !== 'object' || typeof value.toISOString !== 'function') {
		throw `Invalid type for ${name}: expected Date got ${typeof value}`
	}
	return value.toISOString()
}

export function timeFromJson(name: string, value: any): string {
	if (typeof value !== 'string') {
		throw `Invalid type for ${name}: expected string got ${typeof value}`
	}
	if (!value.match(/^[0-9]{2}:[0-9]{2}(:[0-9]{2}(\.[0-9]+)?)?$/)) {
		throw `Invalid value for ${name}: expected valid time string got "${value}"`
	}
	return value
}

export function parseTime(name: string, value: any): string {
	return timeFromJson(name, value)
}

export function timeToJson(name: string, value: string): string {
	return timeFromJson(name, value)
}

/* Model conversion functions */

const ApiLabsDtoKeys: string[] = ['resourceType', 'id', 'status', 'category', 'patientName', 'patientId', 'effectiveDateTime', 'issued', 'performer', 'result']

function modelApiLabsDtoFromJsonContent(name: string, value: any, knownKeys: Record<string, boolean> = {}): Api.LabsDto {
	if (typeof value !== 'object' || value === undefined || value === null) {
		throw `Invalid type for ${name}: expected object got ${typeof value}`
	}

	ApiLabsDtoKeys.forEach(k => knownKeys[k] = true)

	const result: Api.LabsDto = {
		'resourceType': allowUndefined(stringFromJson)(`${name}.resourceType`, value['resourceType']),
		'id': allowUndefined(stringFromJson)(`${name}.id`, value['id']),
		'status': allowUndefined(stringFromJson)(`${name}.status`, value['status']),
		'category': allowUndefined(stringFromJson)(`${name}.category`, value['category']),
		'patientName': allowUndefined(stringFromJson)(`${name}.patientName`, value['patientName']),
		'patientId': allowUndefined(stringFromJson)(`${name}.patientId`, value['patientId']),
		'effectiveDateTime': allowUndefined(stringFromJson)(`${name}.effectiveDateTime`, value['effectiveDateTime']),
		'issued': allowUndefined(stringFromJson)(`${name}.issued`, value['issued']),
		'performer': allowUndefined(stringFromJson)(`${name}.performer`, value['performer']),
		'result': allowUndefined(arrayFromJson(modelApiLabsDtoResultFromJson))(`${name}.result`, value['result']),
	}

	return result
}

function modelApiLabsDtoToJsonContent(name: string, value: Api.LabsDto, knownKeys: Record<string, boolean> = {}): ToJson<Api.LabsDto> {
	if (typeof value !== 'object' || value === undefined || value === null) {
		throw `Invalid type for ${name}: expected object got ${typeof value}`
	}

	ApiLabsDtoKeys.forEach(k => knownKeys[k] = true)
	
	const result: ToJson<Api.LabsDto> = {
		'resourceType': allowUndefined(stringToJson)(`${name}.resourceType`, value['resourceType']),
		'id': allowUndefined(stringToJson)(`${name}.id`, value['id']),
		'status': allowUndefined(stringToJson)(`${name}.status`, value['status']),
		'category': allowUndefined(stringToJson)(`${name}.category`, value['category']),
		'patientName': allowUndefined(stringToJson)(`${name}.patientName`, value['patientName']),
		'patientId': allowUndefined(stringToJson)(`${name}.patientId`, value['patientId']),
		'effectiveDateTime': allowUndefined(stringToJson)(`${name}.effectiveDateTime`, value['effectiveDateTime']),
		'issued': allowUndefined(stringToJson)(`${name}.issued`, value['issued']),
		'performer': allowUndefined(stringToJson)(`${name}.performer`, value['performer']),
		'result': allowUndefined(arrayToJson(modelApiLabsDtoResultToJson))(`${name}.result`, value['result']),
	}

	return result
}

export function modelApiLabsDtoFromJson(name: string, value: any): Api.LabsDto {
	const knownKeys: Record<string, boolean> = {}
	const result: Api.LabsDto = modelApiLabsDtoFromJsonContent(name, value, knownKeys)

	/* Known keys */
	// TODO if we don't ignore unknown properties
	for (const key of Object.keys(value)) {
		if (!knownKeys[key]) {
			// throw `Unexpected key: ${key}`
			console.warn(`Unexpected key in Api.LabsDto: ${key}`)
		}
	}

	return result
}

export function modelApiLabsDtoToJson(name: string, value: Api.LabsDto): ToJson<Api.LabsDto> {
	const knownKeys: Record<string, boolean> = {}
	const result: ToJson<Api.LabsDto> = modelApiLabsDtoToJsonContent(name, value, knownKeys)

	/* Known keys */
	// TODO if we don't ignore unknown properties
	for (const key of Object.keys(value)) {
		if (!knownKeys[key]) {
			// throw `Unexpected key: ${key}`
			console.warn(`Unexpected key in Api.LabsDto: ${key}`)
		}
	}

	return result
}

const ApiLabsDtoResultKeys: string[] = ['type', 'resourceType', 'status', 'id', 'category', 'effectiveDateTime', 'valueQuantity', 'unit']

function modelApiLabsDtoResultFromJsonContent(name: string, value: any, knownKeys: Record<string, boolean> = {}): Api.LabsDto.Result {
	if (typeof value !== 'object' || value === undefined || value === null) {
		throw `Invalid type for ${name}: expected object got ${typeof value}`
	}

	ApiLabsDtoResultKeys.forEach(k => knownKeys[k] = true)

	const result: Api.LabsDto.Result = {
		'type': allowUndefined(stringFromJson)(`${name}.type`, value['type']),
		'resourceType': allowUndefined(stringFromJson)(`${name}.resourceType`, value['resourceType']),
		'status': allowUndefined(stringFromJson)(`${name}.status`, value['status']),
		'id': allowUndefined(stringFromJson)(`${name}.id`, value['id']),
		'category': allowUndefined(stringFromJson)(`${name}.category`, value['category']),
		'effectiveDateTime': allowUndefined(stringFromJson)(`${name}.effectiveDateTime`, value['effectiveDateTime']),
		'valueQuantity': allowUndefined(numberFromJson)(`${name}.valueQuantity`, value['valueQuantity']),
		'unit': allowUndefined(stringFromJson)(`${name}.unit`, value['unit']),
	}

	return result
}

function modelApiLabsDtoResultToJsonContent(name: string, value: Api.LabsDto.Result, knownKeys: Record<string, boolean> = {}): ToJson<Api.LabsDto.Result> {
	if (typeof value !== 'object' || value === undefined || value === null) {
		throw `Invalid type for ${name}: expected object got ${typeof value}`
	}

	ApiLabsDtoResultKeys.forEach(k => knownKeys[k] = true)
	
	const result: ToJson<Api.LabsDto.Result> = {
		'type': allowUndefined(stringToJson)(`${name}.type`, value['type']),
		'resourceType': allowUndefined(stringToJson)(`${name}.resourceType`, value['resourceType']),
		'status': allowUndefined(stringToJson)(`${name}.status`, value['status']),
		'id': allowUndefined(stringToJson)(`${name}.id`, value['id']),
		'category': allowUndefined(stringToJson)(`${name}.category`, value['category']),
		'effectiveDateTime': allowUndefined(stringToJson)(`${name}.effectiveDateTime`, value['effectiveDateTime']),
		'valueQuantity': allowUndefined(numberToJson)(`${name}.valueQuantity`, value['valueQuantity']),
		'unit': allowUndefined(stringToJson)(`${name}.unit`, value['unit']),
	}

	return result
}

export function modelApiLabsDtoResultFromJson(name: string, value: any): Api.LabsDto.Result {
	const knownKeys: Record<string, boolean> = {}
	const result: Api.LabsDto.Result = modelApiLabsDtoResultFromJsonContent(name, value, knownKeys)

	/* Known keys */
	// TODO if we don't ignore unknown properties
	for (const key of Object.keys(value)) {
		if (!knownKeys[key]) {
			// throw `Unexpected key: ${key}`
			console.warn(`Unexpected key in Api.LabsDto.Result: ${key}`)
		}
	}

	return result
}

export function modelApiLabsDtoResultToJson(name: string, value: Api.LabsDto.Result): ToJson<Api.LabsDto.Result> {
	const knownKeys: Record<string, boolean> = {}
	const result: ToJson<Api.LabsDto.Result> = modelApiLabsDtoResultToJsonContent(name, value, knownKeys)

	/* Known keys */
	// TODO if we don't ignore unknown properties
	for (const key of Object.keys(value)) {
		if (!knownKeys[key]) {
			// throw `Unexpected key: ${key}`
			console.warn(`Unexpected key in Api.LabsDto.Result: ${key}`)
		}
	}

	return result
}

const ApiLabsPagedResultDtoKeys: string[] = ['totalCount', 'items']

function modelApiLabsPagedResultDtoFromJsonContent(name: string, value: any, knownKeys: Record<string, boolean> = {}): Api.LabsPagedResultDto {
	if (typeof value !== 'object' || value === undefined || value === null) {
		throw `Invalid type for ${name}: expected object got ${typeof value}`
	}

	ApiLabsPagedResultDtoKeys.forEach(k => knownKeys[k] = true)

	const result: Api.LabsPagedResultDto = {
		'totalCount': allowUndefined(integerFromJson)(`${name}.totalCount`, value['totalCount']),
		'items': allowUndefined(arrayFromJson(modelApiLabsDtoFromJson))(`${name}.items`, value['items']),
	}

	return result
}

function modelApiLabsPagedResultDtoToJsonContent(name: string, value: Api.LabsPagedResultDto, knownKeys: Record<string, boolean> = {}): ToJson<Api.LabsPagedResultDto> {
	if (typeof value !== 'object' || value === undefined || value === null) {
		throw `Invalid type for ${name}: expected object got ${typeof value}`
	}

	ApiLabsPagedResultDtoKeys.forEach(k => knownKeys[k] = true)
	
	const result: ToJson<Api.LabsPagedResultDto> = {
		'totalCount': allowUndefined(integerToJson)(`${name}.totalCount`, value['totalCount']),
		'items': allowUndefined(arrayToJson(modelApiLabsDtoToJson))(`${name}.items`, value['items']),
	}

	return result
}

export function modelApiLabsPagedResultDtoFromJson(name: string, value: any): Api.LabsPagedResultDto {
	const knownKeys: Record<string, boolean> = {}
	const result: Api.LabsPagedResultDto = modelApiLabsPagedResultDtoFromJsonContent(name, value, knownKeys)

	/* Known keys */
	// TODO if we don't ignore unknown properties
	for (const key of Object.keys(value)) {
		if (!knownKeys[key]) {
			// throw `Unexpected key: ${key}`
			console.warn(`Unexpected key in Api.LabsPagedResultDto: ${key}`)
		}
	}

	return result
}

export function modelApiLabsPagedResultDtoToJson(name: string, value: Api.LabsPagedResultDto): ToJson<Api.LabsPagedResultDto> {
	const knownKeys: Record<string, boolean> = {}
	const result: ToJson<Api.LabsPagedResultDto> = modelApiLabsPagedResultDtoToJsonContent(name, value, knownKeys)

	/* Known keys */
	// TODO if we don't ignore unknown properties
	for (const key of Object.keys(value)) {
		if (!knownKeys[key]) {
			// throw `Unexpected key: ${key}`
			console.warn(`Unexpected key in Api.LabsPagedResultDto: ${key}`)
		}
	}

	return result
}

const ApiMessageDtoKeys: string[] = ['message']

function modelApiMessageDtoFromJsonContent(name: string, value: any, knownKeys: Record<string, boolean> = {}): Api.MessageDto {
	if (typeof value !== 'object' || value === undefined || value === null) {
		throw `Invalid type for ${name}: expected object got ${typeof value}`
	}

	ApiMessageDtoKeys.forEach(k => knownKeys[k] = true)

	const result: Api.MessageDto = {
		'message': stringFromJson(`${name}.message`, value['message']),
	}

	return result
}

function modelApiMessageDtoToJsonContent(name: string, value: Api.MessageDto, knownKeys: Record<string, boolean> = {}): ToJson<Api.MessageDto> {
	if (typeof value !== 'object' || value === undefined || value === null) {
		throw `Invalid type for ${name}: expected object got ${typeof value}`
	}

	ApiMessageDtoKeys.forEach(k => knownKeys[k] = true)
	
	const result: ToJson<Api.MessageDto> = {
		'message': stringToJson(`${name}.message`, value['message']),
	}

	return result
}

export function modelApiMessageDtoFromJson(name: string, value: any): Api.MessageDto {
	const knownKeys: Record<string, boolean> = {}
	const result: Api.MessageDto = modelApiMessageDtoFromJsonContent(name, value, knownKeys)

	/* Known keys */
	// TODO if we don't ignore unknown properties
	for (const key of Object.keys(value)) {
		if (!knownKeys[key]) {
			// throw `Unexpected key: ${key}`
			console.warn(`Unexpected key in Api.MessageDto: ${key}`)
		}
	}

	return result
}

export function modelApiMessageDtoToJson(name: string, value: Api.MessageDto): ToJson<Api.MessageDto> {
	const knownKeys: Record<string, boolean> = {}
	const result: ToJson<Api.MessageDto> = modelApiMessageDtoToJsonContent(name, value, knownKeys)

	/* Known keys */
	// TODO if we don't ignore unknown properties
	for (const key of Object.keys(value)) {
		if (!knownKeys[key]) {
			// throw `Unexpected key: ${key}`
			console.warn(`Unexpected key in Api.MessageDto: ${key}`)
		}
	}

	return result
}