import React from 'react'
import Title from './Title'
import { MdOutlineDesignServices, MdOutlineMobileFriendly, MdDeveloperMode } from "react-icons/md";
import { SiGraphql } from "react-icons/si";
import { GrOptimize } from "react-icons/gr";
import { FaWordpress } from "react-icons/fa6";
import { FaAppStoreIos } from "react-icons/fa";

const allServices = [
    {
        icon: 'MdOutlineDesignServices',
        title: 'UI/UX design',
        caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, dolore. Ad illum, illo ipsam itaque quam corrupti earum explicabo'
    },
    {
        icon: 'MdOutlineMobileFriendly',
        title: 'Mobile app',
        caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, dolore. Ad illum, illo ipsam itaque quam corrupti earum explicabo'
    },
    {
        icon: 'SiGraphql',
        title: 'graphic design',
        caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, dolore. Ad illum, illo ipsam itaque quam corrupti earum explicabo'
    },
    {
        icon: 'MdDeveloperMode',
        title: 'web developer',
        caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, dolore. Ad illum, illo ipsam itaque quam corrupti earum explicabo'
    },
    {
        icon: 'GrOptimize',
        title: 'seo optimization',
        caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, dolore. Ad illum, illo ipsam itaque quam corrupti earum explicabo'
    },
    {
        icon: 'FaWordpress',
        title: 'wordpress developer',
        caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, dolore. Ad illum, illo ipsam itaque quam corrupti earum explicabo'
    },
    {
        icon: 'FaAppStoreIos',
        title: 'app development',
        caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, dolore. Ad illum, illo ipsam itaque quam corrupti earum explicabo'
    },
]

const iconComponents = {
    MdOutlineDesignServices: MdOutlineDesignServices,
    MdOutlineMobileFriendly: MdOutlineMobileFriendly,
    SiGraphql: SiGraphql,
    MdDeveloperMode: MdDeveloperMode,
    GrOptimize: GrOptimize,
    FaWordpress: FaWordpress,
    FaAppStoreIos: FaAppStoreIos
};

export default function Services() {
    return (
        <div className='bg-white py-5'>
            <div className="w-full max-w-7xl mx-auto px-3 space-y-3">
                <div className="space-y-2 flex flex-col items-center">
                    <Title title='My Service' />
                    <p className='uppercase text-4xl font-semibold'>Services i offer</p>
                </div>
                <div className="py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                    {allServices.map(item => (
                        <SingleService key={item.title} {...item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

const SingleService = (item) => {
    const IconComponent = iconComponents[item.icon];
    return (
        <div className="px-4 py-7 border border-orange-200 hover:border-orange-50 hover:bg-orange-50 transition-all space-y-2 text-center rounded-md">
            <div className="flex justify-center py-2">
                {IconComponent && <IconComponent className='text-orange-400 w-14 h-14' />}
            </div>
            <p className='text-lg font-semibold capitalize'>{item.title}</p>
            <p className='text-sm font-light'>{item.caption}</p>
        </div>
    )
}
