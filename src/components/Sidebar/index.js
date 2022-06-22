import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './index.css';
// import LogoS from '../../assets/images/logo-s.png'
import LogoS from '../../assets/images/RedWind.JPG'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faTwitter, faGithub, faSkype } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
<div className="nav-bar">
    <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
    </Link>
    <nav>
        <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
    </nav>
    <ul>
        <li>
            <a target="_blank" rel='noopener noreferrer' href='https://www.linkedin.com/in/malcolm-hendricks-50152a139/'>
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
        </li>
        <li>
            <a target="_blank" rel='noopener noreferrer' href='https://github.com/Redwindmh'>
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
        </li>
        <li>
            <a target="_blank" rel='noopener noreferrer' href='https://twitter.com/Shiranui_369'>
                <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
            </a>
        </li>
        <li>
            <a target="_blank" rel='noopener noreferrer' href="skype:live:redwindmh">
                <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
            </a>
        </li>
    </ul>
</div>
    )

export default Sidebar
