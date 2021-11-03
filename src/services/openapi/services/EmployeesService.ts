/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateEmployeeDto } from '../models/CreateEmployeeDto';
import type { Employee } from '../models/Employee';
import type { UpdateEmployeeDto } from '../models/UpdateEmployeeDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class EmployeesService {

    /**
     * @param requestBody 
     * @returns Employee 
     * @throws ApiError
     */
    public static employeesControllerCreate(
requestBody: CreateEmployeeDto,
): CancelablePromise<Employee> {
        return __request({
            method: 'POST',
            path: `/employees`,
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns Employee 
     * @throws ApiError
     */
    public static employeesControllerFindAll(): CancelablePromise<Array<Employee>> {
        return __request({
            method: 'GET',
            path: `/employees`,
        });
    }

    /**
     * @param id 
     * @returns Employee 
     * @throws ApiError
     */
    public static employeesControllerFindOne(
id: string,
): CancelablePromise<Employee> {
        return __request({
            method: 'GET',
            path: `/employees/${id}`,
        });
    }

    /**
     * @param id 
     * @param requestBody 
     * @returns any 
     * @throws ApiError
     */
    public static employeesControllerUpdate(
id: string,
requestBody: UpdateEmployeeDto,
): CancelablePromise<any> {
        return __request({
            method: 'PATCH',
            path: `/employees/${id}`,
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id 
     * @returns any 
     * @throws ApiError
     */
    public static employeesControllerRemove(
id: string,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/employees/${id}`,
        });
    }

    /**
     * RELATIONSHIPS
     * @param employeeId 
     * @param departmentId 
     * @returns any 
     * @throws ApiError
     */
    public static employeesControllerSetDepartmentById(
employeeId: string,
departmentId: string,
): CancelablePromise<any> {
        return __request({
            method: 'PATCH',
            path: `/employees/${employeeId}/departments/${departmentId}`,
        });
    }

    /**
     * @param employeeId 
     * @returns any 
     * @throws ApiError
     */
    public static employeesControllerUnsetDepartmentById(
employeeId: string,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/employees/${employeeId}/departments`,
        });
    }

}