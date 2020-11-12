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
                    <Title>COVID-19 Insights</Title>
                    <Summary>COVID-19 Insights is a web application where people can view COVID-19 trends for each US State. 
                    My inspiration for the project was sparked by several COVID-19 projects such as The New York Times, The Economist, and CovidActNow. 
                    I am the sole developer on the project.
                    </Summary>
            </div>
        </Layout>
        </>
    )
}