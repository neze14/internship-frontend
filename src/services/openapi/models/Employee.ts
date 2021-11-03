/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Department } from './Department';
import type { User } from './User';

export type Employee = {
    id: number;
    employeeNumber: string;
    firstName: string;
    middleName: string;
    lastName: string;
    jobPosition: string;
    jobTitle: string;
    photo: string;
    user: User;
    userId: number;
    department: Department;
    departmentId: number;
}