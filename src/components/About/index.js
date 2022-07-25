import React, { useState, useEffect } from 'react';
import './index.css';
import AnimatedCharacters from '../AnimatedCharacters'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGitAlt, faHtml5, faJsSquare, faPhp, faReact, faSass, faUnity} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = ()=> {

    const [characterClass, setCharacterClass] = useState('text-animate');

    useEffect (() => {
        setTimeout(() => {
            setCharacterClass('text-animate-hover')
        }, 3000)
    }, []);

 return (
    <>
    <div className="container about-page">
        <div className="text-zone">
            <h1>
            <AnimatedCharacters characterClass={characterClass} strArray={'About\xa0me'.split('')} idx={15}/>
            </h1>
            <div className='about-text'>
                <p>
                    I'm Malcolm Hendricks, a freelance web developer, Unity developer and Japanese to English translator.
                </p>
                <p>
                    I specialize in building multi-lingual personal and small-business web applications.
                </p>
                <p>
                    Please don't hesitate to get in touch for any services I provide, or if you would like to collaborate on a project!
                </p>
            </div>
        </div>
        <div className="stage-cube-content">
            <div className="cube-spinner">
                <div className="face1">
                    <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                </div>
                <div className="face2">
                    <FontAwesomeIcon icon={faSass} color="#28A4D9" />
                </div>
                <div className="face3">
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                </div>
                <div className="face4">
                    <FontAwesomeIcon icon={faUnity} color="#BF4080" />
                </div>
                <div className="face5">
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                </div>
                <div className="face6">
                    <FontAwesomeIcon icon={faPhp} color="#8892BF" />
                </div>
                <div className="face7">
                    <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                </div>
            </div>
        </div>
    </div>
    <Loader type="ball-scale-multiple" />
    </>
 )
}

export default About;