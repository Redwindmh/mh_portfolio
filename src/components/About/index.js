import React from 'react';
import './index.css';
import AnimatedCharacters from '../AnimatedCharacters'

const About = ()=> {
 return (
    <div className="container about-page">
        <div className="text-zone">
            <h1>
            <AnimatedCharacters strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} idx={15}/>
            </h1>
            <p>
                I am the creator, the great giving and taker
            </p>
        </div>
    </div>
 )
}

export default About;