import { Avatar } from "@/components/Avatar";
import { ProjectCard } from "@/components/ProjectCard";
import { TechCard } from "@/components/TechCard";
import { projects } from "@/repositories/projects";
import { techs } from "@/repositories/techs";

import { Great_Vibes, Poppins } from "next/font/google"

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"]
})

const poppins = Poppins({
  weight: "400",
  subsets:["latin"]
})

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="mt-12">
        <Avatar/>
      </div>

      <div className="mt-12 flex flex-col items-center justify-center">
        <h1 className={`text-5xl text-yellow ${greatVibes.className}`}>Vinicius Costa de Almeida</h1>
        <span className={`${poppins.className} text-pink`}>Full Stack Developer</span>
      </div>

      <section className="w-[40rem] mt-12">
      <h1 className="font-bold text-2xl text-yellow my-2">Sobre Mim</h1>
        <p className="text-white">
          Apaixonado por tecnologia, tenho como principal objetivo solucionar problemas atraves de programacao e gerar impacto na vida das pessoas.
        </p>
      </section>

      <section className="w-[40rem] mt-12">
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
      </section>

      <section className="w-[40rem] mt-12">
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
      </section>

      <section className="w-[40rem] mt-12 flex flex-col gap-8">
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
      </section>
    </div>
  );
}
