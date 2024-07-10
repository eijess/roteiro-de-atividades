// object {}
const atividade = {
    nome: 'Almoço',
    data: new Date("2024-07-08 10:00"),
    finalizada: true
}

// lista, array, vetor []
const atividades = [
    atividade,
    {
        nome: 'Academia em grupo',
        data: new Date("2024-07-09 12:00"),
        finalizada: false
    },
    {
        nome: 'Gaming session',
        data: new Date("2024-07-09 16:00"),
        finalizada: true
    },
]

// arrow function
const criarItemDeAtividade = (atividade) => {

    let input = '<input type="checkbox" '
    
    if(atividade.finalizada) {
        input = input + 'checked'

    }

    input = input + '>'

    return `
    <div class="checkbox-content">
           ${input}
            <span>${atividade.nome}</span> <!--span mantém um elemento ao lado do outro, se eu quisesse abaixo poderia utilizar uma div, no entanto tudo isso pode ser modificado com o css-->
            <time>${atividade.data}</time>
        </div>
        `
}

const section = document.querySelector('section')

for(let atividade of atividades){ // estrutura de repetição
    section.innerHTML += criarItemDeAtividade(atividade) // += somar o valor anterior e atribuir o novo
}
