/* eslint-disable react/react-in-jsx-scope */
"use client"
import { useState } from "react"
import { matchProjectbyId } from "@/utils/matchProjectById"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/Button"


export default function Project({ params } : {params : {id: string}}){
    const [leftIsHover, setLeftIsHover] = useState(false)
    const [rightIsHover, setRightIsHover] = useState(false)
    
    const project = matchProjectbyId(params.id)

    function handleLeftIsHover(){
        setLeftIsHover(true)
        setRightIsHover(false)
    }

    function handleRightIsHover(){
        setRightIsHover(true)
        setLeftIsHover(false)
    }

    function handleNotIsHover(){
        setLeftIsHover(false)
        setRightIsHover(false)
    }

    if(!project){
        return null
    }

    return(
        <div className="min-w-screen min-h-screen bg-blue flex flex-col items-center">
            <header className="w-full mt-12 flex flex-col items-center">
            <h1 className="font-bold text-white text-4xl">{project?.title}</h1>
            <div 
                className="w-[15rem] h-full absolute top-0 left-0" 
                onMouseEnter={handleLeftIsHover} 
                onMouseLeave={handleNotIsHover} 
            >
                {leftIsHover ? <Button page={Number(params.id)} moviment="left"/> : null}  
            </div>
            
            <div 
                className="w-[15rem] h-full absolute top-0 right-0" 
                onMouseEnter={handleRightIsHover} 
                onMouseLeave={handleNotIsHover} 
            >
                {rightIsHover ? <Button page={Number(params.id)} moviment="right"/> : null}  
            </div>
            
            <Link
                className="text-pink"
                href={project.linkRepo}
                target="_blank"
            >
                Visitar repositório
            </Link>
            </header>

            <main className="w-full h-full flex flex-col items-center justify-center mt-12">
                <div className="w-[50rem] min-h-16 mt-12 px-2 mb-12 bg-transparent backdrop-blur-xl rounded-lg flex justify-center items-center xlg:w-[50rem] lg:w-[40rem] md:w-[40rem] sm:w-[30rem] xsm:w-[20rem]" >
                    <span className="text-white">{project?.description}</span>
                </div>
                
                <span className="text-yellow mb-6">Tecnologias utilizadas:{' '}
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
                                width={800}
                                height={800}
                                quality={100}
                                priority
                                key={project.id}
                            />
                        )
                    })
                }
            </main>
        </div>
    )
}