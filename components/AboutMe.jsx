'use client'
import Image from 'next/image'
import React from 'react'
import Title from './Title'

const achievements = [
    {
        icon: '/assets/aboutIconOne.png',
        title: 'Complete Project',
        label: '100'
    },
    {
        icon: '/assets/aboutIconTwo.png',
        title: 'Year of experience',
        label: '10'
    }
]

export default function AboutMe() {
    const downloadFile = (e) => {
        e.preventDefault();
        const link = document.createElement('a');
        link.href = '/assets/portfolio.pdf';
        link.download = 'portfolio';
        link.click();
    }
    return (
        <div className='bg-white py-5'>
            <div className="w-full max-w-7xl mx-auto px-3 grid grid-cols-12 gap-3">
                {/* <div className="col-span-12 md:col-span-5 flex items-center">
                    <div className="relative group">
                        <div className="hidden group-hover:block absolute top-0 left-0 w-full h-full bg-black/20"></div>
                        <Image src='/assets/profile.jpg' height={500} width={500} className='w-full h-auto max-h-full' alt='' />
                    </div>
                </div> */}
                <div className="col-span-12 md:col-span-12 flex flex-col gap-4 justify-center">
                    <Title title='About Me' />
                    <p className='capitalize text-4xl font-semibold'>I can develop anything you want</p>
                    <div className="text-sm font-light space-y-3">
                        <p>Hi, I&apos;m Henry Diaz, a seasoned software developer and the founder of LeoJonny LLC. With over 10 years of experience in the industry, I specialize in creating powerful and efficient software solutions using .NET technologies, cloud platforms, and modern development practices.</p>
                    </div>
                    <p className='capitalize text-4xl font-semibold'>What I Do</p>
                    <div className="text-sm font-light space-y-3">
                        <p>I’m passionate about C#/.NET development and dedicated to building applications that are not only functional but also scalable and secure. My love for coding drives me to constantly learn and innovate, tackling complex problems and delivering high-quality software.</p>
                        <p>My career journey has allowed me to work on a diverse range of projects, from healthcare applications to enterprise solutions, where I’ve honed my skills in both backend and frontend development, cloud integration, and AI frameworks. I take pride in writing clean, maintainable code and architecting solutions that meet the unique needs of my clients.</p>
                        <p>I’m always open to new opportunities, whether it&apos;s collaborating with a dynamic team, joining an exciting new project, or offering my expertise as a freelance developer. If you&apos;re interested in working together, please reach out via LinkedIn or email. I’m eager to connect and explore how we can create something amazing together!</p>
                        <p>Thank you for visiting my website, and I hope you have a fantastic day!</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 py-5">
                        {achievements?.map((item) => (
                            <Achievement key={item.title} {...item} />
                        ))}
                    </div>
                    <div className="grid grid-cols-2 items-center gap-3 text-xs">
                        <div className="flex gap-2 items-center">
                            <Checkbox />
                            <p>Full-Stack Development</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <Checkbox />
                            <p>Cutting-Edge Technology Integration</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <Checkbox />
                            <p>Client-Focused Solutions</p>
                        </div>
                    </div>
                    {/* <button
                        onClick={downloadFile}
                        className='py-3 px-5 my-5 rounded-lg text-white bg-orange-500 hover:bg-orange-600 w-fit font-medium transition-all'
                    >Download My CV</button> */}
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