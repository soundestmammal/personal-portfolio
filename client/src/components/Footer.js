import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return(
        <footer className="footer">
            <a href="mailto:robertchecco.code@gmail.com" className="footer__link">robertchecco.code@gmail.com</a>
            <ul className="social-list">
                <li className="social-list__item"><a href="https://www.github.com/soundestmammal" className="social-list__item"><FontAwesomeIcon icon={['fab', 'github']} /></a></li>
                <li className="social-list__item"><a href="https://www.kaggle.com/robertchecco" className="social-list__item"><FontAwesomeIcon icon={['fab', 'kaggle']} /></a></li>
                <li className="social-list__item"><a href="https://www.linkedin.com/in/robertchecco/" className="social-list__item"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a></li>
                <li className="social-list__item"><a href="https://twitter.com/rjchecco" className="social-list__item"><FontAwesomeIcon icon={['fab', 'twitter']} /></a></li>
            </ul>
        </footer>
    );
}

export default Footer;