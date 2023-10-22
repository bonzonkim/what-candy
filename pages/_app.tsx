import { AppProps } from "next/app";
import Theme from '../libs/theme';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/layouts/main';
import { AnimatePresence } from 'framer-motion';

const App = ({ Component, pageProps }: AppProps) => {
  return(
        <ChakraProvider theme={Theme}>
            <Layout>
                <AnimatePresence mode={'wait'} initial={true}>
                    <Component {...pageProps} />
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
  )
};

export default App;
