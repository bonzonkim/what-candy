import {Text, Heading, Button} from "@chakra-ui/react";
import styled from "@emotion/styled";

const QuizText = styled(Text)`
    color: black;
    font-family: 'Jua', sans-serif;
`;

const NavbarHeading = styled(Heading)`
    color: black;
    font-family: 'Lilita One', sans-serif;
`;

const ResultHeading = styled(Heading)`
    color: black;
    font-family: 'Jua', sans-serif;
`;

const DynamicButton = styled(Button)`
    font-family: 'Jua', sans-serif;
`;

export { QuizText, NavbarHeading, DynamicButton, ResultHeading };
