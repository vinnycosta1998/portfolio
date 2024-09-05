import Image from "next/image";

export function Avatar(){
    return(
        <Image 
            src={`https://github.com/vinnycosta9898.png`}
            alt="Imagem de perfil"
            quality={100}
            priority
            width={300}
            height={300}
            className="rounded-[50%]"
        />
    )
}