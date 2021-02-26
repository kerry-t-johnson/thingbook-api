// ===========================================================================
// Data Sharing Fragment
// ===========================================================================
export enum DataSharingFragmentType {
    AUTHORIZATION = 'AUTHORIZATION',
    OBLIGATION = 'OBLIGATION',
    PROHIBITION = 'PROHIBITION',
}

export interface DataSharingFragment {
    _id?: any,
    __v?: number,
    name: string,
    text: string,
    type: DataSharingFragmentType
}

// ===========================================================================
// Data Sharing Template
// ===========================================================================
export interface DataSharingTemplate {
    _id?: any,
    __v?: number,
    name: String,
    fragments: DataSharingFragment[]
}