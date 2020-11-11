import React from 'react';
import styled, { css } from 'styled-components';

const Description = styled.div`
    padding-bottom: 3em;
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
    width: 100%;
    height: 300px;
    background: #DEF6FF;
    margin-top: 2em;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const Project = styled.div`
    width: 400px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
                    <h1>Oasis</h1>
                    <>
                        <a href="http://www.oasisglutenfree.com">View Project</a>
                        <a href="http://www.github.com/soundestmammal/oasis">View Code</a>
                    </>
                </Project>
            </ProjectContainer>
            <ProjectContainer>
                <Project>
                    <h1>COVID-19 Insights</h1>
                    <>
                        <a href="http://www.c19insights.io">View Project</a>
                        <a href="http://www.github.com/soundestmammal/covid19insights">View Code</a>
                    </>
                </Project>
            </ProjectContainer>
        </>
    );
}