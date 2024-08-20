'use client'
import React from 'react'
import { TypeAnimation } from 'react-type-animation';

export default function TypeWriting() {


    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'Applications',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Solutions',
                1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ caretColor:'black', display: 'inline-block'  }}
            repeat={Infinity}
        />
    )
}
