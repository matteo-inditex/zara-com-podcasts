import { IEpisode } from "../../../types";

export function mapEpisode(
    episodes: IEpisode[] | undefined,
    episodeTrackId: string | undefined
) {
    let descriptionHTMLstring = "";
    if (episodes === undefined || episodeTrackId === undefined) {
        return undefined;
    }
    const foundEpisode = episodes.find(
        (episode: IEpisode) => episode.trackId === parseInt(episodeTrackId)
    );
    if (foundEpisode === undefined) {
        return undefined;
    }
    if (foundEpisode.description !== undefined) {
        const descriptionElement = new window.DOMParser()
            .parseFromString(foundEpisode.description, "text/html")
            .querySelector("body");
        descriptionHTMLstring =
            descriptionElement === null ? "" : descriptionElement.innerHTML;
    }
    return {
        trackName: foundEpisode.trackName,
        descriptionHTMLstring,
        media: foundEpisode.media,
    };
}
