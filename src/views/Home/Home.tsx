import { useMemo, useState } from "react";
import { getPodcasts } from "../../services/podcasts-service";
import PodcastOverviewCard from "../../components/PodcastOverviewCard";
import { Box, Center, Input, Stack, Grid, GridItem } from '@chakra-ui/react'
import { getFilteredPodcasts } from "./query/query-utils";
import { Text } from '@chakra-ui/react'
import { useQuery } from "@tanstack/react-query";
import { Spinner } from '@chakra-ui/react'
import { Link as ReactRouterLink } from "react-router-dom";


const Home = () => {
    const { data, isLoading } = useQuery(["podcastsOverviews"], getPodcasts, {
        staleTime: 1000 * 60 * 60 * 24,
        cacheTime: 1000 * 60 * 60 * 24
    });
    const [query, setQuery] = useState("")

    const filteredPodcasts = useMemo(() => {
        if (data === undefined) {
            return [];
        }
        return getFilteredPodcasts(query, data)
    }, [data, query])

    return <Stack>
        <Box marginLeft={"auto"} display={"flex"} alignItems={"center"} marginBottom={"3"}>
            {isLoading && <Spinner marginRight={"4"} />}
            <Text marginRight={"4"} fontSize={"lg"} bg={"#004f99"} color={"white"} fontWeight={"600"} borderRadius={10} padding={2}>{filteredPodcasts.length}</Text>
            <Input placeholder='Filter podcasts...' size={"lg"} width={"md"} onChange={({ target: { value } }) => setQuery(value)} />
        </Box>
        <Grid templateColumns='repeat(4, 1fr)' gap={6}>
            {filteredPodcasts.map((podcast) =>
                <GridItem key={podcast.id}>
                    <Center>
                        <ReactRouterLink to={"/podcast/" + podcast.id}>
                            <PodcastOverviewCard img={{
                                src: podcast.image[podcast.image.length - 1].label,
                            }} title={podcast.name.label} subtitle={"Author: " + podcast.artist.label} />
                        </ReactRouterLink>

                    </Center>
                </GridItem>)}
        </Grid>
    </Stack >
}

export default Home;