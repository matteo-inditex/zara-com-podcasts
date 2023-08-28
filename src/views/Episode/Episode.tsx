import { useQuery } from "@tanstack/react-query";
import { getPodcastEpisodes, getPodcasts } from "../../services/podcasts/podcasts-service";
import { useParams } from "react-router-dom";
import { useMemo } from "react";
import PodcastDetailsCard from "../../components/PodcastDetailsCard";
import { HStack, Spinner, Wrap, Text } from "@chakra-ui/react";
import EpisodeCard from "../../components/EpisodeCard";
import { Link as ReactRouterLink } from "react-router-dom";
import { IEpisode } from "../../types";


const Episode = () => {
    const { podcastId, episodeTrackId } = useParams<{ podcastId: string, episodeTrackId: string }>()
    const { data: episodes, isLoading: isLoadingEpisodes, isFetching: isFetchingEpisodes } = useQuery(["podcast-" + podcastId + "-episodes"], () => getPodcastEpisodes(podcastId!));
    const { data: podcasts, isLoading: isLoadingPodcasts, isFetching: isFetchingPodcasts } = useQuery(["podcasts"], getPodcasts);

    const podcast = useMemo(() => (podcasts?.find(p => p.id === podcastId) || null), [podcasts])
    const episode = useMemo(() => {
        let descriptionHTMLstring = ""

        if (episodes === undefined) {
            return null;
        }
        const foundEpisode = episodes.find((episode: IEpisode) => episode.trackId === parseInt(episodeTrackId!));

        if (foundEpisode === undefined) {
            return null
        }
        if (foundEpisode.description !== undefined) {
            const descriptionElement = new window.DOMParser().parseFromString(foundEpisode.description, "text/html").querySelector("body")
            descriptionHTMLstring = descriptionElement === null ? "" : descriptionElement.innerHTML
        }

        return {
            trackName: foundEpisode.trackName,
            descriptionHTMLstring,
            media: foundEpisode.media
        }
    }, [podcasts, episodes])
    return <>
        {(isLoadingEpisodes || isFetchingEpisodes) && <HStack><Text size='md' color={"#737373"}>
            Loading Episodes </Text> <Spinner size={"sm"} color="#737373" /></HStack>}
        {(isLoadingPodcasts || isFetchingPodcasts) && <HStack><Text size='md'>
            Loading Podcasts </Text><Spinner size={"sm"} /></HStack>}
        {episode !== null && <Wrap spacing={"100px"}>
            {podcast !== null && <ReactRouterLink to={"/podcast/" + podcastId}><PodcastDetailsCard podcast={podcast} /></ReactRouterLink>}
            {episode !== null && <EpisodeCard trackName={episode.trackName} media={episode.media} descriptionHTMLstring={episode.descriptionHTMLstring} />}
        </Wrap>}</>
}

export default Episode