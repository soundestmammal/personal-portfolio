import React from 'react';
import styled, { css } from 'styled-components';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';

const Title = styled.h1`
    font-size: 4em;
    color: white;
    margin: 2em 0 1em;
`;

const Subheading = styled.h2`
    font-size: 1.5em;
    color: white;
    margin: 0.5em 0;
`;

const Summary = styled.p`
    font-size: 1em;
    color: white;
`;

export default function Oasis() {
    return (
        <>
        <Helmet>
            <title>Oasis | Robert Checco</title>        
        </Helmet>
        <Layout>
            <div style={{height: '100vh'}}>
                    <Title>Oasis</Title>
                    <Summary>Oasis is a web application that allows people to locate restaurants that provide gluten free options.
                    I developed this project from the ground up from idea phase all the way through to deployment.
                    </Summary>
            </div>
        </Layout>
        </>
    )
}