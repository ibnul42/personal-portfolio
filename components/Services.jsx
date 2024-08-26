import React from 'react'
import Title from './Title'
import { MdOutlineDesignServices, MdOutlineMobileFriendly, MdDeveloperMode } from "react-icons/md";
import { SiGraphql,SiBmcsoftware  } from "react-icons/si";
import { GrOptimize } from "react-icons/gr";
import { FaWordpress,FaDev  } from "react-icons/fa6";
import { FaAppStoreIos,FaAccusoft,FaServicestack   } from "react-icons/fa";
import { GiArtificialHive } from "react-icons/gi";

const allServices = [
    {
        icon: 'SiBmcsoftware',
        title: 'Custom Software Development',
        caption: 'Expertise in developing robust and scalable software solutions using C#, ASP.NET Core, and a variety of databases such as SQL Server, Azure SQL, and Cosmos DB.'
    },
    {
        icon: 'FaDev',
        title: 'Cloud Integration and DevOps',
        caption: 'Experienced in deploying and managing cloud-based applications on platforms like Azure and AWS. I also specialize in CI/CD pipelines, Kubernetes, Docker, and infrastructure as code (IaC) using Bicep and ARM templates.'
    },
    {
        icon: 'FaAppStoreIos',
        title: 'Backend API Development',
        caption: 'Proficient in creating RESTful APIs with ASP.NET Core and integrating them with modern frontend frameworks like React and Angular, as well as mobile applications.'
    },
    {
        icon: 'FaAccusoft',
        title: 'Data Engineering and Analytics',
        caption: 'Skilled in using Azure Databricks, Kafka, and other big data tools to build and optimize data pipelines and analytics platforms for efficient data processing and machine learning.'
    },
    {
        icon: 'GiArtificialHive',
        title: 'Machine Learning and AI Solutions',
        caption: 'Implementation of machine learning models and AI frameworks to enhance application capabilities, including predictive analytics and natural language processing.'
    },
    {
        icon: 'FaServicestack',
        title: 'Microservices Architecture',
        caption: 'Design and develop scalable microservices-based applications to ensure modularity and ease of maintenance, leveraging technologies like Docker, Kubernetes, and Kafka.'
    },
]

const iconComponents = {
    MdOutlineDesignServices: MdOutlineDesignServices,
    MdOutlineMobileFriendly: MdOutlineMobileFriendly,
    SiGraphql: SiGraphql,
    MdDeveloperMode: MdDeveloperMode,
    GrOptimize: GrOptimize,
    FaWordpress: FaWordpress,
    FaAppStoreIos: FaAppStoreIos,
    SiBmcsoftware: SiBmcsoftware,
    FaDev: FaDev,
    FaAccusoft: FaAccusoft,
    FaServicestack: FaServicestack,
    GiArtificialHive: GiArtificialHive,
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
