import { motion } from 'framer-motion';
import { chakra, shouldForwardProp } from '@chakra-ui/react';
import React from 'react';

const StyleDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition';
  },
});

const Section = ({ children}:any ) => {
    return(
        <StyleDiv
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            mb={6}
          >
            {children}
          </StyleDiv>
    )
  
};

export default Section;

