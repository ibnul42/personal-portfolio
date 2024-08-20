import TypeWriting from '@/public/TypeWriting'
import Image from 'next/image'
import React from 'react'
import Title from '@/components/Title'

export default function Hero() {
    return (
        <div className='bg-orange-100'>
            <div className="w-full max-w-7xl mx-auto px-3 grid grid-cols-12 gap-3">
                <div className="col-span-12 md:col-span-7 order-2 md:order-1 flex flex-col gap-4 justify-center">
                    <Title title='I am designer' />
                    <div className='text-6xl font-semibold'>
                        <p>Creative Design and Web </p>
                        <div className='text-orange-600'><TypeWriting /></div>
                    </div>
                    <p className='text-sm font-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione saepe incidunt libero nemo, iusto magnam in veniam ipsa numquam quibusdam voluptatum, doloribus minus, quos consequuntur.</p>
                    <button
                        className='py-3 px-5 rounded-lg text-white bg-orange-500 hover:bg-orange-600 w-fit font-medium transition-all'
                    >Download My CV</button>
                </div>
                <div className="col-span-12 md:col-span-5 order-1 md:order-2">
                    <Image src='/assets/profile.jpg' height={500} width={500} className='w-full h-auto' alt='' />
                </div>
            </div>
        </div>
    )
}
