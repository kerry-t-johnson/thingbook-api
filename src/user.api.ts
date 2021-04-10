import { Links } from "./metadata.api";

export interface User {
    _id?: any,
    __v?: number,
    email: string,
    first?: string,
    last?: string,
    profile?: { [key: string]: any },

    links?: Links
}