var isInputNumero1 = true;
var calculoAtual = { primeiroNumero: "", segundoNumero: "", operacao: "" };
var historico = [];

function somarDoisNumeros(numero1, numero2) {
    return numero1 + numero2;
}

function subtrairDoisNumeros(numero1, numero2) {
    return numero1 - numero2;
}

function multiplicarDoisNumeros(numero1, numero2) {
    return numero1 * numero2;
}

function dividirDoisNumeros(numero1, numero2) {
    if (numero2 != 0) {
        return numero1 / numero2;
    } else {
        return 'Não é possível divisão por zero.';
    }
}

function calcular() {
    let numero1, numero2;
    numero1 = Number(this.calculoAtual.primeiroNumero);
    numero2 = Number(this.calculoAtual.segundoNumero);

    if (validarSeAsEntradasSaoVazias(numero1, numero2)) {
        let resultado;
        if (this.calculoAtual.operacao == "+") {
            resultado = somarDoisNumeros(numero1, numero2);
        } else if (this.calculoAtual.operacao == "-") {
            resultado = subtrairDoisNumeros(numero1, numero2);
        } else if (this.calculoAtual.operacao == "*") {
            resultado = multiplicarDoisNumeros(numero1, numero2);
        } else if (this.calculoAtual.operacao == "/") {
            resultado = dividirDoisNumeros(numero1, numero2);
        }

        setResultado(resultado);
        setCalculoAtual();
        salvarHistorico();
        estadoInicialPropriedades();
    } else {
        alert('Digite os dois números');
    }
}

function salvarHistorico() {
    this.historico.push(this.calculoAtual);
}

function setResultado(valor) {
    document.getElementById('divResultado').innerHTML = valor;
}

function setCalculoAtual() {
    let valor = this.calculoAtual.primeiroNumero + ' ' + this.calculoAtual.operacao + ' ' + this.calculoAtual.segundoNumero + ' =';
    document.getElementById('divCalculoAtual').innerHTML = valor;
}

function validarSeAsEntradasSaoVazias(numero1, numero2) {
    return !((numero1 == '') || (numero2 == ''));
}

function estadoInicialPropriedades() {
    this.isInputNumero1 = true;
    this.calculoAtual = { primeiroNumero: "", segundoNumero: "", operacao: "" };
}

function clickNumero(valor) {
    setValor(valor);
}

function clickDecimal() {
    let valorValidar = '';
    if (this.isInputNumero1) {
        valorValidar = this.calculoAtual.primeiroNumero;
    } else {
        valorValidar = this.calculoAtual.segundoNumero;
    }

    if (valorValidar.indexOf('.') < 0) {
        setValor(".");
    }
}

function setValor(valor) {
    if (this.isInputNumero1) {
        this.calculoAtual.primeiroNumero = this.calculoAtual.primeiroNumero + valor;
        setResultado(this.calculoAtual.primeiroNumero);
    } else {
        this.calculoAtual.segundoNumero = this.calculoAtual.segundoNumero + valor;
        setResultado(this.calculoAtual.segundoNumero);
    }
}

function clickOperacao(paramOperacao) {
    this.calculoAtual.operacao = paramOperacao;
    this.isInputNumero1 = false;
    setCalculoAtual();
}

function limparCalculadora() {
    estadoInicialPropriedades();
    setResultado('');
    document.getElementById('divCalculoAtual').innerHTML = '';
}