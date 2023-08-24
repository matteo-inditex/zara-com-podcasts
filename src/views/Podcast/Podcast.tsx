import { useQuery } from "@tanstack/react-query";
import { getPodcast } from "../../services/podcasts-service";
import { useParams } from "react-router-dom";
import { Wrap, Text } from "@chakra-ui/react";
import EpisodesTable from "../../components/EpisodesTable";
import PodcastDetailsCard from "../../components/PodcastDetailsCard";

const Podcast = () => {
    const { podcastId } = useParams<{ podcastId: string }>()
    const { data, isLoading } = useQuery(["podcastDetails-" + podcastId], () => getPodcast(podcastId!));
    return <>
        {isLoading && <Text>Loading podcast details...</Text>}
        {data !== undefined && podcastId !== undefined && <Wrap>
            <PodcastDetailsCard podcastDetails={data} />
            <EpisodesTable podcastId={podcastId} episodes={data.episodes} />
        </Wrap>}
    </>
}

export default Podcast;