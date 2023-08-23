import { ChangeEvent, useEffect, useState } from "react";
import { getPodcasts } from "../../services/podcasts-service";
import { PodcastOverview } from "../../types";
import PodcastOverviewCard from "../../components/PodcastOverviewCard";
import { Box, Center, Input, Stack, Grid, GridItem } from '@chakra-ui/react'
import { getFilteredPodcasts } from "./query/query-utils";
import { Query } from "./query/query-types";
import { Text } from '@chakra-ui/react'
// import { Spinner } from '@chakra-ui/react'


const Home = () => {
    const [podcasts, setPodcasts] = useState<PodcastOverview[]>([])
    const [query, setQuery] = useState<Query>({
        searchText: '',
        results: podcasts
    })

    const loadPodcasts = async () => {
        // TODO: load podcasts from server only if 24h have passed
        const data = await getPodcasts()
        setPodcasts(data)
        setQuery({ searchText: '', results: data })
    }

    const handleInputChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
        setQuery({ searchText: value, results: getFilteredPodcasts(value, podcasts) })
    }

    useEffect(() => {
        loadPodcasts();
    }, [])

    return <Stack>
        <Box marginLeft={"auto"} display={"flex"} alignItems={"center"} marginBottom={"3"}>
            {/* <Spinner marginRight={"4"} /> */}
            <Text marginRight={"4"} fontSize={"lg"} bg={"#004f99"} color={"white"} fontWeight={"600"} borderRadius={10} padding={2}>{query.results.length}</Text>
            <Input placeholder='Filter podcasts...' size={"lg"} width={"md"} onChange={handleInputChange} />
        </Box>
        <Grid templateColumns='repeat(4, 1fr)' gap={6}>
            {query.results.map((podcast) =>
                <GridItem>
                    <Center>
                        <PodcastOverviewCard key={podcast.id.attributes["im:id"]} img={{
                            src: podcast.image[podcast.image.length - 1].label,
                        }} title={podcast.name.label} subtitle={"Author: " + podcast.artist.label} />
                    </Center>
                </GridItem>)}
        </Grid>
    </Stack >
}

export default Home;