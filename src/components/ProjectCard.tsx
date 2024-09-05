interface ProjectCardProps{
    id: string
    title: string
    description: string
    techsUtilized: string
}

export function ProjectCard({ id, title, description, techsUtilized } : ProjectCardProps){
    return(
        <div className="w-full h-16 bg-yellow rounded-lg flex flex-col justify-center">
            <h1 className="text-xl text-blue_twitter">{title}</h1>
            <span className=" text-white">{description}</span>
            <span className="text-purple">{techsUtilized}</span>
        </div>
    )
}