var operacao = '';
var isInputNumero1 = true;
var numero1 = '';
var numero2 = '';

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
    numero1 = Number(this.numero1);
    numero2 = Number(this.numero2);

    if (validarSeAsEntradasSaoVazias(numero1, numero2)) {
        let resultado;
        if (this.operacao == "+") {
            resultado = somarDoisNumeros(numero1, numero2);
        } else if (this.operacao == "-") {
            resultado = subtrairDoisNumeros(numero1, numero2);
        } else if (this.operacao == "*") {
            resultado = multiplicarDoisNumeros(numero1, numero2);
        } else if (this.operacao == "/") {
            resultado = dividirDoisNumeros(numero1, numero2);
        }

        setInputResultado(resultado);
        estadoInicialPropriedades();
    } else {
        alert('Digite os dois números');
    }
}

function setInputResultado(valor) {
    document.getElementById('resultado').value = valor;
}

function validarSeAsEntradasSaoVazias(numero1, numero2) {
    return !((numero1 == '') || (numero2 == ''));
}

function estadoInicialPropriedades() {
    this.operacao = '';
    this.isInputNumero1 = true;
    this.numero1 = '';
    this.numero2 = '';
}

function clickNumero(valor) {
    setValor(valor);
}

function clickDecimal() {
    let valorValidar = '';
    if (this.isInputNumero1) {
        valorValidar = this.numero1;
    } else {
        valorValidar = this.numero2;
    }

    if (valorValidar.indexOf('.') < 0) {
        setValor(".");
    }
}

function setValor(valor) {
    if (this.isInputNumero1) {
        this.numero1 = this.numero1 + valor;
        setInputResultado(this.numero1);
    } else {
        this.numero2 = this.numero2 + valor;
        setInputResultado(this.numero2);
    }
}

function clickOperacao(paramOperacao) {
    this.operacao = paramOperacao;
    this.isInputNumero1 = false;
}

function limparCalculadora() {
    estadoInicialPropriedades();
    setInputResultado('');
}