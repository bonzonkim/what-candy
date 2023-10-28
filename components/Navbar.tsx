import React from 'react'
import {
 Container,
 Box,
 Heading,
 Link,
 Stack,
 Button
} from '@chakra-ui/react'
import { BsGithub, BsLinkedin, BsPersonCircle } from 'react-icons/bs'
import NextLink from 'next/link'

const Navbar = () => {
    return (
       <Box
        as="nav"
        bg="teal.500"
        color="white"
        position="fixed"
        w="100%"
        top="0"
        >
            <Container>
                <Stack
                      direction={{base:'column', md: 'row' }}
                      display={{  md: 'flex' }}
                      alignItems="center"
                      flexGrow={1}
                      mt={{ base: 4, nmd: 0 }}
                     height={{base: 16, md: 20}} 
                >
                    <Heading as="h3" size="lg">
                        what candy are you
                    </Heading>
                    <Link href="https://github.com/bonzonkim" target="_blank" as={NextLink}>
                        <BsGithub/>
                    </Link>
                    <Link href="https://www.linkedin.com/in/bumgu-kang-820010269/" target="_blank">
                        <BsLinkedin/>
                    </Link>
                    <Link href="https://bumgu.com" target="_blank">
                        <BsPersonCircle/>
                    </Link>
                </Stack>

            </Container>
        </Box> 
    )
} 


export default Navbar;
