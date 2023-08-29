import { Card, CardBody, VStack, Heading } from "@chakra-ui/react";
import { Media } from "../../types/IEpisode";
import HTMLComponent from "../shared/HTMLcomponent";

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
                <HTMLComponent htmlString={descriptionHTMLstring} />
                {media.url !== undefined && <audio controls src={media.url} />}
            </VStack>
        </CardBody>
    </Card>
}

export default EpisodeCard