import { DriverStandingsModel } from "./DriverStandingsModel";

export interface WinnerModel{
    "season": string,
    "round": string,
    "DriverStandings": DriverStandingsModel[]
}