/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateRoleDto = {
    name?: string;
    description?: string;
    functionalArea?: UpdateRoleDto.functionalArea;
}

export namespace UpdateRoleDto {

    export enum functionalArea {
        HUMAN_RESOURCES = 'Human Resources',
        INFORMATION_TECHNOLOGY = 'Information Technology',
    }


}