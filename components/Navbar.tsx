import React from 'react'
import {
 Container,
 Box,
 Heading,
 Link,
 Stack,
 Text,
 Button
} from '@chakra-ui/react'
import { BsGithub, BsLinkedin, BsPersonCircle } from 'react-icons/bs'
import { MdReplay } from 'react-icons/md'
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
        alignItems="center"
        >
            <Heading>
                What Candy are you
            </Heading>
            <Container>
                <Stack
                      direction={{base:'column', md: 'row' }}
                      display={{  md: 'flex' }}
                      flexGrow={1}
                      mt={{ base: 4, nmd: 0 }}
                      height={{base: 16, md: 20}} 
                >
                    <Link href="https://github.com/bonzonkim" target="_blank" as={NextLink}>
                        <Button
                            leftIcon={<BsGithub/>}
                            colorScheme="transparent"
                        />
                    </Link>
                    <Link href="https://www.linkedin.com/in/bumgu-kang-820010269/" target="_blank">
                        <Button
                            leftIcon={<BsLinkedin/>}
                            colorScheme="transparent"
                        />
                    </Link>
                    <Link href="https://bumgu.com" target="_blank">
                        <Button
                            leftIcon={<BsPersonCircle/>}
                            colorScheme="transparent"
                        />
                    </Link>
                    <Link href="/">
                        <Button
                            leftIcon={<MdReplay/>}
                            colorScheme="transparent"
                        /> 
                    </Link>
                </Stack>

            </Container>
        </Box> 
    )
} 


export default Navbar;
