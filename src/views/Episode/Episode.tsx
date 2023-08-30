import { useQuery } from "@tanstack/react-query";
import { getPodcastEpisodes, getPodcasts } from "../../services/podcasts/podcasts-service";
import { useParams } from "react-router-dom";
import { Wrap } from "@chakra-ui/react";
import EpisodeCard from "../../components/cards/EpisodeCard";
import { Link as ReactRouterLink } from "react-router-dom";
import PodcastDetailsCard from "../../components/cards/PodcastDetailsCard";
import { mapEpisode } from "./utils/mappers";


const Episode = () => {
    const { podcastId, episodeTrackId } = useParams<{ podcastId: string, episodeTrackId: string }>()
    const { data: episode } = useQuery(["podcast-" + podcastId + "-episodes"], () => {
        if (podcastId) {
            return getPodcastEpisodes(podcastId)
        }
    }, {
        select: (data) => mapEpisode(data, episodeTrackId)
    });

    const { data: podcast } = useQuery(["podcasts"], getPodcasts, { select: (data) => data.find(p => p.id === podcastId) });

    return <>
        {episode !== undefined && <Wrap spacing={"100px"}>
            {podcast !== undefined && <ReactRouterLink to={"/podcast/" + podcastId}><PodcastDetailsCard podcast={podcast} /></ReactRouterLink>}
            {episode !== undefined && <EpisodeCard trackName={episode.trackName} media={episode.media} descriptionHTMLstring={episode.descriptionHTMLstring} />}
        </Wrap>}</>
}

export default Episode