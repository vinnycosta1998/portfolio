/* eslint-disable react/react-in-jsx-scope */
    import Image from "next/image"

    interface TechCardProps{
        logo: string
        title: string
    } 

    export function TechCard({ logo, title } : TechCardProps){
        return(
            <div className="w-32 h-32 bg-transparent backdrop-blur-xl rounded-lg flex flex-col items-center justify-center">
                <Image
                    src={logo}
                    alt={`logo ${title}`} 
                    width={90}
                    height={90}
                    quality={100}
                    priority
                />
                <h1 className="text-white">{title}</h1>
            </div>
        )
    }