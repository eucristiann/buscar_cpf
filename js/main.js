const input = document.querySelector('.input')
const btn = document.querySelector('.btn')
const resultado = document.querySelector('.resultado')


async function buscarJSON() {
    try {
        const resposta = await fetch('js/cpf.json')
        const json = await resposta.json()
        console.table(json) // Apenas para testar as buscas
        return json        
    } catch (error) {
        console.error('Erro:', erro.message)
    }
  }
  
buscarJSON()


btn.addEventListener('click', async () => {
    const cpfDigitado = input.value
    const dados = await buscarJSON()
    if (cpfDigitado.length == 11) { // Verifica se o CPF é válido: se tem 11 caracteres
       buscarCPF(dados, cpfDigitado)
    } else {
        window.alert('Digite um CPF válido.')
    }
})


function buscarCPF(dados, cpfDigitado) {
    resultado.innerHTML = '' // Para não adicionar várias pesquisas na tela
    const res = dados.find(item => item.cpf === cpfDigitado) // se o CPF digitado for idêntico ao item do JSON
    if (res) { // se o anterior for TRUE, executa esse
        const cpfFormatado = formatarCPF(res.cpf) // para o CPF ser 000.000.000-00 e não 00000000000
        resultado.innerHTML += `
            <div class="resultado">
                <p>O CPF ${cpfFormatado} pertence à ${res.nome}.</p>
            </div>
        `
        input.value = ''
    } else {
        resultado.innerHTML += `
            <div class="resultado">
                <p>CPF não encontrado.</p>
            </div>
        `
    }
}

function formatarCPF(cpf) { // para o CPF ser 000.000.000-00 e não 00000000000
    return cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4')
}

clicarEnter()

function clicarEnter() {   // Para aceitar ENTER como clique de pesquisa
    input.addEventListener('keyup', event => {
        if (event.keyCode === 13) {
            event.preventDefault()
            btn.click()
        }
    })
}