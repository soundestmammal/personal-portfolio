import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby'

import coronavirus from '../novelcoronavirus-optimized.jpg';
import oasisPic from '../palm.svg';

const Description = styled.div`
    margin: 2em 0 1em;
`;

const Title = styled.h1`
    font-size: 1.5em;
    color: #E2DFDF;
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

const LinkWrapper = styled(props => <Link {...props} />)`
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

export default function Projects() {
    return (
        <>
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
                    <LinkWrapper to="/oasis">
                        <ProjectImage style={{background: 'cornsilk'}}>
                            <img src={oasisPic} style={{width: '150px'}}/>
                        </ProjectImage>
                        <Title>Oasis</Title>
                    </LinkWrapper>
                    <Subtitle>Oasis is a web application where users can find restaurants that provide gluten free menu options.</Subtitle>
                </Project>
                <Project>
                    <LinkWrapper to="/c19insights">
                    <ProjectImage>
                        <img src={coronavirus} style={{width: '300px'}}/>
                    </ProjectImage>
                        <Title>COVID-19 Insights</Title>
                    </LinkWrapper>
                    <Subtitle>A dashboard in the browser for viewing COVID-19 trends within the United States.</Subtitle>
                </Project>
            </ProjectContainer>
        </>
    );
}