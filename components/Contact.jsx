import React from 'react'
import Title from './Title'
import { FaLocationDot, FaPhoneFlip } from "react-icons/fa6";

export default function Contact() {
    return (
        <div className='bg-white py-5'>
            <div className="w-full max-w-7xl mx-auto px-3 space-y-3">
                <div className="space-y-2 flex flex-col items-center">
                    <Title title='My Contact' />
                    <p className='uppercase text-4xl font-semibold'>I want to hear from you</p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 py-5">
                    <form action="" className='flex-1 grid grid-cols-2 gap-4'>
                        <div className="">
                            <input
                                id='name'
                                name='name'
                                type="text"
                                placeholder='Your Name'
                                className='w-full py-2 px-2 rounded-md outline-none border border-orange-200 text-sm placeholder:font-light font-light'
                            />
                        </div>
                        <div className="">
                            <input
                                id='email'
                                name='email'
                                type="text"
                                placeholder='Your Email'
                                className='w-full py-2 px-2 rounded-md outline-none border border-orange-200 text-sm placeholder:font-light font-light'
                            />
                        </div>
                        <div className="">
                            <input
                                id='phone'
                                name='phone'
                                type="text"
                                placeholder='Your Phone'
                                className='w-full py-2 px-2 rounded-md outline-none border border-orange-200 text-sm placeholder:font-light font-light'
                            />
                        </div>
                        <div className="">
                            <input
                                id='subject'
                                name='subject'
                                type="text"
                                placeholder='Subject'
                                className='w-full py-2 px-2 rounded-md outline-none border border-orange-200 text-sm placeholder:font-light font-light'
                            />
                        </div>
                        <div className="col-span-2">
                            <textarea
                                id='message'
                                name='message'
                                type="text"
                                placeholder='Message'
                                className='w-full py-2 px-2 rounded-md outline-none border border-orange-200 text-sm placeholder:font-light font-light'
                            />
                        </div>
                        <div className="col-span-2">
                            <button
                                className='py-3 px-5 my-5 rounded-lg text-white bg-orange-500 hover:bg-orange-600 w-fit font-medium transition-all'
                            >Send Me Message</button>
                        </div>
                    </form>
                    <div className="flex-shrink-0 space-y-5 px-3">
                        <div className="flex gap-2 items-center">
                            <div className="w-10 h-10 rounded-md bg-orange-100 flex justify-center items-center">
                                <FaLocationDot className='text-orange-500 w-4 h-auto' />
                            </div>
                            <div className="">
                                <p className='font-semibold'>Address</p>
                                <p className='text-sm hover:text-orange-400 font-light'>202 Dog Hill Lane Beloit, KS 67420</p>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="w-10 h-10 rounded-md bg-orange-100 flex justify-center items-center">
                                <FaPhoneFlip className='text-orange-500 w-4 h-auto' />
                            </div>
                            <div className="">
                                <p className='font-semibold'>Phone</p>
                                <p className='text-sm hover:text-orange-400 font-light'>+0123456789</p>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="w-10 h-10 rounded-md bg-orange-100 flex justify-center items-center">
                                <FaLocationDot className='text-orange-500 w-4 h-auto' />
                            </div>
                            <div className="">
                                <p className='font-semibold'>Email</p>
                                <p className='text-sm hover:text-orange-400 font-light'>example@mail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
