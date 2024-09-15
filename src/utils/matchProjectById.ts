import projectImg from '../assets/spotify-ui-clone.png'

export const matchProjectbyId  = (id: string) => {
    switch(id){
        case '1':
            return {
                id: '1',
                title: 'CPF validator',
                description: 'Interface Grafica que abre um arquivo Excel percorre uma coluna de CPF e valida se os mesmos são verdadeiros ou falsos',
                techsUtilized: 'Python | tkinter',
                linkRepo: 'https://github.com/vinnycosta1998/cpf-validator',
                projectImages: [
                    'https://github.com/vinnycosta1998/cpf_validator/blob/main/.github/photo1.png?raw=true'
                ]
        }
        case '2':
            return{
                id: '2',
                title: 'Spotify Clone UI',
                description: 'Clone da interface do Spotify',
                techsUtilized: 'NextJS | TailwindCSS | Typescript',
                linkRepo: 'https://github.com/vinnycosta1998/spotify-ui-clone',
                projectImages: [
                    projectImg,
                ],
            }
    }
}