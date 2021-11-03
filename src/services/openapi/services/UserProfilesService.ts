/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateUserProfileDto } from '../models/CreateUserProfileDto';
import type { UpdateUserProfileDto } from '../models/UpdateUserProfileDto';
import type { UserProfile } from '../models/UserProfile';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class UserProfilesService {

    /**
     * @param requestBody 
     * @returns UserProfile 
     * @throws ApiError
     */
    public static userProfilesControllerCreate(
requestBody: CreateUserProfileDto,
): CancelablePromise<UserProfile> {
        return __request({
            method: 'POST',
            path: `/user-profiles`,
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns UserProfile 
     * @throws ApiError
     */
    public static userProfilesControllerFindAll(): CancelablePromise<Array<UserProfile>> {
        return __request({
            method: 'GET',
            path: `/user-profiles`,
        });
    }

    /**
     * @param id 
     * @returns UserProfile 
     * @throws ApiError
     */
    public static userProfilesControllerFindOne(
id: string,
): CancelablePromise<UserProfile> {
        return __request({
            method: 'GET',
            path: `/user-profiles/${id}`,
        });
    }

    /**
     * @param id 
     * @param requestBody 
     * @returns any 
     * @throws ApiError
     */
    public static userProfilesControllerUpdate(
id: string,
requestBody: UpdateUserProfileDto,
): CancelablePromise<any> {
        return __request({
            method: 'PATCH',
            path: `/user-profiles/${id}`,
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id 
     * @returns any 
     * @throws ApiError
     */
    public static userProfilesControllerRemove(
id: string,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/user-profiles/${id}`,
        });
    }

}