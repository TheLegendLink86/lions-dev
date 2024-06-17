
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let funcionarios = []
exibirMenu()

function exibirMenu() {
    console.log(`
    Menu:
    1. Cadastrar funcionário
    2. Listar todo os funcionarios
    3. Exibir qual o salario maior dos funcionartios
    4. Sair
    `)

    rl.question('Escolha uma opção: ', (opcao) => {
        switch (opcao) {
            case '1':
                cadastrarFuncionario()
                break
            case '2':
                listarFuncionarios()
                break
            case '3':
                maiorRemuneração()
                break
            case '4':
                rl.close()
                break
            default:
                console.log('Opção inválida, tente novamente.')
                exibirMenu()
                break
        }
    })
    
}

function cadastrarFuncionario() {
    rl.question('Digite o nome do funcionário: ', (nome) => {
        rl.question('Digite o cargo do funcionário: ', (cargo) => {
            rl.question('Digite o salário do funcionário: ', (salario) => {
                funcionarios.push({ nome: nome, cargo: cargo, salario: salario })
                console.log('Funcionário cadastrado com sucesso!')
                exibirMenu()
            })
        })
    })
}

function listarFuncionarios() {
    console.log('nenhum funcionario cadastrado')

    for (let i = 0; i < funcionarios.length; i++) {
        console.log(funcionarios[i])
    } exibirMenu()
}

function maiorRemuneração() {
    let maiorSalario = funcionarios[0]
    console.log('nenhum funcionario cadastrado')
    for (let i = 0; i < funcionarios.length; i++) {
        if (funcionarios[i].salario == maiorSalario) {
            maiorSalario = funcionarios[i]
            maiorSalario++
        }
    }
    console.log(maiorSalario)
        exibirMenu()
}