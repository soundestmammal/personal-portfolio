import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import rob from '../assets/rob3.jpg';
import rLogo from '../assets/R_logo.svg';
import { faBorderNone } from '@fortawesome/free-solid-svg-icons';

const SpotlightContainer = styled.div`
    width: 100%;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 2em;
    margin-bottom: 4em;
`;

const SpotlightContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 66%;
        @media (max-width: 500px) {
            width: 100%;
    }
`;

const SpotlightMe = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1em;
`;

const SpotlightIntroWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const SpotlightTitle = styled.h1`
    font-size: 1.25em;
    margin: 0;
    padding: 0;
    color: #E2DFDF;
    letter-spacing: 1px;
    font-weight: 400;
`;

const SpotlightSubtitle = styled.h1`
    font-size: 1em;
    margin: 0;
    padding: 0;
    color: #AAAAAA;
    font-weight: 400;
`;

const SpotlightIntro = styled.p`
    margin-bottom 1em;
    color: #E2DFDF;
    font-size: 1.2em;
    line-height: 1.5em;
    @media (max-width: 500px) {
        font-size: 1.1em;
    }
`;

const SpotlightIconRow = styled.ul`
    list-style-type: none;
    margin-top: 1em;
    padding: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 50%;
    color: white;
`;

const SpotlightImage = styled.img`
    height: 225px;
    width: auto;
    border-radius: 16px;
    @media (max-width: 500px) {
        display: none;
    }
`;

const SpotlightCallToAction = styled.p`

`;

export default function Spotlight() {
    return (
        <SpotlightContainer>
            <SpotlightContent>
                <SpotlightMe>
                    <img src={rLogo} style={{ marginRight: '1.5em'}} />
                    <SpotlightIntroWrapper>
                        <SpotlightTitle>Robert Checco</SpotlightTitle>
                        <SpotlightSubtitle>Software Engineer</SpotlightSubtitle>
                    </SpotlightIntroWrapper>
                </SpotlightMe>
                <SpotlightIntro>Full Stack Software Engineer @ <a href="http://www.impel.io" style={{ color: 'white' }}>Impel</a>.</SpotlightIntro>
                <SpotlightIntro>Graduate of <a href="http://www.farmingdale.edu" style={{ color: 'white' }}>Farmingdale State College</a>.</SpotlightIntro>
                <SpotlightIntro>I’m interested in cryptoeconomics, autonomous vehicles, and building the future.</SpotlightIntro>
                <SpotlightIntro>I love meeting new people <a style={{ color: 'white' }} href="mailto:robertchecco.code@gmail.com">let's chat!</a> 👋.</SpotlightIntro>
                <SpotlightIconRow>
                    <li><a href="https://www.github.com/soundestmammal" target="_blank" style={{ color: '#AAAAAA', fontSize: '1.25em', marginRight: '1.5em' }}><FontAwesomeIcon icon={['fab', 'github']}/></a></li>
                    <li><a href="https://www.linkedin.com/in/robertchecco/" target="_blank" style={{ color: '#AAAAAA', fontSize: '1.25em', marginRight: '1.5em'  }}><FontAwesomeIcon icon={['fab', 'linkedin']} /></a></li>
                    <li><a href="https://drive.google.com/file/d/1MG9vtb8eK2s7Bs2IIkLTtC7JjwM0hVa3/view?usp=sharing" target="_blank" style={{ fontSize: '1em', border: '1px solid #AAAAAA', color: '#AAAAAA', padding: '3px 6px', textDecoration: 'none'}}>Resume</a></li>
                </SpotlightIconRow>
            </SpotlightContent>
            <SpotlightImage src={rob} alt="rob at zion national park" />
        </SpotlightContainer>
    );
}