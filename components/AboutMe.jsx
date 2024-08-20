import Image from 'next/image'
import React from 'react'
import Title from './Title'

const achievements = [
    {
        icon: '/assets/aboutIconOne.png',
        title: 'Complete Project',
        label: '0'
    },
    {
        icon: '/assets/aboutIconTwo.png',
        title: 'Year of experience',
        label: '0'
    }
]

export default function AboutMe() {
    return (
        <div className='bg-white py-5'>
            <div className="w-full max-w-7xl mx-auto px-3 grid grid-cols-12 gap-3">
                <div className="col-span-12 md:col-span-5 flex items-center">
                    <Image src='/assets/profile.jpg' height={500} width={500} className='w-full h-auto max-h-full' alt='' />
                </div>
                <div className="col-span-12 md:col-span-7 flex flex-col gap-4 justify-center">
                    <Title title='About Me' />
                    <p className='capitalize text-4xl font-semibold'>I can design anything you want</p>
                    <p className='text-sm font-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione saepe incidunt libero nemo, iusto magnam in veniam ipsa numquam quibusdam voluptatum, doloribus minus, quos consequuntur.</p>
                    <div className="grid grid-cols-2 gap-3 py-5">
                        {achievements?.map((item) => (
                            <Achievement key={item.title} {...item} />
                        ))}
                    </div>
                    <div className="grid grid-cols-2 items-center gap-3 text-xs">
                        <div className="flex gap-2 items-center">
                            <Checkbox />
                            <p>Work simple and clean design</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <Checkbox />
                            <p>Web Design Full stack</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <Checkbox />
                            <p>New idea and user friendly design</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <Checkbox />
                            <p>Unlimited Revisions</p>
                        </div>
                    </div>
                    <button
                        className='py-3 px-5 my-5 rounded-lg text-white bg-orange-500 hover:bg-orange-600 w-fit font-medium transition-all'
                    >Download My CV</button>
                </div>
            </div>
        </div>
    )
}

const Achievement = (item) => {
    return (
        <div className="flex gap-2 items-center">
            <div className="flex-shrink-0">
                <Image src={item.icon} width={100} height={100} alt='' className='w-14 h-auto' />
            </div>
            <div className="text-sm font-semibold">
                <p className='text-orange-600'>{item.label}+</p>
                <p className=''>{item.title}</p>
            </div>
        </div>
    )
}

const Checkbox = () => {
    return (
        <div className="inline-flex items-center">
            <label
                className="relative flex cursor-pointer items-center rounded-full"
                for="checkbox-1"
                data-ripple-dark="true"
            >
                <input
                    type="checkbox"
                    className="before:content[''] peer relative h-4 w-4 appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-orange-600 checked:bg-white checked:before:bg-white hover:before:opacity-10"
                    id="checkbox-1"
                    checked
                />
                <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-orange-600 opacity-0 transition-opacity peer-checked:opacity-100">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-width="1"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </div>
            </label>
        </div>
    )
}