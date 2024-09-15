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
            className="rounded-[50%]"
        />
    )
}