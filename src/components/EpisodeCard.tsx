import { Card, CardBody, VStack, Heading, Text } from "@chakra-ui/react";

interface Props {
    title: string,
    descriptionHTMLstring: string,
    audioUrl: string | null
}
const EpisodeCard = ({ title, descriptionHTMLstring, audioUrl }: Props) => {
    return <Card maxWidth={800}>
        <CardBody >
            <VStack mt='6' spacing='3'>
                <Heading size='md' >{title}</Heading>
                <Text maxWidth={750}><div dangerouslySetInnerHTML={{ __html: descriptionHTMLstring }}></div></Text>
                {audioUrl !== null && <audio controls src={audioUrl} />}
            </VStack>
        </CardBody>
    </Card>
}

export default EpisodeCard