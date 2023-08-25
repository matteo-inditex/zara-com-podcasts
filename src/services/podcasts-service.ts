import { GetPodcastsResponseJSON } from "./types/responses/getPodcastEpisodesAPI"
import { getJSON } from "./utils/fetch-api";
import { IPodcast } from "../types";
import { Contents, GetPodcastEpisodesResponseJSON } from "./types/responses/getPodcastAPI";
import { IEpisode } from "./types/mapped";
import { mapToEpisodes, mapToIPodcasts } from "./utils/mappers";

export const getPodcasts = async (): Promise<IPodcast[]> => {
    const data = await getJSON<GetPodcastsResponseJSON>("https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json");
    return mapToIPodcasts(data);
}

export const getPodcastEpisodes = async (id: string): Promise<IEpisode[]> => {
    const url = `https://itunes.apple.com/lookup?id=${id}&country=US&media=podcast&entity=podcastEpisode&limit=100`
    const data = await getJSON<GetPodcastEpisodesResponseJSON>(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`)
    return mapToEpisodes((JSON.parse(data.contents) as Contents).results)
}
