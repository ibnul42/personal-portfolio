import React from 'react'

export default function Title({ title = '' }) {
    return (
        <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 rounded-full border bg-orange-600 relative">
                <div className="absolute -top-0.5 -left-1 h-full w-full rounded-full border border-black flex justify-center items-center">
                    <div className="w-1.5 h-1.5 border border-black rounded-full"></div>
                </div>
            </div>
            <p className='uppercase text-sm'>{title}</p>
        </div>
    )
}
