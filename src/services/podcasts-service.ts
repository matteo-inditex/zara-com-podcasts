import { GetPodcastsResponseJSON } from "./types/getPodcastsAPI"
import { get } from "./utils/fetch-api";
import { PodcastOverview } from "../types";

export const getPodcasts = async (): Promise<PodcastOverview[]> => {
    const response = await get<GetPodcastsResponseJSON>("https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json");
    return response.feed.entry.map(entry => ({
        id: entry.id.attributes["im:id"],
        name: entry["im:name"],
        image: entry["im:image"],
        artist: entry["im:artist"]
    }));
}

// TOFIX
export const getPodcast = async (id: string) => {
    return get<GetPodcastsResponseJSON>("https://api.allorigins.win/get?url=" + encodeURIComponent("https://itunes.apple.com/lookup?id=" + id + "&media=podcast&entity=podcast"))
}

