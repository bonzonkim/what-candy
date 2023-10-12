import {extendTheme} from '@chakra-ui/react'
const theme = extendTheme({
    colors: {
        brand: {
            900: '#1a365d',
            800: '#153e75',
            700: '#2a69ac',
            600: '#0f3b79',
        },
    },
    components: {
        Button: {
            baseStyle: {
                fontWeight: 'bold',
                backgroundColor: 'brand.900',
            },
        }
    }
})

export default theme
