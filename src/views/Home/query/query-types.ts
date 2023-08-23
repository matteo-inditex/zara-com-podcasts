import { PodcastOverview } from "../../../types";

export interface Query {
    searchText: string,
    results: PodcastOverview[]
}