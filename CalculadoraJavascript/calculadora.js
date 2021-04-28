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

function calcular(operacao) {
    let numero1, numero2;
    numero1 = Number(document.getElementById('numero1').value);
    numero2 = Number(document.getElementById('numero2').value);

    if (validarSeAsEntradasSaoVazias(numero1, numero2)) {
        let resultado;
        if (operacao == "+") {
            resultado = somarDoisNumeros(numero1, numero2);
        } else if (operacao == "-") {
            resultado = subtrairDoisNumeros(numero1, numero2);
        } else if (operacao == "*") {
            resultado = multiplicarDoisNumeros(numero1, numero2);
        } else if (operacao == "/") {
            resultado = dividirDoisNumeros(numero1, numero2);
        }

        document.getElementById('resultado').value = resultado;
        limparCampos();
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
    document.getElementById('numero1').focus();
}

function clickNumero(valor) {
    setValor(valor);
}

function clickDecimal() {
    if (document.getElementById('numero1').value.indexOf('.') < 0) {
        setValor(".");
    }
}

function setValor(valor) {
    let valorAtual = document.getElementById('numero1').value;
    document.getElementById('numero1').value = valorAtual + valor;
}