/* eslint-disable react/react-in-jsx-scope */

interface MeCardProps{
    description: string
}

export function MeCard({ description } : MeCardProps){
    return(
        <div className="w-full min-h-16 px-4 bg-transparent backdrop-blur-xl rounded-xl flex flex-col items-center justify-center xlg:w-full lg:w-full md:w-full sm:w-[500px] xsm:w-[500px]">
            <main>
                <span className="text-white">{description}</span>
            </main>
        </div>
    )
}