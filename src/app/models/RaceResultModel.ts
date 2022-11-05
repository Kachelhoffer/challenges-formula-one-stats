import { DriverModel } from "./DriverModel"

export interface RaceResultModel{
    "number": string,
    "position": string,
    "positionText": string,
    "points": string,
    "Driver": DriverModel,
    "Constructor": {
        "constructorId": string,
        "url": string,
        "name": string,
        "nationality": string
    },
    "grid": string,
    "laps": string,
    "status": string,
    "Time": {
        "millis": string,
        "time": string
    },
    "FastestLap": {
        "rank": string,
        "lap": string,
        "Time": {
            "time": string
        },
        "AverageSpeed": {
            "units": string,
            "speed": string
        }
    }
}