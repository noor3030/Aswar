/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Body_login_auth_login_post } from '../models/Body_login_auth_login_post';
import type { schemas__User } from '../models/schemas__User';
import type { Token } from '../models/Token';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

    /**
     * Login
     * @param formData 
     * @returns Token Successful Response
     * @throws ApiError
     */
    public static loginAuthLoginPost(
formData: Body_login_auth_login_post,
): CancelablePromise<Token> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/login',
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Profile
     * @returns schemas__User Successful Response
     * @throws ApiError
     */
    public static getProfileAuthProfileGet(): CancelablePromise<schemas__User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/auth/profile',
        });
    }

}
