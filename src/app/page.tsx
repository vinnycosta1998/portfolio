"use client"

import { useRef } from "react";
import { z } from "zod"

import { Avatar } from "@/components/Avatar";
import { ExperienceCard } from "@/components/ExperienceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { TechCard } from "@/components/TechCard";
import { projects } from "@/repositories/projects";
import { techs } from "@/repositories/techs";

import { Great_Vibes, Poppins } from "next/font/google"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Header } from "@/components/Header";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"]
})

const poppins = Poppins({
  weight: "400",
  subsets:["latin"]
})

const formSchema = z.object({
  name: z.string().min(2, "O nome deve conter no minimo 2 caractheres").max(24, "O nome deve conter no maximo 24 caractheres"),
  subject: z.string().min(2, "O assunto deve conter no minimo 2 caractheres").max(24, "O assunto deve conter no maximo 24 caractheres"),
  email: z.string()
})
 
export type FormSchemaData = z.infer<typeof emailSchema>

export default function Home() {
  const scrollRef = useRef(null)
  const meRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const projectRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLFormElement>(null)

  const { register, handleSubmit, formState: { errors }} = useForm<FormSchemaData>({
    resolver: zodResolver(formSchema)
  })

  function handleClick(option: number){
    switch(option){
      case 1:
        meRef.current?.scrollIntoView({ behavior: 'smooth'})
        break
      case 2:
        experienceRef.current?.scrollIntoView({ behavior: 'smooth' })
        break
      case 3:
        projectRef.current?.scrollIntoView({ behavior: 'smooth' })
        break
      case 4:
        contactRef.current?.scroollIntoView({ behavior: "smooth" })
    }
  }


  return (
    <div className="w-full h-full flex flex-col items-center">
      <Header
        handleClick={handleClick}
      />
      <div className="mt-12">
        <Avatar/>
      </div>

      <div className="mt-12 flex flex-col items-center justify-center">
        <h1 className={`text-5xl text-yellow ${greatVibes.className}`}>Vinicius Costa de Almeida</h1>
        <span className={`${poppins.className} text-pink`}>Full Stack Developer</span>
      </div>

      <div className="w-[40rem] mt-12" ref={meRef}>
      <h1 className="font-bold text-2xl text-yellow my-2">Sobre Mim</h1>
        <p className="text-white">
          Apaixonado por tecnologia, tenho como principal objetivo solucionar problemas atraves de programacao e gerar impacto na vida das pessoas.
        </p>
      </div>

      <div className="w-[40rem] mt-12" ref={experienceRef}>
        <h1 className="font-bold text-2xl text-yellow my-2">Experiencia</h1>
        <ExperienceCard
            load="Mobilize Financial Services"
            period="03/04/2023 01/11/2023"
            description="Estagiario em controle de gestao responsavel por auxiliar na consolidacao e fechamento da base de dados financeira, utilizando ferramentas de BI como Excel, SAP e SAS"
        />
      </div>

      <div className="w-[40rem] mt-12">
        <h1 className="font-bold text-2xl text-pink my-2">Tecnologias</h1>
        <div>
          <div className="grid grid-cols-4 gap-12">
            {
              techs.map((tech) => {
                return(
                  <TechCard
                    id={tech.id}
                    title={tech.title}
                    logo={tech.logo}
                    key={tech.id}
                  />
                )
              })
            }
          </div>
        </div>
      </div>

      <div className="w-[40rem] mt-12" ref={projectRef}>
        <h1 className="font-bold text-2xl text-purple my-2">Meus projetos</h1>
        <div className="flex flex-col">
          {
            projects.map((project) => {
              return(
                <ProjectCard
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  techsUtilized={project.techsUtilized}
                  key={project.id}
                />
              )
            })
          }
        </div>
      </div>

      <form className="w-[40rem] mt-12 flex flex-col gap-8" ref={contactRef}>
        <h1 className="font-bold text-2xl text-yellow my-2">Entre em contato comigo</h1>
        <input 
          type="text"
          placeholder="Digite o seu nome"
          className="w-full h-10 border-[1px] border-x-neutral-400   rounded-lg outline-none text-white px-2"
        />
        <input  
          type="text"
          placeholder="Digite o assunto"
          className="w-full h-10 border-[1px] border-x-neutral-400   rounded-lg outline-none text-white px-2"
        />
        <textarea 
          name="" 
          id=""
          rows={10}
          placeholder="Digite o email"
          className="w-full border-[1px] border-x-neutral-400   rounded-lg outline-none text-white px-2"
        >
        </textarea>
        <button className="w-full h-8 bg-pink text-yellow outline-none rounded-lg">Enviar email</button>
      </form>
    </div>
  );
}
