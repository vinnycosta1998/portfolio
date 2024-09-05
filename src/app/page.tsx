import { Avatar } from "@/components/Avatar";
import { TechCard } from "@/components/TechCard";
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

      <section className="max-w-2xl mt-12">
      <h1 className="font-bold text-2xl text-yellow">Sobre Mim</h1>
        <p className="text-white">
          Apaixonado por tecnologia, tenho como principal objetivo solucionar problemas atraves de programacao e gerar impacto na vida das pessoas.
        </p>
      </section>

      <section className="max-w-2xl mt-12">
        <h1 className="font-bold text-2xl text-pink">Tecnologias</h1>
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
    </div>
  );
}
