//'linear-gradient(0deg, hsl(55deg 96% 73%) 0%, hsl(59deg 77% 70%) 21%, hsl(64deg 69% 69%) 30%, hsl(71deg 63% 68%) 39%, hsl(79deg 58% 67%) 46%, hsl(90deg 53% 66%) 54%, hsl(104deg 47% 65%) 61%, hsl(123deg 44% 63%) 69%, hsl(141deg 48% 55%) 79%, hsl(159deg 97% 38%) 100%) no-repeat fixed',
//'linear-gradient(0deg, hsl(159deg 97% 38%) 0%, hsl(141deg 48% 55%) 21%, hsl(123deg 44% 63%) 30%, hsl(104deg 47% 65%) 39%, hsl(90deg 53% 66%) 46%, hsl(79deg 58% 67%) 54%, hsl(71deg 63% 68%) 61%, hsl(64deg 69% 69%) 69%, hsl(59deg 77% 70%) 79%, hsl(55deg 96% 73%) 100%) no-repeat fixed',
//'brand.900',
//'#ADEEE2',
//backgroundRepeat: 'no-repeat',
import { extendTheme } from '@chakra-ui/react';
import { StyleFunctionProps, mode } from '@chakra-ui/theme-tools';
import backgroundImage from '../public/tanghuruBack.png';

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
            bg:'#f5c3bc',
        //backgroundImage: `url(${backgroundImage.src})`,
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

