import { AppProps } from "next/app";
import Theme from '../libs/theme';
import { ChakraProvider } from '@chakra-ui/react';

const App = ({ Component, pageProps }: AppProps) => {
  return(
        <ChakraProvider theme={Theme}>
            <Component {...pageProps} />
        </ChakraProvider>
  )
};

export default App;
