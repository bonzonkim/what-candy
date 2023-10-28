import Head from 'next/head';
import {Container, Box} from "@chakra-ui/react";
import Navbar from "../Navbar";


const Main = ({children}:any) => {
    return(
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>나에게 맞는 탕후루는</title>
                <link rel="icon" href="/favicon.ico?v=2"/>
            </Head>
            <Navbar/>
                <Container>
                    <Box pt={100} >
                        {children}
                    </Box>
                </Container>
        </>
    )
}

export default Main;
