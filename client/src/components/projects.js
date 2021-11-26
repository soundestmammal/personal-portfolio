import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby'

import coronavirus from '../assets/novelcoronavirus-optimized.jpg';
import oasisPic from '../assets/palm.svg';

const Description = styled.div`
    margin: 2em 0 1em;
`;

const Subtitle = styled.h2`
    font-size: 1em;
    color: #AAAAAA;
    line-height: 1.5em;
`;

const ProjectContainer = styled.div`
    margin-top: 2em;
    display: grid;
    grid-template-columns: 45% 45%;
    grid-gap: 10%;

    @media (max-width: 700px) {
        grid-template-columns: 100%;
        grid-gap: 0;
    }
`;

const Project = styled.div`
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: white;
    @media (max-width: 500px) {
        margin-bottom: 2em;
    }
`;

const ProjectImage = styled.div`
    height: 250px;
    width: 100%;
    border-radius: 16px;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LinkWrapper = styled.a`
    text-decoration: none;
    color: #E2DFDF;
    display: block;
    height: 300px;
    width: 100%;
`;

const ViewProject = styled.h2`
    font-size: 1em;
    color: #AAAAAA;
    line-height: 1.5em;
    border-bottom: 2px solid transparent;
    text-transform: uppercase;
`;

const Title = styled.h1`
    font-size: 1.5em;
    color: #E2DFDF;

    ${LinkWrapper}:hover & {
        text-decoration: underline;
    }
`;

const LinkRow = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

const LinkText = styled.a`
    font-size: 1.1em;
    color: white;
    text-decoration: underline;

    :hover {
        color: #E2DFDF;
    }
`;

export default function Projects() {
    return (
        <div>
            <Description>
                <Title>Recent work</Title>
                <Subtitle>
                        I like to stay curious and always have a project in the works. 
                        I enjoy building technology that can make a positive impact on the world.
                        Take a look at some projects that I’ve dedicated my time to.
                </Subtitle>
            </Description>
            <ProjectContainer>
                <Project>
                    <LinkWrapper href="http://www.oasisglutenfree.com" target="_blank">
                        <ProjectImage style={{background: 'cornsilk'}}>
                            <img src={oasisPic} style={{width: '150px'}}/>
                        </ProjectImage>
                        <Title>Oasis</Title>
                    </LinkWrapper>
                    <Subtitle>Oasis is a web application where users can find restaurants that provide gluten free menu options.</Subtitle>
                    <LinkRow>
                        <LinkText href="http://www.github.com/soundestmammal/oasis" target="_blank">View Code</LinkText>
                    </LinkRow>
                </Project>
                <Project>
                    <LinkWrapper href="http://www.c19insights.io" target="_blank">
                    <ProjectImage>
                        <img src={coronavirus} style={{width: '300px'}}/>
                    </ProjectImage>
                        <Title>COVID-19 Insights</Title>
                    </LinkWrapper>
                    <Subtitle>A dashboard in the browser for viewing COVID-19 trends within the United States.</Subtitle>
                    <LinkRow>
                        <LinkText href="http://www.github.com/soundestmammal/covid19insights" target="_blank">View Code</LinkText>
                    </LinkRow>
                </Project>
            </ProjectContainer>
        </div>
    );
}