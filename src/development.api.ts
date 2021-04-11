// ===========================================================================
// Data Load Request
// ===========================================================================

import { Links } from "./metadata.api";

export interface EntityCreationStatus {
    resource: string,
    data: string,
    dynamic?: string,
    createAt?: Date,
    status?: number,

    links?: Links
};

export enum DataLoadRequestState {
    IN_PROGRESS = 'IN_PROGRESS',
    COMPLETE = 'COMPLETE',
    FAILED = 'FAILED',
}

export interface DataLoadRequest {
    _id?: any,
    __v?: number,

    name: string,
    url: URL,
    state?: DataLoadRequestState,
    created?: number,
    existing?: number,
    failed?: number,
    files?: string[],
    entities?: EntityCreationStatus[],

    links?: Links
}
