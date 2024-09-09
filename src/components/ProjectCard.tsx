/* eslint-disable react/react-in-jsx-scope */

interface ProjectCardProps{
    title: string
    description: string
    techsUtilized: string
}

export function ProjectCard({ title, description, techsUtilized } : ProjectCardProps){
    return(
        <div className="w-full min-h-24 bg-transparent backdrop-blur-xl rounded-lg flex flex-col justify-center items-center">
            <h1 className="text-xl text-blue_twitter">{title}</h1>
            <span className=" text-white">{description}</span>
            <span className="text-purple">{techsUtilized}</span>
        </div>
    )
}