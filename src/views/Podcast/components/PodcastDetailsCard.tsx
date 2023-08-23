import { Box, Card, CardBody, Image, Center, Heading, Stack, StackDivider, Text } from "@chakra-ui/react";
import { PodcastDetails } from "../../../services/types/mapped";
interface Props {
    podcastDetails: PodcastDetails
}
export const PodcastDetailsCard = ({ podcastDetails: { title, description, author, image } }: Props) => {
    return <Card maxWidth={300} height={"fit-content"}>
        <CardBody>
            <Stack divider={<StackDivider />} spacing='4'>
                <Box>
                    <Center>
                        {image.url !== null && <Image maxWidth={200}
                            src={image.url}
                            alt={image.title}
                            borderRadius='lg'
                        />}
                    </Center>
                </Box>
                <Box>
                    <Heading size='xs'>
                        {title}
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                        by {author}
                    </Text>
                </Box>
                <Box>
                    <Heading size='xs'>
                        Description:
                    </Heading>
                    <Text pt='2' fontSize='sm' fontStyle={"italic"}>
                        {description}
                    </Text>
                </Box>
            </Stack>
        </CardBody>
    </Card>
}

export default PodcastDetailsCard;