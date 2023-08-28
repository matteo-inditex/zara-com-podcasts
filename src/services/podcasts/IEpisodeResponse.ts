export interface IEpisodeResponse {
    wrapperType: WrapperType;
    kind: Kind;
    collectionId: number;
    trackId: number;
    artistName?: string;
    collectionName: Name;
    trackName: string;
    collectionCensoredName?: Name;
    trackCensoredName?: Name;
    collectionViewUrl: string;
    feedUrl: string;
    trackViewUrl: string;
    artworkUrl30?: string;
    artworkUrl60: string;
    artworkUrl100?: string;
    collectionPrice?: number;
    trackPrice?: number;
    collectionHdPrice?: number;
    releaseDate: string;
    collectionExplicitness?: string;
    trackExplicitness?: string;
    trackCount?: number;
    trackTimeMillis: number;
    country: Country;
    currency?: string;
    primaryGenreName?: PrimaryGenreNameEnum;
    contentAdvisoryRating: ContentAdvisoryRating;
    artworkUrl600: string;
    genreIds?: string[];
    genres: Array<GenreClass | string>;
    previewUrl?: string;
    episodeUrl?: string;
    artistIds?: any[];
    closedCaptioning?: ClosedCaptioning;
    episodeGuid?: string;
    description?: string;
    shortDescription?: string;
    artworkUrl160?: string;
    episodeFileExtension?: EpisodeFileExtension;
    episodeContentType?: EpisodeContentType;
}

enum ClosedCaptioning {
    None = "none",
}

enum Name {
    BIGFACTSWithBigBankDJScream = "BIG FACTS with Big Bank & DJ Scream",
}

enum ContentAdvisoryRating {
    Explicit = "Explicit",
}

enum Country {
    Usa = "USA",
}

export enum EpisodeContentType {
    Audio = "audio",
}

export enum EpisodeFileExtension {
    Mp3 = "mp3",
}

interface GenreClass {
    name: PrimaryGenreNameEnum;
    id: string;
}

enum PrimaryGenreNameEnum {
    MusicInterviews = "Music Interviews",
}

enum Kind {
    Podcast = "podcast",
    PodcastEpisode = "podcast-episode",
}

enum WrapperType {
    PodcastEpisode = "podcastEpisode",
    Track = "track",
}
