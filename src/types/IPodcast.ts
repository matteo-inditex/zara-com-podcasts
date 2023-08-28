export interface IPodcast {
    id: string,
    name: {
        label: string
    },
    image: Thumbnail,
    artist: {
        label: string,
        attributes?: {
            href: string
        }
    },
    summary: {
        label: string
    }
}

interface Thumbnail {
    label: string,
    attributes: {
        height: string
    }
}
