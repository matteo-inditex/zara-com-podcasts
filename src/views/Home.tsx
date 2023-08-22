import { useEffect, useState } from "react";
import { getPodcasts } from "../services/podcasts-service";
import { PodcastOverview } from "../types";
import PodcastOverviewCard from "../components/PodcastOverviewCard";
import { Center, Wrap, WrapItem } from '@chakra-ui/react'

const Home = () => {
    const [podcasts, setPodcasts] = useState<PodcastOverview[]>([])

    const loadPodcasts = async () => {
        const data = await getPodcasts()
        setPodcasts(data)
    }

    useEffect(() => {
        loadPodcasts();
    }, [])

    return <Wrap spacing={12} >
        {podcasts.map((podcast) =>
            <WrapItem>
                <Center>
                    <PodcastOverviewCard key={podcast.id.attributes["im:id"]} img={{
                        src: podcast.image[podcast.image.length - 1].label,
                    }} title={podcast.name.label} subtitle={"Author: " + podcast.artist.label} />
                </Center>
            </WrapItem>)}
    </Wrap>
}

export default Home;