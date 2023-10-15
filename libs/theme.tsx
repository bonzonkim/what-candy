import {extendTheme} from '@chakra-ui/react';
import {StyleFunctionProps, mode} from '@chakra-ui/theme-tools';

const colors = {
    brand: {
        900: '#1a365d',
        800: '#153e75',
        700: '#2a69ac',
        600: '#0f3b79',
    },
}

const styles = {
    global: (props: Record<string, any> | StyleFunctionProps) => ({
        body:{
            bg: mode('brand.700', 'brand.900')(props)
        }
    })
}


const components ={
    Box: {
            fontWeight: 'bold',
            backgroundColor: 'green.300',
    }
}
const theme = extendTheme({
    styles,
    components,
    colors
})


export default theme
