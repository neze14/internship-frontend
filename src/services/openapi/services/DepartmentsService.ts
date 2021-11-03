/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateDepartmentDto } from '../models/CreateDepartmentDto';
import type { Department } from '../models/Department';
import type { UpdateDepartmentDto } from '../models/UpdateDepartmentDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class DepartmentsService {

    /**
     * @param requestBody 
     * @returns Department 
     * @throws ApiError
     */
    public static departmentsControllerCreate(
requestBody: CreateDepartmentDto,
): CancelablePromise<Department> {
        return __request({
            method: 'POST',
            path: `/departments`,
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns Department 
     * @throws ApiError
     */
    public static departmentsControllerFindAll(): CancelablePromise<Array<Department>> {
        return __request({
            method: 'GET',
            path: `/departments`,
        });
    }

    /**
     * @param id 
     * @returns Department 
     * @throws ApiError
     */
    public static departmentsControllerFindOne(
id: string,
): CancelablePromise<Department> {
        return __request({
            method: 'GET',
            path: `/departments/${id}`,
        });
    }

    /**
     * @param id 
     * @param requestBody 
     * @returns any 
     * @throws ApiError
     */
    public static departmentsControllerUpdate(
id: string,
requestBody: UpdateDepartmentDto,
): CancelablePromise<any> {
        return __request({
            method: 'PATCH',
            path: `/departments/${id}`,
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id 
     * @returns any 
     * @throws ApiError
     */
    public static departmentsControllerRemove(
id: string,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/departments/${id}`,
        });
    }

    /**
     * relationships
     * @param departmentId 
     * @param employeeId 
     * @returns any 
     * @throws ApiError
     */
    public static departmentsControllerAddEmployeeById(
departmentId: string,
employeeId: string,
): CancelablePromise<any> {
        return __request({
            method: 'PATCH',
            path: `/departments/${departmentId}/employees/${employeeId}`,
        });
    }

    /**
     * @param departmentId 
     * @param employeeId 
     * @returns any 
     * @throws ApiError
     */
    public static departmentsControllerRemoveEmployeeById(
departmentId: number,
employeeId: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/departments/${departmentId}/employees/${employeeId}`,
        });
    }

    /**
     * @param departmentId 
     * @returns any 
     * @throws ApiError
     */
    public static departmentsControllerAddEmployeesById(
departmentId: string,
): CancelablePromise<any> {
        return __request({
            method: 'PATCH',
            path: `/departments/${departmentId}/employees`,
        });
    }

    /**
     * @param departmentId 
     * @returns any 
     * @throws ApiError
     */
    public static departmentsControllerRemoveEmployeesById(
departmentId: string,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/departments/${departmentId}/employees`,
        });
    }

}