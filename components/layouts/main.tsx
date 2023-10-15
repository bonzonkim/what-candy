import Head from 'next/head';
import {Container, Box} from "@chakra-ui/react";


const Main = ({children}) => {
    return(
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>what-candy?!</title>
            </Head>
            <Box>
                <Container>
                    {children}
                </Container>
            </Box>
        </>
    )
}

export default Main;
