import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import rob from '../rob3.jpg';
import rLogo from '../R_logo.svg';

const SpotlightContainer = styled.div`
    width: 100%;
    height 400px;
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
    width: 50%;
    color: white;
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
                <SpotlightIntro>Recent graduate of Farmingdale State College.</SpotlightIntro>
                <SpotlightIntro>I'm looking for a software engineering role within a rockstar team... <a style={{ color: 'white' }} href="mailto:robertchecco.code@gmail.com">Let's chat about it</a> 👋.</SpotlightIntro>
                <SpotlightIconRow>
                    <li><a href="https://www.github.com/soundestmammal" style={{ color: '#AAAAAA', fontSize: '1.25em', marginRight: '1.5em' }}><FontAwesomeIcon icon={['fab', 'github']}/></a></li>
                    <li><a href="https://www.linkedin.com/in/robertchecco/" style={{ color: '#AAAAAA', fontSize: '1.25em', marginRight: '1.5em'  }}><FontAwesomeIcon icon={['fab', 'linkedin']} /></a></li>
                    <li><a href="https://www.kaggle.com/robertchecco" style={{color: '#AAAAAA', fontSize: '1.25em'}}><FontAwesomeIcon icon={['fab', 'kaggle']} /></a></li>
                </SpotlightIconRow>
            </SpotlightContent>
            <img src={rob} alt="rob at zion national park" style={{ height: '225px', width: 'auto', borderRadius: '8px'}}/>
        </SpotlightContainer>
    );
}