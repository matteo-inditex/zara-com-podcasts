import { ID } from "./services/types/getPodcastsAPI"

export interface PodcastOverview {
    id: ID,
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
