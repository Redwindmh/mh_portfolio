import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './index.css';
// import LogoS from '../../assets/images/logo-s.png'
import LogoS from '../../assets/images/RedWind.JPG'
import LogoSubtitle from '../../assets/images/logo_sub.png'

const Sidebar = () => (
<div className="nav-bar">
    <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
    </Link>
    <nav>
        <NavLink>
            
        </NavLink>
    </nav>
</div>
    )

export default Sidebar
