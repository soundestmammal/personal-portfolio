import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const NavigationRow = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    height: 100px;
    @media (max-width: 500px) {
        justify-content: center;
    }
`;

const Row = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    @media (max-width: 500px) {
        padding: 0 40px;
        width: 100%;
        justify-content: space-between;
    }
`;

const NavItem = styled.li`
    font-size: 1.2em;
    margin-left: 1em;
    @media (max-width: 500px) {
        margin-left: 0;
    }
`;

const StyledLink = styled(props => <Link {...props} />)`
    color: #AAAAAA;
    text-decoration: none;
`;

export default function Navigation() {
    return (
        <NavigationRow>
            <Row>
                <NavItem><StyledLink to="/" activeStyle={{ color: "rgb(0, 129, 227)"}}>Home</StyledLink></NavItem>
                <NavItem><StyledLink to="/about/" activeStyle={{ color: "rgb(0, 129, 227)" }}>About</StyledLink></NavItem>
                <NavItem><a href="mailto:robertchecco.code@gmail.com" style={{color: '#AAAAAA', textDecoration: 'none'}}>Contact</a></NavItem>
            </Row>
        </NavigationRow>
    )
}
                