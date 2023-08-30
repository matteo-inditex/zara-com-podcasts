import { useQuery } from "@tanstack/react-query";
import { getPodcastEpisodes, getPodcasts } from "../../services/podcasts/podcasts-service";
import { useParams } from "react-router-dom";
import { Wrap } from "@chakra-ui/react";
import EpisodesTable from "../../components/EpisodesTable";
import { useMemo } from "react";
import PodcastDetailsCard from "../../components/cards/PodcastDetailsCard";

const Podcast = () => {
    const { podcastId } = useParams<{ podcastId: string }>()
    const { data: episodes } = useQuery(["podcast-" + podcastId + "-episodes"], () => getPodcastEpisodes(podcastId!));
    const { data: podcasts } = useQuery(["podcasts"], getPodcasts);
    const podcast = useMemo(() => (podcasts?.find((p) => p.id === podcastId) || null), [podcasts])
    return <>
        {podcastId !== undefined && <Wrap>
            {podcast !== null && <PodcastDetailsCard podcast={podcast} />}
            {episodes !== undefined && <EpisodesTable podcastId={podcastId} episodes={episodes} />}
        </Wrap>}
    </>
}

export default Podcast;