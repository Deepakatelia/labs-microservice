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

export namespace Api {
	export interface LabsDto {
		resourceType?: string;
		id?: string;
		status?: string;
		category?: string;
		patientName?: string;
		patientId?: string;
		effectiveDateTime?: string;
		issued?: string;
		performer?: string;
		result?: Api.LabsDto.Result[];
	}
	
	/**
	 * @export
	 * @namespace LabsDto
	 */
	export namespace LabsDto {
		export interface Result {
			type?: string;
			resourceType?: string;
			status?: string;
			id?: string;
			category?: string;
			effectiveDateTime?: string;
			/**
			 * @type {number}
			 * @memberof Result
			 */
			valueQuantity?: number;
			unit?: string;
		}
	
	}

	export interface LabsPagedResultDto {
		/**
		 * @type {number}
		 * @memberof LabsPagedResultDto
		 */
		totalCount?: number;
		items?: Api.LabsDto[];
	}

	export interface MessageDto {
		message: string;
	}

}
