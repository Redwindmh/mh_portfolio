import React, { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedCharacters from '../AnimatedCharacters'
import './index.css'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
    const [characterClass, setCharacterClass] = useState('text-animate');
    const refForm = useRef()

    useEffect (() => {
        setTimeout(() => {
            setCharacterClass('text-animate-hover')
        }, 3000)
    }, []);

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_3e5q9sk',
                'template_5oz5od8',
                refForm.current,
                'BxYR4LWs4_LqJ7wBv'
            )
            .then(
                () => {
                    alert('Message successfully sent! Thank you!')
                    window.location.reload(false)
                },
                () => {
                    alert('Unable to send message. Please try again.')
                }
            )
    }

    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedCharacters characterClass={characterClass} strArray={"Contact\xa0me".split("")} idx={15} />
                </h1>
                <p>
                    Please get in touch with me!
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
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
                                <input type="submit" className='flat-button' value="SEND"  />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className='info-map'>
                Malcolm Hendricks,<br />Japan
                <span>malhendricks@gmail.com</span>
            </div>
            <div className='map-wrapper' id='map'>
                <MapContainer center={[36.54181891676484, 138.41257884856518]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[36.54181891676484, 138.41257884856518]} >
                        <Popup className='popup-text'>“You're off the edge of the map, mate.<br />Here, there be monsters.”</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Contact