import { extendTheme } from '@chakra-ui/react';
import TanghuruBackgroundImage from '../public/tanghuruBackground.png';

const colors = {
    brand: {
        900: '#1a365d',
        800: '#153e75',
        700: '#2a69ac',
        600: '#0f3b79',
    },
};

//const styles = {
//    global: (props: Record<string, any> | StyleFunctionProps) => ({
//        body: {
//            bg: mode(
//                '#f5c3bc',
//                'brand.600'
//            )(props),
//            backgroundImage: `url(${backgroundImage.src})`,
//            backgroundRepeat: '2',
//        },
//    }),
//};

const styles = {
    global: () => ({
        body: {
        backgroundImage: `url(${TanghuruBackgroundImage.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
        },
    })
}


//const components = {
//    Box: {
//        fontWeight: 'bold',
//        backgroundColor: 'green.300',
//    },
//};

const theme = extendTheme({
    styles,
    colors,
});

export default theme;

