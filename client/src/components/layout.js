import React from 'react';
import styled, { css } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);

import GlobalStyle from '../globalStyles';
import Navigation from './navigation';
import Footer from './Footer';

const Wrapper = styled.div`
    margin: 0;
    padding: 0;
    background: rgb(32,32,32);
`;

const Container = styled.div`
    margin: 0 auto;
    max-width: 850px;

    @media (max-width: 850px) {
        margin: 0px 20px;
  }
`;

export default function Layout({ children }) {

    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <Container>
                    <Navigation />
                    {children}
                    <Footer />
                </Container>
            </Wrapper>
        </>
    )
}