import Image from "next/image"

interface TechCardProps{
    id: string
    logo: string
    title: string
}

export function TechCard({ id, logo, title } : TechCardProps){
    return(
        <div>
            <Image
                src={logo}
                alt={`logo ${title}`}
                width={60}
                height={60}
                quality={100}
                priority
            />
            <h1>{title}</h1>
        </div>
    )
}