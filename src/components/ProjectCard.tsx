interface ProjectCardProps{
    id: string
    title: string
    description: string
    techsUtilized: string
}

export function ProjectCard({ id, title, description, techsUtilized } : ProjectCardProps){
    return(
        <div>
            <header>{title}</header>
            <p>{description}</p>
            <span>{techsUtilized}</span>
        </div>
    )
}