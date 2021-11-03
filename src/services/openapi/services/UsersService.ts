/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateUserDto } from '../models/CreateUserDto';
import type { UpdateUserDto } from '../models/UpdateUserDto';
import type { User } from '../models/User';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class UsersService {

    /**
     * Create new user
     * @param requestBody 
     * @returns User User successfully created
     * @throws ApiError
     */
    public static usersControllerCreate(
requestBody: CreateUserDto,
): CancelablePromise<User> {
        return __request({
            method: 'POST',
            path: `/users`,
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request: constraint problem`,
                500: `Internal Sever Error`,
            },
        });
    }

    /**
     * Find users based on options provided in query. The query key is expected if find-options
     * @returns any 
     * @throws ApiError
     */
    public static usersControllerFindAll(): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/users`,
        });
    }

    /**
     * @param id 
     * @returns User 
     * @throws ApiError
     */
    public static usersControllerFindOne(
id: string,
): CancelablePromise<User> {
        return __request({
            method: 'GET',
            path: `/users/${id}`,
        });
    }

    /**
     * @param id 
     * @param requestBody 
     * @returns any 
     * @throws ApiError
     */
    public static usersControllerUpdate(
id: string,
requestBody: UpdateUserDto,
): CancelablePromise<any> {
        return __request({
            method: 'PATCH',
            path: `/users/${id}`,
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id 
     * @returns any 
     * @throws ApiError
     */
    public static usersControllerRemove(
id: string,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/users/${id}`,
        });
    }

    /**
     * Relationships
     * @param userId 
     * @param roleId 
     * @returns any 
     * @throws ApiError
     */
    public static usersControllerAddRoleById(
userId: string,
roleId: string,
): CancelablePromise<any> {
        return __request({
            method: 'PATCH',
            path: `/users/${userId}/roles/${roleId}`,
        });
    }

    /**
     * @param userId 
     * @param roleId 
     * @returns any 
     * @throws ApiError
     */
    public static usersControllerRemoveRoleById(
userId: string,
roleId: string,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/users/${userId}/roles/${roleId}`,
        });
    }

    /**
     * @param userId 
     * @returns any 
     * @throws ApiError
     */
    public static usersControllerAddRolesById(
userId: string,
): CancelablePromise<any> {
        return __request({
            method: 'PATCH',
            path: `/users/${userId}/roles`,
        });
    }

    /**
     * @param userId 
     * @returns any 
     * @throws ApiError
     */
    public static usersControllerRemoveRolesById(
userId: string,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/users/${userId}/roles`,
        });
    }

    /**
     * @param userId 
     * @param userProfileId 
     * @returns any 
     * @throws ApiError
     */
    public static usersControllerSetUserProfileById(
userId: string,
userProfileId: string,
): CancelablePromise<any> {
        return __request({
            method: 'PATCH',
            path: `/users/${userId}/user-profile/${userProfileId}`,
        });
    }

    /**
     * @param userId 
     * @returns any 
     * @throws ApiError
     */
    public static usersControllerUnsetUserProfileById(
userId: string,
): CancelablePromise<any> {
        return __request({
            method: 'PATCH',
            path: `/users/${userId}/user-profile`,
        });
    }

    /**
     * @param userId 
     * @param employeeId 
     * @returns any 
     * @throws ApiError
     */
    public static usersControllerSetEmployeeById(
userId: string,
employeeId: string,
): CancelablePromise<any> {
        return __request({
            method: 'PATCH',
            path: `/users/${userId}/employee/${employeeId}`,
        });
    }

    /**
     * @param userId 
     * @returns any 
     * @throws ApiError
     */
    public static usersControllerUnsetEmployeeById(
userId: string,
): CancelablePromise<any> {
        return __request({
            method: 'PATCH',
            path: `/users/${userId}/employee`,
        });
    }

}