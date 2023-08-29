import { Box, Card, CardBody, Image, Center, Heading, Stack, StackDivider, Text } from "@chakra-ui/react";
import { IPodcast } from "../../types";
interface Props {
    podcast: IPodcast
}
export const PodcastDetailsCard = ({ podcast: { artist, image, name, summary } }: Props) => {
    return <Card maxWidth={300} height={"fit-content"}>
        <CardBody>
            <Stack divider={<StackDivider />} spacing='4'>
                <Box>
                    <Center>
                        {image !== null && <Image maxWidth={200}
                            src={image.label}
                            alt={"Podcast Thumbnail"}
                            borderRadius='lg'
                        />}
                    </Center>
                </Box>
                <Box>
                    <Heading size='xs'>
                        {name.label}
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                        by {artist.label}
                    </Text>
                </Box>
                <Box>
                    <Heading size='xs'>
                        Description:
                    </Heading>
                    <Text pt='2' fontSize='sm' fontStyle={"italic"}>
                        {summary.label}
                    </Text>
                </Box>
            </Stack>
        </CardBody>
    </Card>
}

export default PodcastDetailsCard;