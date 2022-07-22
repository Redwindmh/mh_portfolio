import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import AnimatedCharacters from '../AnimatedCharacters';
import './index.css';

const Home = () => {
    const [characterClass, setCharacterClass] = useState('text-animate');
    const nameArray = ['M','a','l','c','o','l','m',','];
    const titleArray = ['w','e','b','\xa0','d','e','v','e','l','o','p','e','r','.'];

    useEffect (() => {
        setTimeout(() => {
            setCharacterClass('text-animate-hover')
        }, 4000)
    }, []);

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={characterClass}>H</span>
                        <span className={`${characterClass} _12`}>i,</span>
                        <br />
                        <span className={`${characterClass} _13`}>I</span>
                        <span className={`${characterClass} _14`}>'m&nbsp;</span>
                        <AnimatedCharacters characterClass={characterClass} strArray={nameArray} idx={15} />
                        <br />
                        <AnimatedCharacters characterClass={characterClass} strArray={titleArray} idx={22} /></h1>
                    <h2>Fullstack Developer / Unity & VR Developer</h2>
                    <Link to="/contact" className="flat-button">CONTACT ME</Link>
                </div>
                <div className="mh-avi">
                    <model-viewer camera-controls autoplay ar src="https://d1a370nemizbjq.cloudfront.net/d72f0910-17b1-4242-a773-0272a76a96be.glb" alt="mh_avatar" auto-rotate></model-viewer>
                </div>
            </div>
            <Loader type="ball-spin-fade-loader" />
        </>
    );
}


export default Home;