'use client'
import React from 'react'
import { TypeAnimation } from 'react-type-animation';

export default function TypeWriting() {


    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'Web Solutions',
                1000,
                'Applications Solutions',
                1000,
                'Web Services',
                1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ caretColor:'black', display: 'inline-block'  }}
            repeat={Infinity}
        />
    )
}
