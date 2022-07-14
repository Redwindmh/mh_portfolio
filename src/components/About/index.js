import React, { useState, useEffect } from 'react';
import './index.css';
import AnimatedCharacters from '../AnimatedCharacters'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faPhp, faReact, faSass} from '@fortawesome/free-brands-svg-icons'
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
            <AnimatedCharacters characterClass={characterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} idx={15}/>
            </h1>
            <p>
                I am the creator, the great giving and taker
            </p>
            <p>
                This is just a test
            </p>
            <p>
                Puerto Ricans known for slashing
            </p>
        </div>
        <div className="stage-cube-content">
            <div className="cube-spinner">
                <div className="face1">
                    <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                </div>
                <div className="face2">
                    <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                </div>
                <div className="face3">
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                </div>
                <div className="face4">
                    <FontAwesomeIcon icon={faSass} color="#BF4080" />
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