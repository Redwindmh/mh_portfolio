import React, { useEffect, useState } from 'react';
import './index.css'
import Loader from 'react-loaders';
import AnimatedCharacters from '../AnimatedCharacters';
import portfolioData from '../../data/portfolio.json';
import renderPortfolio from './renderPort';

const Portfolio = () => {
    const [characterClass, setCharacterClass] = useState('text-animate');

    useEffect (() => {
        setTimeout(() => {
            setCharacterClass('text-animate-hover')
        }, 3000)
    }, []);

    return (
        <>
            <div className='container portfolio-page'>
                <h1 className='page-title'>
                    <AnimatedCharacters
                        characterClass={characterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <div>{renderPortfolio(portfolioData.portfolio)}</div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Portfolio