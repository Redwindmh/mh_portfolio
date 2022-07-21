import React, { useState } from 'react';
import './index.css'
import Loader from 'react-loaders';
import AnimatedCharacters from '../AnimatedCharacters';

const Portfolio = () => {
    const [characterClass, setCharacterClass] = useState('text-animate');
    return (
        <>
            <div className='container portfolio-page'>
                <div className='text-zone'>
                    <h1 className='page-title'>
                        <AnimatedCharacters
                            characterClass={characterClass}
                            strArray={"Portfolio space".split("")}
                            idx={15}
                            />
                    </h1>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Portfolio