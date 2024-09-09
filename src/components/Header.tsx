/* eslint-disable react/react-in-jsx-scope */
import Link from "next/link";

interface HeaderProps{
    handleClick: (option: number) => void
}

export function Header({ handleClick } : HeaderProps){
    return(
        <div className="w-full min-h-8 mt-16 flex items-center justify-center gap-8 text-white">
            <Link href="/">Inicio</Link>
            <button onClick={() => handleClick(1)}>Sobre Mim</button>
            <button onClick={() => handleClick(2)}>Experiencia</button>
            <button onClick={() => handleClick(3)}>Meus Projetos</button>
            <button onClick={() => handleClick(4)}>Contato</button>
        </div>
    )
}