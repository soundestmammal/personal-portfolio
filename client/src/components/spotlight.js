import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import rob from '../assets/rob3.jpg';
import rLogo from '../assets/R_logo.svg';
import { faBorderNone } from '@fortawesome/free-solid-svg-icons';

const SpotlightContainer = styled.div`
    width: 100%;
    height 300px;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 2em;
`;

const SpotlightContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
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
    font-size: 1.25em;
    line-height: 1.5em;
`;

const SpotlightIconRow = styled.ul`
    list-style-type: none;
    margin-top: 2em;
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
                <SpotlightIntro>Recent graduate of <a href="http://www.farmingdale.edu" style={{color: 'inherit'}}>Farmingdale State College.</a></SpotlightIntro>
                <SpotlightIntro>I'm looking for a software engineering role in a great team.  <a style={{ color: 'white' }} href="mailto:robertchecco.code@gmail.com">Let's chat about it</a> 👋.</SpotlightIntro>
                <SpotlightIconRow>
                    <li><a href="https://www.github.com/soundestmammal" target="_blank" style={{ color: '#AAAAAA', fontSize: '1.25em', marginRight: '1.5em' }}><FontAwesomeIcon icon={['fab', 'github']}/></a></li>
                    <li><a href="https://www.linkedin.com/in/robertchecco/" target="_blank" style={{ color: '#AAAAAA', fontSize: '1.25em', marginRight: '1.5em'  }}><FontAwesomeIcon icon={['fab', 'linkedin']} /></a></li>
                    <li><a href="https://www.kaggle.com/robertchecco" target="_blank" style={{ color: '#AAAAAA', fontSize: '1.25em', marginRight: '1.5em' }}><FontAwesomeIcon icon={['fab', 'kaggle']} /></a></li>
                    <li><a href="https://drive.google.com/file/d/1gaEg-RmD3IkHAFP_fPfU7SvpNcNy8f-F/view?usp=sharing" target="_blank" style={{ fontSize: '1em', border: '1px solid #AAAAAA', color: '#AAAAAA', padding: '3px 6px', textDecoration: 'none'}}>Resume</a></li>
                </SpotlightIconRow>
            </SpotlightContent>
            <SpotlightImage src={rob} alt="rob at zion national park" />
        </SpotlightContainer>
    );
}