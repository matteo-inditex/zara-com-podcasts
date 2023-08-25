import { useQuery } from "@tanstack/react-query";
import { getPodcastEpisodes, getPodcasts } from "../../services/podcasts-service";
import { useParams } from "react-router-dom";
import { Wrap, Text, HStack, Spinner } from "@chakra-ui/react";
import EpisodesTable from "../../components/EpisodesTable";
import PodcastDetailsCard from "../../components/PodcastDetailsCard";
import { useMemo } from "react";

const Podcast = () => {
    const { podcastId } = useParams<{ podcastId: string }>()
    const { data: episodes, isLoading: isLoadingEpisodes, isFetching: isFetchingEpisodes } = useQuery(["podcast-" + podcastId + "-episodes"], () => getPodcastEpisodes(podcastId!));
    const { data: podcasts, isLoading: isLoadingPodcasts, isFetching: isFetchingPodcasts } = useQuery(["podcasts"], getPodcasts);
    const podcast = useMemo(() => (podcasts?.find((p) => p.id === podcastId) || null), [podcasts])
    return <>
        {(isLoadingEpisodes || isFetchingEpisodes) && <HStack><Text size='md' color={"#737373"}>
            Loading Episodes </Text> <Spinner size={"sm"} color="#737373" /></HStack>}
        {(isLoadingPodcasts || isFetchingPodcasts) && <HStack><Text size='md'>
            Loading Podcasts </Text><Spinner size={"sm"} /></HStack>}
        {podcastId !== undefined && <Wrap>
            {podcast !== null && <PodcastDetailsCard podcast={podcast} />}
            {episodes !== undefined && <EpisodesTable podcastId={podcastId} episodes={episodes} />}
        </Wrap>}
    </>
}

export default Podcast;