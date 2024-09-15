import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ArrowRight } from "lucide-react";

interface ButtonProps{
    moviment: 'left' | 'right'
    page: number
}

export function Button({ page, moviment } : ButtonProps){

    const [futurePage, setFuturePage] = useState<Number>(page)
   
    function handlePlusOrMinusPage(page: number){
        if(moviment === "left" && page === 1){
            setFuturePage(1)
        }else if(moviment === "left" && page > 1){
            setFuturePage(page - 1)
        }else if(moviment === "right" && page >= 1){
            setFuturePage(page + 1)
        }else if(moviment === "right" && page === 2){
            setFuturePage(2)
        }
    }
    
    return(
        <Link 
            href={`/project/${futurePage}`} 
            className={`w-[10rem] h-screen absolute ${moviment === 'left' ? "left-0" : "right-0"} top-0 rounded-md bg-transparent backdrop-blur-xl flex items-center justify-center`} 
            onClick={() => handlePlusOrMinusPage}
        >
            {
                moviment === 'left' ? 
                <button onClick={() => handlePlusOrMinusPage(page)}>
                    <ArrowLeft size={30} className="text-zinc-500"/> 
                </button>
                :
                <button onClick={() => handlePlusOrMinusPage(page)}>
                    <ArrowRight size={30} className="text-zinc-500"/>
                </button>
                }
        </Link>
    )
}