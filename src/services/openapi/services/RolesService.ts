/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateRoleDto } from '../models/CreateRoleDto';
import type { Role } from '../models/Role';
import type { UpdateRoleDto } from '../models/UpdateRoleDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class RolesService {

    /**
     * @param requestBody 
     * @returns Role 
     * @throws ApiError
     */
    public static rolesControllerCreate(
requestBody: CreateRoleDto,
): CancelablePromise<Role> {
        return __request({
            method: 'POST',
            path: `/roles`,
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns Role 
     * @throws ApiError
     */
    public static rolesControllerFindAll(): CancelablePromise<Array<Role>> {
        return __request({
            method: 'GET',
            path: `/roles`,
        });
    }

    /**
     * @param id 
     * @returns Role 
     * @throws ApiError
     */
    public static rolesControllerFindOne(
id: string,
): CancelablePromise<Role> {
        return __request({
            method: 'GET',
            path: `/roles/${id}`,
        });
    }

    /**
     * @param id 
     * @param requestBody 
     * @returns any 
     * @throws ApiError
     */
    public static rolesControllerUpdate(
id: string,
requestBody: UpdateRoleDto,
): CancelablePromise<any> {
        return __request({
            method: 'PATCH',
            path: `/roles/${id}`,
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id 
     * @returns any 
     * @throws ApiError
     */
    public static rolesControllerRemove(
id: string,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/roles/${id}`,
        });
    }

}