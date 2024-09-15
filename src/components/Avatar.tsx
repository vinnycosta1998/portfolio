/* eslint-disable react/react-in-jsx-scope */
import Image from "next/image";

export function Avatar(){
    return(
        <Image 
            src={`https://github.com/vinnycosta1998.png`}
            alt="Imagem de perfil"
            quality={100}
            priority
            width={400}
            height={400}
            className="rounded-[50%] xlg:w-[25rem] xlg:h-[25rem] lg:w-[20rem] lg:h-[20rem] md:w-[20rem] md:h-[20rem] sm:w-[20rem] sm:h-[20rem] xsm:w-[20rem] sxm:h-[20rem]"
        />
    )
}