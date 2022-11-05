import { CircuitModel } from "./CircuitModel"
import { RaceResultModel } from "./RaceResultModel"

export interface RaceModel{
    "season": string,
    "round": string,
    "url": string,
    "raceName": string,
    "Circuit": CircuitModel,
    "date": string,
    "time": string,
    "Results": RaceResultModel[]
}