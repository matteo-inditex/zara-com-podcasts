import {
    Card, CardBody, Heading, VStack, Table, Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Text,
    Link as ChakraLink
} from "@chakra-ui/react";
import { IEpisode } from "../services/types/mapped";
import { Link as ReactRouterLink } from "react-router-dom";


interface Props {
    podcastId: string,
    episodes: IEpisode[]
}
const EpisodesTable = ({ podcastId, episodes }: Props) => {
    return <VStack marginLeft={"20"} >
        <Card width={"full"} marginBottom={5}>
            <CardBody>
                <Heading fontSize={"2xl"}>Episodes: {episodes.length}</Heading>
            </CardBody>
        </Card>
        <TableContainer width={"full"} maxWidth={800}>
            <Table variant='striped' size={"sm"}>
                <Thead >
                    <Tr>
                        <Th textTransform={"capitalize"}><Text>Title</Text></Th>
                        <Th textTransform={"capitalize"}><Text>Date</Text></Th>
                        <Th textTransform={"capitalize"}><Text>Duration</Text></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {episodes.map((episode) => <Tr key={episode.trackId} >
                        <Td ><ChakraLink as={ReactRouterLink} to={"/podcast/" + podcastId + "/episode/" + episode.trackId}><Text maxWidth={"2xl"} whiteSpace={"initial"}>{episode.trackName}</Text></ChakraLink></Td>
                        <Td><Text>{episode.releaseDate}</Text></Td>
                        <Td> <Text>{episode.duration}</Text></Td>
                    </Tr>)}

                </Tbody>
            </Table>
        </TableContainer>

    </VStack >
}

export default EpisodesTable;