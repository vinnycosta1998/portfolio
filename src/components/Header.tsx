import Link from "next/link";

export function Header(){
    return(
        <header className="w-full min-h-8 flex items-center justify-center gap-8 text-white">
            <Link href="#">Inicio</Link>
            <Link href="#">Sobre Mim</Link>
            <Link href="#">Meus Projetos</Link>
            <Link href="#">Contato</Link>
        </header>
    )
}