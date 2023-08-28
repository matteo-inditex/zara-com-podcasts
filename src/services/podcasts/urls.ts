const BASE_API_URL = "https://itunes.apple.com";
const TOPPODCASTS = "/us/rss/toppodcasts";
const LOOKUP = "/lookup";
const LIMIT_100 = "/limit=100";
const GENRE_1310 = "/genre=1310"
const JSON = "/json";


export function getTop100UsPodcastsUrl() {
    return BASE_API_URL + TOPPODCASTS + LIMIT_100 + GENRE_1310 + JSON;
}

export function getPodcastEpisodesUrl(id: string) {
    const url = new URL(BASE_API_URL + LOOKUP);
    url.searchParams.set("id", id);
    url.searchParams.set("country", "us");
    url.searchParams.set("entity", "podcastEpisode");
    url.searchParams.set("limit", "100");
    return url.href
}