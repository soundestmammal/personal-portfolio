import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FooterContainer = styled.div`
    padding: 50px 0 10px;
    width: 100%;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 2em;
`;

const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-end;
`;

const FooterIconRow = styled.ul`
    height: 100%;
    list-style-type: none;
    margin-top: 2em;
    padding: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
`;

const FooterTitle = styled.h1`
    font-size: 1.25em;
    margin: 0;
    padding: 0;
    color: #E2DFDF;
    letter-spacing: 1px;
    font-weight: 400;
`;

export default function Footer() {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterIconRow>
                    <li><a href="https://www.github.com/soundestmammal" target="_blank" style={{ color: '#AAAAAA', fontSize: '1.25em', marginRight: '1.5em' }}><FontAwesomeIcon icon={['fab', 'github']}/></a></li>
                    <li><a href="https://www.linkedin.com/in/robertchecco/" target="_blank" style={{ color: '#AAAAAA', fontSize: '1.25em', marginRight: '1.5em'  }}><FontAwesomeIcon icon={['fab', 'linkedin']} /></a></li>
                    <li><a href="https://drive.google.com/file/d/1gaEg-RmD3IkHAFP_fPfU7SvpNcNy8f-F/view?usp=sharing" target="_blank" style={{ fontSize: '1em', border: '1px solid #AAAAAA', color: '#AAAAAA', padding: '3px 6px', textDecoration: 'none'}}>Resume</a></li>
                </FooterIconRow>
            </FooterContent>
        </FooterContainer>
    );
}