var operacao = '';
var auxInputClick = 'numero1';

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
    numero1 = Number(document.getElementById('numero1').value);
    numero2 = Number(document.getElementById('numero2').value);

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

        document.getElementById('resultado').value = resultado;
        estadoInicial();
    } else {
        alert('Digite os dois números');
    }
}

function validarNumero(inputText) {
    let valorConvertido = Number(inputText.value);
    if (isNaN(valorConvertido)) {
        alert('Digite um número válido.');
        inputText.value = "";
        inputText.focus();
    }
}

function validarSeAsEntradasSaoVazias(numero1, numero2) {
    return !((numero1 == '') || (numero2 == ''));
}

function limparCampos() {
    document.getElementById('numero1').value = "";
    document.getElementById('numero2').value = "";
}

function estadoInicial() {
    limparCampos();
    document.getElementById('numero1').focus();
    this.operacao = '';
    this.auxInputClick = 'numero1';
}

function clickNumero(valor) {
    setValor(valor);
}

function clickDecimal() {
    if (document.getElementById(this.auxInputClick).value.indexOf('.') < 0) {
        setValor(".");
    }
}

function setValor(valor) {
    let valorAtual = document.getElementById(this.auxInputClick).value;
    document.getElementById(this.auxInputClick).value = valorAtual + valor;
}

function clickOperacao(paramOperacao) {
    this.operacao = paramOperacao;
    this.auxInputClick = 'numero2';
}