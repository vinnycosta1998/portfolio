export const matchProjectbyId = (id: string) => {
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
                title: 'Manager Store',
                description: 'Interface grafica construida com Python que cadastra clientes de uma loja e prove dashboards para visualizacao dos dados',
                techsUtilized: 'Python | CustomTkinter | Sqlite',
                linkRepo: 'https://github.com/vinnycosta1998/manager-store',
                projectImages: [
                    'https://raw.githubusercontent.com/vinnycosta9898/manager-store/master/.github/photo1.png',
                ],
            }
    }
}