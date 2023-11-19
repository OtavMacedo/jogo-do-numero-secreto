let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    let mensagemNumeroLimite = (`Escolha um número entre 1 e ${numeroLimite}`)
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', mensagemNumeroLimite);
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('chute').setAttribute('disabled', true)
    } else {
        let dica = chute > numeroSecreto ? 'menor' : 'maior';
        let mensagemDica = `O número secreto é ${dica} que ${chute}`;
        exibirTextoNaTela('p', mensagemDica);
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio () {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

   if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
   }

   if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
   } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
   }
}

function limparCampo () {
    campo = document.querySelector('input');
    campo.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.getElementById('chute').removeAttribute('disabled');
}