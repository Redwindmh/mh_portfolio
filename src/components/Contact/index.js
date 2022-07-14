import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedCharacters from '../AnimatedCharacters'
import './index.css'

const Contact = () => {
    const [characterClass, setCharacterClass] = useState('text-animate');

    useEffect (() => {
        setTimeout(() => {
            setCharacterClass('text-animate-hover')
        }, 3000)
    }, []);

    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedCharacters characterClass={characterClass} strArray={['C','o','n','t','a','c','t',' ','m','e']} idx={15} />
                </h1>
                <p>
                    Please get in touch with me!
                </p>
                <div>
                    <form>
                        <ul>
                            <li>
                                
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Contact