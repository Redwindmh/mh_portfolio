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
                <div className='contact-form'>
                    <form>
                        <ul>
                            <li className='half'>
                                <input type="text" name="name" placeholder="Your name" required />
                            </li>
                            <li className='half'>
                                <input type="email" name="email" placeholder="Your email" required />
                            </li>
                            <li>
                                <input type="text" name="subject" placeholder="Your subject" required />
                            </li>
                            <li>
                                <textarea name="message" placeholder="Your message" required />
                            </li>
                            <li>
                                <input type="submit" className='flat-button'  />
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