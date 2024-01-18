const input = document.querySelector('.input')
const btn = document.querySelector('.btn')


async function buscarJSON() {
    const resposta = await fetch('js/cpf.json')
    const json = await resposta.json()
    console.table(json)
  }
  
buscarJSON()

clicarEnter()

function clicarEnter() {
    input.addEventListener('keyup', event => {
        if (event.keyCode === 13) {
            event.preventDefault()
            btn.click()
        }
    })
}

btn.addEventListener('click', () => {
    if (input.length == 11) {
        buscarCPF()// Colocar a função de busca aqui
    } else {
       // window.alert('Digite um CPF válido.')
    }
})

function buscarCPF(dados) {
    pesquisa.innerHTML = ''
    dados.forEach(documentos => {
        pesquisa.innerHTML += `
        <div>
            <p>O ${documentos.cpf} digitado corresponde à ${documentos.nome}.</p>
        </div>
        `
        console.log(funcionou)
    })
}