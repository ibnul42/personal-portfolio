'use client'
import Navbar from '@/components/Navbar'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Error() {
    const router = useRouter();
    return (
        <div className="w-screen h-screen overflow-x-hidden overflow-y-auto flex flex-col">
            <Navbar />
            <div className="flex-1 flex flex-col gap-3 justify-center items-center">
                <div className="text-center text-4xl font-bold">
                    Oops! Page not found.
                </div>
                <div className="text-center text-2xl">
                    <button
                        onClick={() => router.push('/')}
                        className='px-6 py-2 rounded-full border border-orange-400 hover:bg-orange-400 hover:text-white transition-all'
                    >Return Home</button>
                </div>
            </div>
        </div>
    )
}