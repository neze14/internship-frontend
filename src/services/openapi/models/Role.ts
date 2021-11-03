/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { User } from './User';

export type Role = {
    id: number;
    name: string;
    description: string;
    functionalArea: Role.functionalArea;
    users: Array<User>;
}

export namespace Role {

    export enum functionalArea {
        HUMAN_RESOURCES = 'Human Resources',
        INFORMATION_TECHNOLOGY = 'Information Technology',
    }


}