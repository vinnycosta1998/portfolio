/* eslint-disable react/react-in-jsx-scope */

interface MeCardProps{
    description: string
}

export function MeCard({ description } : MeCardProps){
    return(
        <div className="w-full min-h-16 px-4 bg-transparent backdrop-blur-xl rounded-xl flex flex-col items-center justify-center">
            <main>
                <span className="text-white">{description}</span>
            </main>
        </div>
    )
}