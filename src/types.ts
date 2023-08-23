export interface PodcastOverview {
    id: string,
    name: {
        label: string
    },
    image: Thumbnail[],
    artist: {
        label: string,
        attributes?: {
            href: string
        }
    }
}

export interface Thumbnail {
    label: string,
    attributes: {
        height: string
    }
}
