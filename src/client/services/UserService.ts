/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { models__User } from '../models/models__User';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserService {

    /**
     * Read User
     * @param id 
     * @returns models__User Successful Response
     * @throws ApiError
     */
    public static readUserUsersIdGet(
id: string,
): CancelablePromise<models__User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
