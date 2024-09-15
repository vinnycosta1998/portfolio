interface ExperienceCardProps{
    load: string
    period: string
    description: string
}

export function ExperienceCard({load, period, description} : ExperienceCardProps){
    return(
        <div className="w-full min-h-24 px-4 bg-transparent backdrop-blur-xl rounded-xl flex flex-col hover:scale-105 cursor-pointer transition-all">
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