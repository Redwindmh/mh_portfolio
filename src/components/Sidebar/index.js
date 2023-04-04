import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './index.css';
import RWLogo from '../../assets/images/RedWind.JPG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faTwitter, faGithub, faSkype } from '@fortawesome/free-brands-svg-icons'
import { slide as Menu } from 'react-burger-menu'

const Sidebar = () => (
<div className="nav-bar">
    <div className='nav-bar-pc'>
    <Link className="logo" to="/">
        <img src={RWLogo} alt="rwlogo" />
        <div className='logo-name'>Malcolm</div>
    </Link>
    <nav>
        <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
            <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
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

    {/* <div className='nav-bar-mobile'>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
                <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul id='nav-links'>
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
        <div class="menu-bar-mobile-icons">
            <a href="javascript:void(0);" class="icon" onclick="openMenu()">
            <FontAwesomeIcon icon={faBars} color="#fff" />
            </a>
        </div>
    </div> */}
</div>

    )

    class Example extends React.Component {
        showSettings (event) {
          event.preventDefault();
        }

        render () {
          // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
          return (
            <Menu>
              <a id="home" className="menu-item" href="/">Home</a>
              <a id="about" className="menu-item" href="/about">About</a>
              <a id="contact" className="menu-item" href="/contact">Contact</a>
              <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
            </Menu>
          );
        }
      }

export default Sidebar
