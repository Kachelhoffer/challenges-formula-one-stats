import { RaceModel } from "./RaceModel"

export interface RaceWinnersForYear{
    "MRData": {
        "xmlns": string,
        "series": string,
        "url": string,
        "limit": string,
        "offset": string,
        "total": string,
        "RaceTable": {
            "season": string,
            "position": string,
            "Races": RaceModel[ ]
        }
    }
}