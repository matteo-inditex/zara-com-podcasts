import { getESdateFromTimestamp } from "../../converters/date";
import { convertMillisToHMS } from "../../converters/time";
import { IEpisode, IFeed, IPodcast } from "../../types";
import { IEpisodeResponse } from "../../types/IEpisodeResponse";

export function mapToIPodcastList(feed: IFeed): IPodcast[] {
    return feed.entry.map(entry => ({
        id: entry.id.attributes["im:id"],
        name: entry["im:name"],
        image: entry["im:image"][entry["im:image"].length - 1],
        artist: entry["im:artist"],
        summary: {
            label: entry["summary"].label
        }
    }))
}

export function mapToIEpisodeList(episodeResponseList: IEpisodeResponse[]): IEpisode[] {
    return episodeResponseList.map(item => ({
        guid: item.episodeGuid,
        trackId: item.trackId,
        trackName: item.trackName,
        media: {
            url: item.episodeUrl,
            fileExtension: item.episodeFileExtension,
            contentType: item.episodeContentType
        },
        releaseDate: getESdateFromTimestamp(item.releaseDate),
        description: item.description,
        duration: convertMillisToHMS(item.trackTimeMillis),
    }))
}