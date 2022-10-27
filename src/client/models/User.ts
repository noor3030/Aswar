/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Role } from './Role';

export type User = {
    id?: number;
    name: string;
    email: string;
    hash_password: string;
    role: Role;
};
