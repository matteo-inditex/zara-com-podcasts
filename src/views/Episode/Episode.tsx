import { useQuery } from "@tanstack/react-query";
import { getPodcast } from "../../services/podcasts-service";
import { useParams } from "react-router-dom";
import { useMemo } from "react";
import { Episode } from "../../services/types/mapped";
import PodcastDetailsCard from "../../components/PodcastDetailsCard";
import { Wrap } from "@chakra-ui/react";
import EpisodeCard from "../../components/EpisodeCard";

const Episode = () => {
    const { podcastId, episodeId } = useParams<{ podcastId: string, episodeId: string }>()
    const { data } = useQuery(["podcastDetails-" + podcastId], () => getPodcast(podcastId!));
    const episode = useMemo(() => {
        if (data === undefined) {
            return null;
        }
        const foundEpisode = data.episodes.find((episode: Episode) => episode.id === episodeId);
        if (foundEpisode === undefined) {
            return null
        }
        const descriptionElement = new window.DOMParser().parseFromString(foundEpisode.description, "text/html").querySelector("body")
        const descriptionHTMLstring = descriptionElement === null ? "" : descriptionElement.innerHTML
        return {
            title: foundEpisode.title,
            descriptionHTMLstring,
            audioUrl: foundEpisode.audioUrl
        }
    }, [data])
    return <>{data !== undefined && podcastId !== undefined && <Wrap spacing={"100px"}>
        <PodcastDetailsCard podcastDetails={data} />
        {episode !== null && <EpisodeCard {...episode} />}
    </Wrap>}</>
}

export default Episode