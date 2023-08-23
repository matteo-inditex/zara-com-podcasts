import { GetPodcastsResponseJSON } from "./types/responses/getPodcastsAPI"
import { getJSON, getXML } from "./utils/fetch-api";
import { PodcastOverview } from "../types";
import { mapXMLtoPodcastDetails } from "./utils/mappers";
import { PodcastDetails } from "./types/mapped";
import { Contents, GetPodcastResponseJSON } from "./types/responses/getPodcastAPI";

export const getPodcasts = async (): Promise<PodcastOverview[]> => {
    const response = await getJSON<GetPodcastsResponseJSON>("https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json");
    return response.feed.entry.map(entry => ({
        id: entry.id.attributes["im:id"],
        name: entry["im:name"],
        image: entry["im:image"],
        artist: entry["im:artist"]
    }));
}

export const getPodcast = async (id: string): Promise<PodcastDetails> => {
    const response = await getJSON<GetPodcastResponseJSON>("https://api.allorigins.win/get?url=" + encodeURIComponent("https://itunes.apple.com/lookup?id=" + id))
    const feedUrl = (JSON.parse(response.contents) as Contents).results[0].feedUrl;
    const xmlDoc = await getXML(feedUrl)
    return mapXMLtoPodcastDetails(xmlDoc);
}
