import {
    Card, CardBody, Heading, VStack, Table, Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Text
} from "@chakra-ui/react";
import { Episode } from "../../../services/types/mapped";


interface Props {
    episodes: Episode[]
}
const EpisodesTable = ({ episodes }: Props) => {
    return <VStack marginLeft={"20"} >
        <Card width={1000} marginBottom={5}>
            <CardBody>
                <Heading fontSize={"2xl"}>Episodes: {episodes.length}</Heading>
            </CardBody>
        </Card>
        <TableContainer width={1000}>
            <Table variant='striped'>
                <Thead >
                    <Tr>
                        <Th textTransform={"capitalize"}><Text>Title</Text></Th>
                        <Th textTransform={"capitalize"}><Text>Date</Text></Th>
                        <Th textTransform={"capitalize"}><Text>Duration</Text></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {episodes.map((episode) => <Tr key={episode.id} >
                        <Td ><Text overflowWrap={"break-word"} >{episode.title}</Text></Td>
                        <Td><Text>{episode.date}</Text></Td>
                        <Td> <Text>{episode.duration}</Text></Td>
                    </Tr>)}

                </Tbody>
            </Table>
        </TableContainer>

    </VStack >
}

export default EpisodesTable;