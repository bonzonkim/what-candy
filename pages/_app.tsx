import { AppProps } from "next/app";
import Theme from '../libs/theme';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/layouts/main';

const App = ({ Component, pageProps }: AppProps) => {
  return(
        <ChakraProvider theme={Theme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ChakraProvider>
  )
};

export default App;
