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

const Navbar = () => {
    return (
    <Center>
       <Box
        as="nav"
        bg="transparent"
        color="white"
        position="fixed"
        w="100%"
        top="0"
        alignItems="center"
        >
            <Heading textAlign='center'>
                What Candy are you
            </Heading>
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
                        >다시하기</Button>
                    </Link>
                </Grid>
            </Container>
        </Box> 
    </Center>
    )
} 


export default Navbar;
