/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Role } from './Role';

export type models__User = {
    id?: number;
    name: string;
    email: string;
    role: Role;
    hashed_password: string;
};
