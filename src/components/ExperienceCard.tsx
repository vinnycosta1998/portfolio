interface ExperienceCardProps{
    load: string
    period: string
    description: string
}

export function ExperienceCard({load, period, description} : ExperienceCardProps){
    return(
        <div className="w-full h-12 bg-transparent backdrop-blur-xl">
            <header className="flex justify-between">
                <h1 className="text-pink">{load}</h1>
                <span className="text-blue_twitter">{period}</span>
            </header>
            <main>
                <span className="text-white">{description}</span>
            </main>
        </div>
    )
}