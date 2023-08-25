import { IPodcast } from "../../../types";

export interface Query {
    searchText: string,
    results: IPodcast[]
}