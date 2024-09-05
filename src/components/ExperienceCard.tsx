interface ExperienceCardProps{
    load: string
    period: string
    description: string
}

export function ExperienceCard({load, period, description} : ExperienceCardProps){
    return(
        <div className="w-full h-12 bg-transparent backdrop-blur-xl">
            <header>
                <h1>{load}</h1>
                <span>{period}</span>
            </header>
            <main>
                {description}
            </main>
        </div>
    )
}