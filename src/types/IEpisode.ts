import { EpisodeContentType, EpisodeFileExtension } from "../services/podcasts/IEpisodeResponse"

export interface IEpisode {
    guid?: string,
    trackName: string,
    duration: string,
    trackId: number,
    media: Media
    description?: string,
    releaseDate: string,
}

export interface Media {
    url?: string,
    fileExtension?: EpisodeFileExtension,
    contentType?: EpisodeContentType
}