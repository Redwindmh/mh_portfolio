import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Home = () => {

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm Malcolm<br />web developer</h1>
                <h2>Fullstack Developer / Unity & VR Developer</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    )
}


export default Home;