import { Outlet, Link as ReactRouterLink } from "react-router-dom";
import { Heading, Stack } from '@chakra-ui/react';
import { Link as ChakraLink } from '@chakra-ui/react'


interface Props {
}
const RootLayout = ({ }: Props) => {
    return <Stack margin={16} spacing={8}>
        <Heading><ChakraLink as={ReactRouterLink} to={"/"} >Podcaster</ChakraLink></Heading>
        <Outlet />
    </Stack>
}

export default RootLayout;
