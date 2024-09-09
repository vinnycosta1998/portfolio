/* eslint-disable react/react-in-jsx-scope */

import Link from "next/link"

interface ProjectCardProps{
    id: string
    title: string
    description: string
    techsUtilized: string
}

export function ProjectCard({ id, title, description, techsUtilized } : ProjectCardProps){
    return(
        <Link 
            className="w-full min-h-24 bg-transparent backdrop-blur-xl rounded-lg flex flex-col justify-center items-center px-2 xlg:w-full lg:w-full md:w-full sm:w-[500px] xsm:w-[500px]" 
            href={`/project/${id}`}
        >
            <h1 className="text-xl text-blue_twitter">{title}</h1>
            <span className=" text-white">{description}</span>
            <span className="text-purple">{techsUtilized}</span>
        </Link>
    )
}