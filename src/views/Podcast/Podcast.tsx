import { useQuery } from "@tanstack/react-query";
import { getPodcast } from "../../services/podcasts-service";
import { useParams } from "react-router-dom";
import { Wrap, Text } from "@chakra-ui/react";
import PodcastDetailsCard from "./components/PodcastDetailsCard";
import EpisodesTable from "./components/EpisodesTable";

const Podcast = () => {
    const { podcastId } = useParams<{ podcastId: string }>()
    const { data, isLoading } = useQuery(["podcastDetails-" + podcastId], () => getPodcast(podcastId!));
    return <>
        {isLoading && <Text>Loading podcast details...</Text>}
        {data !== undefined && <Wrap>
            <PodcastDetailsCard podcastDetails={data} />
            <EpisodesTable episodes={data.episodes} />
        </Wrap>}
    </>
}

export default Podcast;