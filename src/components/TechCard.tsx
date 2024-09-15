/* eslint-disable react/react-in-jsx-scope */
    import Image from "next/image"

    interface TechCardProps{
        logo: string
        title: string
    } 

    export function TechCard({ logo, title } : TechCardProps){
        return(
            <div className="w-48 h-48 bg-transparent backdrop-blur-xl rounded-lg flex flex-col items-center justify-center hover:scale-105 cursor-pointer transition-all">
                <Image
                    src={logo}
                    alt={`logo ${title}`} 
                    width={90}
                    height={90}
                    quality={100}
                    priority
                />
                <strong className="text-xl text-white mt-2">{title}</strong>
            </div>
        )
    }