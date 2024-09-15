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
import { api } from "./lib/axios";

import { toast } from 'sonner'
import { MeCard } from "@/components/MeCard";
import { motion } from "framer-motion";

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
 
export type FormSchemaData = z.infer<typeof formSchema>

export default function Home() {
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
        contactRef.current?.scrollIntoView({ behavior: "smooth" })
    }
  }

  async function handleSendEmail(data:FormSchemaData){
    if(!data.name|| !data.subject|| !data.name){
      toast.warning("Preencha com as informacoes abaixo")
    }
    try{
      const response = await api.post('/', {
        name: data.name,
        subject: data.subject,
        email: data.email
      })
      toast.success("E-mail enviado com sucesso")
    }catch(err){
      toast.error("Erro ao enviar e-mail")
    }
  }


  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Header
        handleClick={handleClick}
      />
      <motion.div className="mt-12"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001
          }
        }} 
      >
        <Avatar/>
      </motion.div>

      <div className="mt-12 flex flex-col items-center justify-center">
        <h1 className={`text-6xl text-yellow ${greatVibes.className} xlg:text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl`}>Vinicius Costa de Almeida</h1>
        <span className={`${poppins.className} text-pink`}>Full Stack Developer</span>
      </div>
      
      <div className="w-[50rem] flex flex-start px-2 mt-12 xlg:flex-start lg:flex-start md:items-center">
        <h1 className="font-bold text-2xl text-blue_twitter my-2">Sobre Mim</h1>
      </div>

      <div className="w-[50rem] mt-2 flex flex-col items-center" ref={meRef}>
        <MeCard
          description="Apaixonado por tecnologia tenho como principal objetivo resolver problemas e agregar valor através da programaçao"
        />
      </div>

      <div className="w-[50rem] flex flex-start px-2 mt-12 md:items-center">
        <h1 className="font-bold text-2xl text-yellow my-2">Experiencia</h1>
      </div>

      <div className="w-[50rem] mt-2 flex flex-col items-center" ref={experienceRef}>
        <ExperienceCard
            load="Mobilize Financial Services"
            period="03/04/2023 01/11/2023"
            description="Estagiario em controle de gestao responsavel por auxiliar na consolidacao e fechamento da base de dados financeira, utilizando ferramentas de BI como Excel, SAP e SAS"
        />
      </div>

      <div className="w-[50rem] flex flex-start px-2 mt-12 md:items-center">
        <h1 className="font-bold text-2xl text-pink my-2">Tecnologias</h1>
      </div>
      
      <div className="w-[50rem] mt-2 flex flex-col items-center">
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-4 gap-18 md:grid-cols-4 md:gap-6 sm:grid-cols-3 sm:gap-6 xsm:grid-cols-1 xs">
            {
              techs.map((tech) => {
                return(
                  <TechCard
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

      <div className="w-[50rem] flex flex-start px-2 mt-12 md:items-center">
        <h1 className="font-bold text-2xl text-purple my-2">Meus projetos</h1>
      </div>

      <div className="w-[50rem] mt-2 flex flex-col items-center" ref={projectRef}>
        <div className="flex flex-col gap-4">
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

      <div className="w-[50rem] flex flex-start px-2 mt-12 md:items-center">
        <h1 className="font-bold text-2xl text-yellow my-2">Entre em contato comigo</h1>
      </div>
        
      <form className="w-[50rem] mt-2 flex flex-col items-center gap-8" ref={contactRef} onSubmit={handleSubmit(handleSendEmail)}>
        <input 
          type="text"
          placeholder="Digite o seu nome"
          className="w-full h-10 border-[1px] bg-transparent backdrop-blur-xl border-zinc-700  text-white rounded-lg outline-none px-2 xlg:w-full lg:w-full md:w-full sm:w-[500px] xsm:w-[400px]"
          {...register('name')}
        />
        <input  
          type="text"
          placeholder="Digite o assunto"
          className="w-full h-10 border-[1px] bg-transparent backdrop-blur-xl text-white border-zinc-700  rounded-lg outline-none px-2 xlg:w-full lg:w-full md:w-full sm:w-[500px] xsm:w-[400px]"
          {...register('subject')}
        />
        <textarea 
          id=""
          rows={10}
          placeholder="Digite o email"
          className="w-full border-[1px]  bg-transparent backdrop-blur-xl border-zinc-700 text-white  rounded-lg outline-none px-2 py-2 xlg:w-full lg:w-full md:w-full sm:w-[500px] xsm:w-[400px] "
          {...register('email')}
        >
        </textarea>
        <button 
          className="w-full h-12 bg-pink font-bold text-yellow text-xl outline-none rounded-lg mb-16 hover:scale-105 cursor-pointer transition-all xlg:w-full lg:w-full md:w-full sm:w-[500px] xsm:w-[400px]"
          type="submit"
        >
          Enviar email
        </button>
      </form>
    </div>
  );
}
