import React from 'react'
import {
 Container,
 Box,
 Heading,
 Link,
 Grid,
 Center,
 Button
} from '@chakra-ui/react'
import { BsGithub, BsLinkedin, BsPersonCircle } from 'react-icons/bs'
import { MdReplay } from 'react-icons/md'
import NextLink from 'next/link'
import styled from "@emotion/styled";



const CustomHeading = styled(Heading)`
    font-family: 'Lilita One', sans-serif;
`;
const Navbar = () => {
    return (
    <Center p={14}>
       <Box
        as="nav"
        bg="transparent"
        position="fixed"
        w="100%"
        top="0"
        alignItems="center"
        >
            <CustomHeading textAlign='center'>
                What Candy are you
            </CustomHeading>
            <Container p={10} >
                <Grid templateColumns='repeat(4, 1fr)' placeItems='center' >
                    <Link href="https://github.com/bonzonkim" target="_blank" as={NextLink}>
                        <Button
                            leftIcon={<BsGithub/>}
                            colorScheme="blackAlpha"
                        >Github</Button>
                    </Link>
                    <Link href="https://www.linkedin.com/in/bumgu-kang-820010269/" target="_blank">
                        <Button
                            leftIcon={<BsLinkedin/>}
                            colorScheme="blackAlpha"
                        >Linkedin</Button>
                    </Link>
                    <Link href="https://bumgu.com" target="_blank">
                        <Button
                            leftIcon={<BsPersonCircle/>}
                            colorScheme="blackAlpha"
                        >Homepage</Button>
                    </Link>
                    <Link href="/">
                        <Button
                            leftIcon={<MdReplay/>}
                            colorScheme="blackAlpha"
                        >홈으로</Button>
                    </Link>
                </Grid>
            </Container>
        </Box> 
    </Center>
    )
} 


export default Navbar;
