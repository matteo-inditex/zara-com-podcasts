import { Card, CardBody, Heading, Stack, Text, Image, Center } from "@chakra-ui/react";

interface Props {
    img: {
        src: string,
        alt?: string,
    },
    title: string,
    subtitle: string
}
export const PodcastOverviewCard = ({ img: { src, alt }, title, subtitle }: Props) => {
    return <Card width='3xs' bg="#f9f9f9">
        <CardBody>
            <Center>
                <Image
                    src={src}
                    alt={alt}
                    borderRadius='lg'
                />
            </Center>
            <Stack mt='6' spacing='3'>
                <Heading size='md'>{title}</Heading>
                <Text>{subtitle}</Text>
            </Stack>
        </CardBody>
    </Card>
}

export default PodcastOverviewCard;