/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Pagination } from '../models/Pagination';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ProductService {

    /**
     * Read Products
     * @param page 
     * @param perPage 
     * @param isExpired 
     * @returns Pagination Successful Response
     * @throws ApiError
     */
    public static readProductsProductsGet(
page: number,
perPage: number = 25,
isExpired: boolean = true,
): CancelablePromise<Pagination> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/products',
            query: {
                'page': page,
                'per_page': perPage,
                'is_expired': isExpired,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
