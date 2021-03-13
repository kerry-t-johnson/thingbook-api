import { DataSharingTemplate } from "./data-sharing.api";
import { User } from "./user.api";

// ===========================================================================
// Organization
// ===========================================================================
export const DomainVerificationMethods = [
    'DNS_TEXT_RECORD',
    'HTML_META_TAG',
    'HTTP_FILE'
];


/**
 * Interface declaration for an {@link Organization}, as defined by {@link OrganizationSchema}
 * An {@link Organization} is a ThingBook entity which can form Data Sharing
 * Agreements to produce or consume Observations.  See {@link OrganizationSchema}
 * for properties.
 * 
 * @category Domain Model
 */
export interface Organization {
    _id?: any,
    __v?: number,

    /** The common name of the {@link Organization} (e.g.Shenandoah, Inc.) */
    name: string,

    /** The domain name of the {@link Organization} (e.g.shenandoah.com) */
    domainName: string,

    /** The URL to the[OGC - compliant Sensor Things API](https://www.ogc.org/standards/sensorthings) of the {@link Organization} */
    sensorThingsAPI: string,

    sensorThingsMQTT: string,

    /** If this {@link Organization} is a sub-organizations, references the parent {@link Organization}, else NULL */
    parent?: Organization,

    verification?: {
        method: string,
        token: string,
        user: User,
        verified: boolean,
    }
}

// ===========================================================================
// Organization Role
// ===========================================================================
export interface OrganizationRole {
    _id?: any,
    __v?: number,
    user: User,
    org: Organization,
    role: string
}

// ===========================================================================
// Organization Data Sharing Template
// ===========================================================================
export interface OrganizationDataSharingTemplate {
    _id?: any,
    __v?: number,
    name?: string,
    org: Organization,
    template: DataSharingTemplate,
    auto: boolean,
    keywords: string[],
    datastreams: string[],
}

// ===========================================================================
// Organization Data Sharing Agreement
// ===========================================================================
export interface DataStreamMetrics {
    name: string,
    count?: number,
    lastPhenomenonTime?: Date,
    lastSuccessfulTime?: Date,
    lastAttemptTime?: Date,
}

export enum OrganizationDataSharingAgreementState {
    INACTIVE = 'INACTIVE',
    ACTIVE = 'ACTIVE',
    EXPIRED = 'EXPIRED',
    CANCELLED = 'CANCELLED'
}

export interface OrganizationDataSharingAgreement {
    _id?: any,
    __v?: number,
    name: string,
    producer: Organization,
    consumer: Organization,
    commenceDate: Date,
    expirationDate: Date,
    state: OrganizationDataSharingAgreementState,
    template: OrganizationDataSharingTemplate,
    datastreams: DataStreamMetrics[]
}

// ===========================================================================
// Organization Sensor Things Status
// ===========================================================================
export interface OrganizationSensorThingsStatus {
    _id?: any,
    __v?: number,
    org: Organization,
    reachable: boolean
}