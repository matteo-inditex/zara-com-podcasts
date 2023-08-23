export interface GetPodcastResponseJSON {
    contents: string;
    status: Status;
}

interface Status {
    url: string;
    content_type: string;
    http_code: number;
    response_time: number;
    content_length: number;
}

export interface Contents {
    resultCount: number;
    results: Result[];
}

interface Result {
    wrapperType: string;
    kind: string;
    collectionId: number;
    trackId: number;
    artistName: string;
    collectionName: string;
    trackName: string;
    collectionCensoredName: string;
    trackCensoredName: string;
    collectionViewUrl: string;
    feedUrl: string;
    trackViewUrl: string;
    artworkUrl30: string;
    artworkUrl60: string;
    artworkUrl100: string;
    collectionPrice: number;
    trackPrice: number;
    collectionHdPrice: number;
    releaseDate: Date;
    collectionExplicitness: string;
    trackExplicitness: string;
    trackCount: number;
    trackTimeMillis: number;
    country: string;
    currency: string;
    primaryGenreName: string;
    contentAdvisoryRating: string;
    artworkUrl600: string;
    genreIds: string[];
    genres: string[];
}


export interface XML {
    rss: RSS;
}

interface RSS {
    channel: Channel;
    "_xmlns:itunes": string;
    "_xmlns:atom": string;
    "_xmlns:media": string;
    "_xmlns:psc": string;
    "_xmlns:omny": string;
    "_xmlns:content": string;
    "_xmlns:acast": string;
    "_xmlns:podcast": string;
    _version: string;
}

interface Channel {
    organizationId: Author;
    networkId: Author;
    programId: Author;
    playlistId: Author;
    language: Language;
    link: Array<LinkClass | string>;
    "new-feed-url": Author;
    title: string;
    description: string;
    type: Author;
    summary: Author;
    owner: Owner;
    author: Author;
    copyright: string;
    explicit: Author;
    category: CategoryElement[];
    image: ImageElement[];
    item: Item[];
}

interface Author {
    __prefix: AuthorPrefix;
    __text: string;
}

enum AuthorPrefix {
    Itunes = "itunes",
    Omny = "omny",
}

interface CategoryElement {
    category?: CategoryCategory;
    _text: string;
    __prefix: AuthorPrefix;
}

interface CategoryCategory {
    _text: string;
    __prefix: AuthorPrefix;
}

interface ImageElement {
    _href?: string;
    __prefix?: AuthorPrefix;
    url?: string;
    title?: string;
    link?: string;
}

interface Item {
    title: Array<Author | string>;
    description: string;
    encoded: Encoded;
    episodeType: Author;
    author: Author;
    image: ItemImage;
    content: Content[];
    guid: GUID;
    clipId: Author;
    pubDate: string;
    duration: Author;
    enclosure: Enclosure;
    link: string;
    transcript?: Content[];
    chapters?: Chapters;
    episode?: Author;
    summary?: Author;
    season?: Author;
    explicit?: Author;
}

interface Chapters {
    chapter: ChapterElement[] | ChapterElement;
    __prefix: ChaptersPrefix;
}

enum ChaptersPrefix {
    Psc = "psc",
}

interface ChapterElement {
    _start: string;
    _title: Title;
    __prefix: ChaptersPrefix;
}

enum Title {
    Marker01 = "Marker 01",
    Marker02 = "Marker 02",
}

interface Content {
    player?: Player;
    _url: string;
    _type: Type;
    __prefix: ContentPrefix;
    _language?: Language;
}

enum ContentPrefix {
    Media = "media",
    Podcast = "podcast",
}

enum Language {
    EnUS = "en-US",
}

enum Type {
    ApplicationSrt = "application/srt",
    AudioMPEG = "audio/mpeg",
    ImageJPEG = "image/jpeg",
    TextPlain = "text/plain",
    TextVtt = "text/vtt",
}

interface Player {
    _url: string;
    __prefix: ContentPrefix;
}

interface Enclosure {
    _url: string;
    _length: string;
    _type: Type;
}

interface Encoded {
    __prefix: EncodedPrefix;
    __cdata: string;
}

enum EncodedPrefix {
    Content = "content",
}

interface GUID {
    _isPermaLink: string;
    __text: string;
}

interface ItemImage {
    _href: string;
    __prefix: AuthorPrefix;
}

interface LinkClass {
    _rel: string;
    _type: string;
    _href: string;
    __prefix: string;
}

interface Owner {
    name: Author;
    email: Author;
    __prefix: AuthorPrefix;
}
