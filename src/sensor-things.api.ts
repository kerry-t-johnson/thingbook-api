


export interface ST_Observation {
    phenomenonTime: Date,
    result: any,
    resultTime: Date,
    validTime?: Date,
    parameters?: { [key: string]: any },
    Datastream: any,
    FeatureOfInterest: any
}

