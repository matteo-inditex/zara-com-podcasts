import { Card, CardBody, VStack, Heading, Text } from "@chakra-ui/react";
import { Media } from "../services/types/mapped";

interface Props {
    trackName: string,
    descriptionHTMLstring: string,
    media: Media
}
const EpisodeCard = ({ trackName, descriptionHTMLstring, media }: Props) => {
    return <Card maxWidth={800} height={"fit-content"}>
        <CardBody >
            <VStack mt='6' spacing='3'>
                <Heading size='md' marginRight={"auto"}>{trackName}</Heading>
                <Text maxWidth={750}><div dangerouslySetInnerHTML={{ __html: descriptionHTMLstring }}></div></Text>
                {media.url !== undefined && <audio controls src={media.url} />}
            </VStack>
        </CardBody>
    </Card>
}

export default EpisodeCard