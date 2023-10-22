import Head from 'next/head';
import {Container, Box} from "@chakra-ui/react";


const Main = ({children}:any) => {
    return(
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>what-candy?!</title>
            </Head>
                <Container>
                    <Box>
                        {children}
                    </Box>
                </Container>
        </>
    )
}

export default Main;
