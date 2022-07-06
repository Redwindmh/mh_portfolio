import React, { useState, useEffect } from 'react';
import './index.css';
import AnimatedCharacters from '../AnimatedCharacters'

const About = ()=> {

    const [characterClass, setCharacterClass] = useState('text-animate');

    useEffect (() => {
        setTimeout(() => {
            setCharacterClass('text-animate-hover')
        }, 3000)
    }, []);

 return (
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
    </div>
 )
}

export default About;