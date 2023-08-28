import { IEpisode, IFeed, IPodcast } from "../../types";
import { IEpisodeResponse } from "./IEpisodeResponse";

function getParsedReleaseDate(dateText: string) {
    return new Date(dateText).toLocaleDateString("es-es")
}

function padTo2Digits(number: number) {
    return number.toString().padStart(2, '0');
}

function convertMsToHMS(milliseconds: number) {
    const seconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(seconds / 3600);
    let remainingSeconds = seconds - hours * 3600;
    const minutes = Math.floor(remainingSeconds / 60);
    remainingSeconds = remainingSeconds - minutes * 60;

    const showHours = hours > 0 ? padTo2Digits(hours) + ":" : ""
    const showMinutes = hours > 0 || minutes > 0 ? padTo2Digits(minutes) + ":" : ""
    const showSeconds = hours > 0 || minutes > 0 ? padTo2Digits(remainingSeconds) : remainingSeconds;
    return showHours + showMinutes + showSeconds;
}

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
        releaseDate: getParsedReleaseDate(item.releaseDate),
        description: item.description,
        duration: convertMsToHMS(item.trackTimeMillis),
    }))
}