import { useQuery } from "@tanstack/react-query";
import { getPodcastEpisodes, getPodcasts } from "../../services/podcasts/podcasts-service";
import { useParams } from "react-router-dom";
import { Wrap, VStack } from "@chakra-ui/react";
import EpisodeCard from "../../components/cards/EpisodeCard";
import { Link as ReactRouterLink } from "react-router-dom";
import Loading from "../../components/shared/Loading";
import PodcastDetailsCard from "../../components/cards/PodcastDetailsCard";
import { mapEpisode } from "./utils/mappers";


const Episode = () => {
    const { podcastId, episodeTrackId } = useParams<{ podcastId: string, episodeTrackId: string }>()
    const { data: episode, isLoading: isLoadingEpisodes, isFetching: isFetchingEpisodes } = useQuery(["podcast-" + podcastId + "-episodes"], () => { if (podcastId) { return getPodcastEpisodes(podcastId) } },
        { select: (data) => mapEpisode(data, episodeTrackId) });
    const { data: podcast, isLoading: isLoadingPodcasts, isFetching: isFetchingPodcasts } = useQuery(["podcasts"], getPodcasts, { select: (data) => data.find(p => p.id === podcastId) });

    return <>
        <VStack>
            {(isLoadingEpisodes || isFetchingEpisodes) && (
                <Loading text="Loading Episodes" />
            )}
            {(isLoadingPodcasts || isFetchingPodcasts) && (
                <Loading text="Loading Podcasts" />
            )}
        </VStack>
        {episode !== undefined && <Wrap spacing={"100px"}>
            {podcast !== undefined && <ReactRouterLink to={"/podcast/" + podcastId}><PodcastDetailsCard podcast={podcast} /></ReactRouterLink>}
            {episode !== undefined && <EpisodeCard trackName={episode.trackName} media={episode.media} descriptionHTMLstring={episode.descriptionHTMLstring} />}
        </Wrap>}</>
}

export default Episode