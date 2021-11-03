/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Employee } from './Employee';

export type Department = {
    id: number;
    name: string;
    description: string;
    location: string;
    employees: Array<Employee>;
}