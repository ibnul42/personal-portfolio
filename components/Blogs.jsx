import React from 'react'
import Title from './Title'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa";

const allBlogs = [
    {
        icon: '/assets/blogs/blog1.jpg',
        title: 'Advanced API Development',
        caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, dolore. Ad illum, illo ipsam itaque quam corrupti earum explicabo',
        date: '20 July, 2024',
        content: 'In today’s digital landscape, APIs (Application Programming Interfaces) are crucial for enabling communication between different software systems. Building robust APIs is essential for ensuring scalability, performance, and security. Here are some best practices to consider when designing APIs:',
        lists: [
            { title: 'Use RESTful Principles:', desc: 'When designing APIs, follow REST (Representational State Transfer) principles to ensure a stateless, scalable, and flexible architecture. This approach uses standard HTTP methods like GET, POST, PUT, and DELETE, making your APIs easy to understand and integrate.' },
            { title: 'Clear and Consistent Naming Conventions:', desc: 'Use clear, descriptive names for your API endpoints and resources. This not only improves readability but also makes it easier for developers to understand and use your API.' },
            { title: 'Implement Proper Error Handling:', desc: 'Provide meaningful error messages and HTTP status codes. This helps users understand what went wrong and how to fix it. Use standardized formats like JSON or XML for error responses.' },
            { title: 'Secure Your APIs:', desc: 'Ensure your APIs are secure by implementing authentication and authorization mechanisms, such as OAuth2 or JWT tokens. Additionally, use HTTPS to encrypt data in transit.' },
            { title: 'Version Your APIs:', desc: 'API versioning allows you to make changes to your API without disrupting existing users. Use URL path versioning (e.g., /v1/users) or HTTP headers to manage different API versions.' },
            { title: 'Optimize Performance:', desc: 'Use caching strategies like HTTP caching headers (e.g., ETag) and content compression (e.g., GZIP) to reduce latency and improve API response times. Also, consider implementing pagination for large datasets to avoid overwhelming your server.' },
            { title: 'Document Your API:', desc: 'By following these best practices, you can create robust, scalable, and secure APIs that meet the needs of your users and help drive the success of your applications.' },
        ],
        tags: ['API Development', 'RESTful APIs', 'Best Practices', 'Software Development']
    },
    {
        icon: '/assets/blogs/blog2.jpg',
        title: 'Cloud Solutions with Azure',
        caption: 'Cloud Solutions with Azure: A Guide to Effective Deployment and Management',
        date: '28 July, 2024',
        content: '',
        lists: [
            { title: '', desc: '' },
            { title: '', desc: '' },
        ]
    },
    {
        icon: '/assets/blogs/blog3.jpg',
        title: 'Building Scalable Microservices',
        caption: '',
        date: '03 August, 2023',
        content: '',
        lists: [
            { title: '', desc: '' },
            { title: '', desc: '' },
        ]
    },
    {
        icon: '/assets/blogs/blog2.jpg',
        title: 'Machine Learning in .NET',
        caption: '',
        date: '12 August, 2024',
        content: '',
        lists: [
            { title: '', desc: '' },
            { title: '', desc: '' },
        ]
    },
    {
        icon: '/assets/blogs/blog1.jpg',
        title: 'Data Engineering with Databricks',
        caption: '',
        date: '21 August, 2023',
        content: '',
        lists: [
            { title: '', desc: '' },
            { title: '', desc: '' },
        ]
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
