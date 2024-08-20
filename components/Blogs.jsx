import React from 'react'
import Title from './Title'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa";

const allBlogs = [
    {
        icon: '/assets/blogs/blog1.jpg',
        title: 'UI/UX design',
        caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, dolore. Ad illum, illo ipsam itaque quam corrupti earum explicabo',
        date: '20 January, 2023'
    },
    {
        icon: '/assets/blogs/blog2.jpg',
        title: 'Mobile app',
        caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, dolore. Ad illum, illo ipsam itaque quam corrupti earum explicabo',
        date: '20 January, 2023'
    },
    {
        icon: '/assets/blogs/blog1.jpg',
        title: 'graphic design',
        caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, dolore. Ad illum, illo ipsam itaque quam corrupti earum explicabo',
        date: '20 January, 2023'
    },
    {
        icon: '/assets/blogs/blog1.jpg',
        title: 'web developer',
        caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, dolore. Ad illum, illo ipsam itaque quam corrupti earum explicabo',
        date: '20 January, 2023'
    },
    {
        icon: '/assets/blogs/blog2.jpg',
        title: 'seo optimization',
        caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, dolore. Ad illum, illo ipsam itaque quam corrupti earum explicabo',
        date: '20 January, 2023'
    },
    {
        icon: '/assets/blogs/blog3.jpg',
        title: 'wordpress developer',
        caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, dolore. Ad illum, illo ipsam itaque quam corrupti earum explicabo',
        date: '20 January, 2023'
    },
    {
        icon: '/assets/blogs/blog3.jpg',
        title: 'app development',
        caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, dolore. Ad illum, illo ipsam itaque quam corrupti earum explicabo',
        date: '20 January, 2023'
    },
]

export default function Blogs() {
    return (
        <div className='bg-white py-5'>
            <div className="w-full max-w-7xl mx-auto px-3 space-y-3">
                <div className="space-y-2 flex flex-col items-center">
                    <Title title='My Blog' />
                    <p className='uppercase text-4xl font-semibold'>Latest Blog</p>
                </div>
                <div className="py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {allBlogs.map(item => (
                        <SingleBlog key={item.title} {...item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

const SingleBlog = (item) => {
    return (
        <div className="border border-orange-200 transition-all space-y-2 rounded-md overflow-hidden">
            <div className="w-full aspect-video relative group">
                <div className="hidden group-hover:block absolute top-0 left-0 w-full h-full bg-black/20"></div>
                <Image src={item.icon} width={500} height={500} alt='' className='w-full h-full object-cover' />
            </div>
            <div className="px-3 py-4 space-y-3">
                <p className='text-xs font-light'>{item.date}</p>
                <p className='text-lg font-semibold capitalize hover:text-orange-400 transition-all'>{item.title}</p>
                <Link
                    href='!/'
                    className='group flex text-sm font-medium text-orange-500 items-center gap-2 transition-all'
                >
                    <span>Read More</span>
                    <FaArrowRight className='w-3 group-hover:translate-x-3 transition-all' />
                </Link>
            </div>
        </div>
    )
}
