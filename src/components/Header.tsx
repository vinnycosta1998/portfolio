import Link from "next/link";

interface HeaderProps{
    handleClick: (option: number) => void
}

export function Header({ handleClick } : HeaderProps){
    return(
        <div className="w-full min-h-8 mt-16 flex items-center justify-center gap-4 text-white">
            <Link href="/" className="text-xl font-bold xlg:text-xl lg:text-lg md:text-md sm:text-sm xsm:text-sm">Inicio</Link>
            <button onClick={() => handleClick(1)} className=" text-xl font-bold hover:text-pink  xlg:text-xl lg:text-lg md:text-md sm:text-sm xsm:text-sm">Sobre Mim</button>
            <button onClick={() => handleClick(2)} className=" text-xl font-bold hover:text-pink  xlg:text-xl lg:text-lg md:text-md sm:text-sm xsm:text-sm">Experiencia</button>
            <button onClick={() => handleClick(3)} className=" text-xl font-bold hover:text-pink  xlg:text-xl lg:text-lg md:text-md sm:text-sm xsm:text-sm">Meus Projetos</button>
            <button onClick={() => handleClick(4)} className=" text-xl font-bold hover:text-pink  xlg:text-xl lg:text-lg md:text-md sm:text-sm xsm:text-sm">Contato</button>
        </div>
    )
}