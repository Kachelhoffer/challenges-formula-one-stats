import { WinnerModel } from "./WinnerModel"

export interface ChampionDriverListModel{
    "MRData": {
        "xmlns": string,
        "series": string,
        "url": string,
        "limit": string,
        "offset": string,
        "total": string,
        "StandingsTable": {
            "driverStandings": string,
            "StandingsLists": WinnerModel[]
        }
    }
}

