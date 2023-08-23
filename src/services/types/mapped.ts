
export interface PodcastDetails {
    title: string,
    description: string,
    author: string,
    image: {
        url: string | null,
        title: string
    },
    episodes: Episode[]
}

export interface Episode {
    id: string,
    title: string,
    duration: string,
    date: string
    playableUrl: string,
    description: string
}