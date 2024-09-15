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
            className="w-full min-h-24 bg-transparent backdrop-blur-xl rounded-lg flex flex-col justify-center px-2 hover:scale-105 cursor-pointer transition-all" 
            href={`/project/${id}`}
        >
            <h1 className="text-xl text-blue_twitter font-bold">{title}</h1>
            <span className=" text-white">{description}</span>
            <span className="text-purple">{techsUtilized}</span>
        </Link>
    )
}