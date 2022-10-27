/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Body_create_product_products_post } from '../models/Body_create_product_products_post';
import type { Pagination } from '../models/Pagination';
import type { Product } from '../models/Product';

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

    /**
     * Create Product
     * @param formData 
     * @returns Product Successful Response
     * @throws ApiError
     */
    public static createProductProductsPost(
formData: Body_create_product_products_post,
): CancelablePromise<Product> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/products',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
