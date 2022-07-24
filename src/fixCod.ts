let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let saldoTotal = 0

limparSaldo()


function somarAoSaldo(soma: number) {
    if(campoSaldo){
        saldoTotal += soma
        campoSaldo.innerHTML += saldoTotal.toString();
        limparCampoSoma();
    }

}

function limparCampoSoma(){
    if(soma){
        soma.value = "";
    }
}

function limparSaldo() {
    if(campoSaldo){
        saldoTotal = 0;
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}

botaoAtualizar?.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});

botaoLimpar?.addEventListener('click', function () {
    limparSaldo();
});