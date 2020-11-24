import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background: rgb(32,32,32);
        font-family: Roboto;
    }

    p {
        margin: 0;
        padding: 0;
    }

    h1 {
        font-weight: 400;
    }

    h2 {
        font-weight: 400;
    }
`;

export default GlobalStyle;