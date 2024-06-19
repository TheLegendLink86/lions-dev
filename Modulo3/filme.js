
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout    
}) 

let filme= []
exibirMenu()

function exibirMenu() {
    console.log (`
    Menu:
    1. Cadastrar filme
    2. Listar filme
    3. Editar o filme
    4. Remover o filme
    5. Sair
    `)

    rl.question('Escolha uma opção:', (opcao) => {
        switch (opcao) {
            case '1':
             cadastrarFilme()
             break
            case '2':
             listarFilme()
             break
            case '3':
             editarFilme()
             break
            case '4':
             removerFilme()
             break
            case '5':
                rl.close()
                break
            case 'murilo':
                console.log('pare caraaa')
                exibirMenu()
                break
            default:
                console.log('Opção inválida, tente novamente.')
                exibirMenu()
                break           
        
        }
    })
}

function cadastrarFilme() {
    rl.question('Digite o nome do filme: ', (nome) => {
        rl.question('Digite a produtora do filme:', (produtora) => {
            rl.question('Digite a bilheteria arrecadada do filme:', (bilheteria) => {
                filme.push({nome:nome, produtora:produtora, bilheteria:bilheteria})
                console.log('filme cadastrado com sucesso')
                exibirMenu()

             })     

        })

    })

}    

function listarFilme() {
    if(filme == ''){
    console.log('nenhum filme cadastrado')
    exibirMenu()
    }else{
        console.log(filme)    
        exibirMenu()
    }
}

function editarFilme() {
    if (filme == 0) {
        console.log('Nenhum filme cadastrado')
        exibirMenu()    
    }else{
        for (let i = 0; i < filme.length; i++){
            console.log(`${i+1}: `, filme)
        }
        rl.question(`Qual filme voce deseja editar`, (numero)=>{
            rl.question(`Digite o nome do filme`, (nome)=>{
                rl.question(`Digite o nome da produtora`, (produtora)=>{
                    rl.question(`Digite a bilheteria do filme`, (bilheteria)=>{
                        filme = ({
                            nome: nome,
                            produtora: produtora,
                            bilheteria: bilheteria
                        })
                        console.log(`Filme editado com sucesso`)
                        exibirMenu()
                    })
                })
            })
        })
    }
     
}
function removerFilme(){
    for (let i = 0; i < filme.length; i++){
        console.log(`${i+1}: `, filme)
    }
    rl.question('Deseja remover o filme: ', (numero) => {
        filme.splice(numero - 1, 1)
    })
    console.log('Removido com sucesso!')
    exibirMenu()
}
    

                                                                                                     
