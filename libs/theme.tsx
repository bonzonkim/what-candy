import {extendTheme} from '@chakra-ui/react';
import {StyleFunctionProps, mode} from '@chakra-ui/theme-tools';
//const theme = extendTheme({
//    colors: {
//        brand: {
//            900: '#1a365d',
//            800: '#153e75',
//            700: '#2a69ac',
//            600: '#0f3b79',
//        },
//    },
//    components: {
//        background: {
//            baseStyle: {
//                backgroundColor: 'brand.900',
//            }
//        },
//        Button: {
//            baseStyle: {
//                fontWeight: 'bold',
//                backgroundColor: 'brand.900',
//            },
//        }
//    }
//})
//

const styles = {
    global: (props: Record<string, any> | StyleFunctionProps) => ({
        body:{
            bg: mode('#1a365d', '#202023')(props) 
        }
    })
}

const config = {
    useSystemColorMode: true
}

const theme = extendTheme({
    styles,
    config
})

export default theme
