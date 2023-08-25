import { IPodcast } from "../../../types";

export const getFilteredPodcasts = (searchText: string, podcastsOverview: IPodcast[] | undefined) => {
    if (!Array.isArray(podcastsOverview)) {
        return [];
    }
    const upperCaseSearchText = searchText.toUpperCase();
    return podcastsOverview.filter(podcastOverview =>
        podcastOverview.artist.label.toUpperCase().includes(upperCaseSearchText) || podcastOverview.name.label.toUpperCase().includes(upperCaseSearchText))
}