import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <div className='bg-white py-3'>
            <div className="w-full max-w-7xl mx-auto flex justify-between">
                <div className="">
                    <Link
                    href='/'
                    className='text-xl font-bold'
                    >LeoJonny LLC</Link>
                </div>
            </div>
        </div>
    )
}
