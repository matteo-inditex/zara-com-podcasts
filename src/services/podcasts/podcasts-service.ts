import { IEpisode, IPodcast, IFeed } from "../../types";
import { AllCorsResponse, getAllCorsUrl } from "../utils/cors";
import { getJSON } from "../utils/http";
import { IEpisodeResponse } from "./IEpisodeResponse";
import { mapToIEpisodeList, mapToIPodcastList } from "./mappers";
import { getPodcastEpisodesUrl, getTop100UsPodcastsUrl } from "./urls";

export const getPodcasts = async (): Promise<IPodcast[]> => {
    const data = await getJSON<AllCorsResponse>(getAllCorsUrl(getTop100UsPodcastsUrl()));
    return mapToIPodcastList(JSON.parse(data.contents).feed as IFeed);
}

export const getPodcastEpisodes = async (id: string): Promise<IEpisode[]> => {
    const data = await getJSON<AllCorsResponse>(getAllCorsUrl(getPodcastEpisodesUrl(id)))
    return mapToIEpisodeList((JSON.parse(data.contents)).results as IEpisodeResponse[])
}
