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

function salvarHistorico() {
    this.historico.push(this.calculoAtual);
}

function setResultado(valor) {
    document.getElementById('divResultado').innerHTML = valor;
}

function setCalculoAtual(objCalculo) {
    let valor = objCalculo.primeiroNumero + ' ' + objCalculo.operacao + ' ' + objCalculo.segundoNumero + ' =';
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
    setCalculoAtual(this.calculoAtual);
}

function limparCalculadora() {
    estadoInicialPropriedades();
    setResultado('');
    document.getElementById('divCalculoAtual').innerHTML = '';
}

function clickCalcular() {
    let resultado = calcular(this.calculoAtual);
    if (resultado == '') return;

    setResultado(resultado);
    setCalculoAtual(this.calculoAtual);
    salvarHistorico();
    exibirHistorico();
    estadoInicialPropriedades();
}

function exibirHistorico() {
    let html = '';
    for (var iHistorico = 0; iHistorico < this.historico.length; iHistorico++) {
        let calculo = this.historico[iHistorico];
        let valorOperacao = calculo.primeiroNumero + ' ' + calculo.operacao + ' ' + calculo.segundoNumero + ' = ';
        let jsonCalculo = JSON.stringify(calculo);
        html = html +
            "<div onclick='refazerCalculoPeloHistorico(" + jsonCalculo + ")'>" + valorOperacao + calcular(calculo) + "</div>";
    }
    document.getElementById("divHistorico").innerHTML = html;
}

function refazerCalculoPeloHistorico(jsonCalculo) {
    let resultado = calcular(jsonCalculo);
    setResultado(resultado);
    setCalculoAtual(jsonCalculo);
    estadoInicialPropriedades();
}

function calcular(objetoCalculo) {
    let resultado = '';
    let numero1 = Number(objetoCalculo.primeiroNumero);
    let numero2 = Number(objetoCalculo.segundoNumero);
    if (validarSeAsEntradasSaoVazias(numero1, numero2)) {
        if (objetoCalculo.operacao == "+") {
            resultado = somarDoisNumeros(numero1, numero2);
        } else if (objetoCalculo.operacao == "-") {
            resultado = subtrairDoisNumeros(numero1, numero2);
        } else if (objetoCalculo.operacao == "*") {
            resultado = multiplicarDoisNumeros(numero1, numero2);
        } else if (objetoCalculo.operacao == "/") {
            resultado = dividirDoisNumeros(numero1, numero2);
        }
    } else {
        alert('Digite os dois números');
    }
    return resultado;
}

function capturarEntradaPeloTeclado(event) {
    if (isNumero(event.keyCode)) {
        clickNumero(event.key);
    } else if (isOperador(event.keyCode)) {
        clickOperacao(event.key);
    } else if (event.key == '.') {
        clickDecimal();
    } else if (event.keyCode == '13') {
        clickCalcular();
    }
}

function isNumero(keyCode) {
    return ((keyCode >= 96) && (keyCode <= 105));
}

function isOperador(keyCode) {
    return ((keyCode == 106) || (keyCode == 107) || (keyCode == 109) || (keyCode == 111));
}