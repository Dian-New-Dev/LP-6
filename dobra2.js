const imagem = document.getElementById('dobra2-slide');
const nomeDoFuncionario = document.getElementById('dobra2-nome');
const cargoDoFuncionario = document.getElementById('dobra2-cargo')

const nome = ['nulo', 'Tânia Vasconcelos', 'Jorge Medeiros', "Lívia Magalhães"]
const cargo = ['nulo', 'Analista Jurídica', 'Agente de Marketing', 'Recursos Humanos']

document.addEventListener('DOMContentLoaded', function() {
    iniciarSlideShow();
});

function iniciarSlideShow() {
    let i = 1;

    function alterarImagem() {
        imagem.src = 'images/dobra2-img' + (i+1) + '.jpg';
        nomeDoFuncionario.textContent = nome[i+1];
        cargoDoFuncionario.textContent = cargo[i+1];
        i++;
        if (i > 2) {
            i = 0; // Resetando para o início
        }
        setTimeout(alterarImagem, 5000); // Chama a função novamente após 1 segundo
    }

    alterarImagem(); // Inicia o slide show
}
