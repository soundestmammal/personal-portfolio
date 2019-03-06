import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui inverted menu">
            <div className='header item'><Link to="/">Robert Checco</Link></div>
            <div className='header item'><Link to="/farmingdale">Dashboard</Link></div>
            <div className='header item'><Link to="/farmingdale/urbanecon">Urban Economics</Link></div>
        </div>
    )
}

export default Header;