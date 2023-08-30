import { useMemo, useState } from "react";
import { getPodcasts } from "../../services/podcasts/podcasts-service";
import { Box, Center, Input, Stack, Grid, GridItem } from '@chakra-ui/react'
import { getFilteredPodcasts } from "./query/filters";
import { Text } from '@chakra-ui/react'
import { useQuery } from "@tanstack/react-query";
import { Link as ReactRouterLink } from "react-router-dom";
import { getPodcastRoutePath } from "../../routing/paths";
import PodcastHomeCard from "../../components/cards/PodcastHomeCard";


const Home = () => {
    const { data } = useQuery(["podcasts"], getPodcasts);
    const [query, setQuery] = useState("")
    const filteredPodcasts = useMemo(() => {
        if (data === undefined) {
            return [];
        }
        return getFilteredPodcasts(query, data)
    }, [data, query])

    return <Stack>
        <Box marginLeft={"auto"} display={"flex"} alignItems={"center"} marginBottom={"3"}>
            <Text marginRight={"4"} fontSize={"lg"} bg={"#004f99"} color={"white"} fontWeight={"600"} borderRadius={10} padding={2}>{filteredPodcasts.length}</Text>
            <Input placeholder='Filter podcasts...' size={"lg"} width={"md"} onChange={({ target: { value } }) => setQuery(value)} />
        </Box>
        <Grid templateColumns='repeat(4, 1fr)' gap={6}>
            {filteredPodcasts.map((podcast) =>
                <GridItem key={podcast.id}>
                    <Center>
                        <ReactRouterLink to={getPodcastRoutePath(podcast.id)}>
                            <PodcastHomeCard img={{
                                src: podcast.image.label,
                            }} title={podcast.name.label} subtitle={"Author: " + podcast.artist.label} />
                        </ReactRouterLink>

                    </Center>
                </GridItem>)}
        </Grid>
    </Stack >
}

export default Home;