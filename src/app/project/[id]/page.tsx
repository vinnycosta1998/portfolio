/* eslint-disable react/react-in-jsx-scope */
"use client"

import { matchProjectbyId } from "@/utils/matchProjectById"
import Link from "next/link"
import Image from "next/image"


export default function Project({ params } : {params : {id: string}}){
    
    const project = matchProjectbyId(params.id)

    return(
        <div className="min-w-screen min-h-screen bg-blue flex flex-col items-center">
            <header className="mt-12 flex flex-col items-center">
                <h1 className="font-bold text-white text-4xl">{project?.title}</h1>
                <Link
                    className="text-pink"
                    href={project!.linkRepo}
                >
                    Visitar repositório
                </Link>
            </header>

            <main className="w-full h-full flex flex-col items-center mt-12">
                <div className="w-[50rem] min-h-12 mt-12 bg-transparent backdrop-blur-xl rounded-lg" >
                    <span className="text-white">{project?.description}</span>
                </div>
                
                <span className="text-yellow mb-12">Tecnologias utilizadas
                    <span className="text-purple text-center">
                        { project?.techsUtilized}
                    </span>
                </span>
                {
                    project?.projectImages.map((projectImage) => {
                        return(
                            <Image
                                src={projectImage}
                                alt="Imagem do projeto"
                                width={900}
                                height={900}
                                quality={100}
                                priority
                                key={projectImage}
                            />
                        )
                    })
                }
            </main>
        </div>
    )
}