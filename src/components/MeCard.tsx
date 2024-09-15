interface MeCardProps{
    description: string
}

export function MeCard({ description } : MeCardProps){
    return(
        <div className="w-full min-h-16 px-4 bg-transparent backdrop-blur-xl rounded-xl flex flex-col items-center justify-center hover:scale-105 cursor-pointer transition-all">
            <main>
                <span className="text-white">{description}</span>
            </main>
        </div>
    )
}