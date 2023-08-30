import { Outlet, Link as ReactRouterLink, useParams } from "react-router-dom";
import { Heading, Stack } from '@chakra-ui/react';
import { Link as ChakraLink } from '@chakra-ui/react'
import { useQuery } from "@tanstack/react-query";
import { getPodcastEpisodes, getPodcasts } from "../services/podcasts/podcasts-service";
import Loading from "../components/shared/Loading";

const RootLayout = () => {
    const { podcastId } = useParams<{ podcastId: string, episodeTrackId: string }>()
    const { isLoading: isLoadingPodcasts, isFetching: isFetchingPodcasts } = useQuery(["podcasts"], getPodcasts);
    const { isLoading: isLoadingEpisodes, isFetching: isFetchingEpisodes } = useQuery(["podcast-" + podcastId + "-episodes"], () => {
        if (podcastId) {
            return getPodcastEpisodes(podcastId);
        }
    }, { enabled: podcastId !== undefined });
    const isLoading = isLoadingPodcasts || isFetchingPodcasts || ((isLoadingEpisodes || isFetchingEpisodes) && podcastId !== undefined);

    return <Stack margin={16} spacing={8}>
        <Heading display={"flex"} justifyContent={"space-between"} borderBottom={"1px solid #737373"} paddingBottom={"8px"}><ChakraLink as={ReactRouterLink} to={"/"} >Podcaster</ChakraLink>
            {isLoading && <Loading />}
        </Heading>
        <Outlet />
    </Stack>
}

export default RootLayout;
