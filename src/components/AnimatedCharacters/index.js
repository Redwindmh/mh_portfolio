import React from 'react';
import './index.css'

const AnimatedCharacters = ({characterClass, strArray, idx}) => {
    return (
        <span>
            {
                strArray.map((char,i) => (
                    <span key={char + i} className={`${characterClass} _${i + idx}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    )
}

export default AnimatedCharacters