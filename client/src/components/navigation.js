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
`;

const Row = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: row;
`;

const NavItem = styled.li`
    font-size: 1.2em;
    margin-left: 1em;
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
                