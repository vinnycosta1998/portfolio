interface ProjectsProps {
    id: string
    title: string
    description: string
    techsUtilized: string
  }
  
  export const projects: ProjectsProps[] = [
    {
      id: '1',
      title: 'CPF Validator',
      description:
        'Interface Grafica que abre um arquivo Excel percorre uma coluna de CPF e valida se os mesmos são verdadeiros ou falsos',
      techsUtilized:
        'Python | tkinter | openpyxl',
    },
    {
      id: '2',
      title: 'Spotify UI Clone',
      description:
        'Clone da Interface do Spotify',
      techsUtilized:
        'NextJS | TailwindCSS | Typescript',
    },
]