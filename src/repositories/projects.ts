interface ProjectsProps {
    id: string
    title: string
    description: string
    techsUtilized: string
  }
  ;[]
  
  export const projects: ProjectsProps[] = [
    {
      id: '1',
      title: 'React Movies',
      description:
        'Aplicacão frontend que exibe informações de filmes que estão em cartaz no cinema',
      techsUtilized:
        'NextJS | Axios | React Hook Form | Zod | TailwindCSS | Typescript',
    },
]