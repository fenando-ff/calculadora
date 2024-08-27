
function calcular() {

    var n1 = parseFloat(document.getElementById('n1').value);
    var n2 = parseFloat(document.getElementById('n2').value);
    var operacao = document.getElementById('operacao').value;
    var resultado;

    switch (operacao) {
        case "soma":
            resultado = n1 + n2
            break;
        case "mult":
            resultado = n1 * n2
            break;
        case 'sub':
            resultado = n1 - n2;
            break;
        case 'divi':
            if (n2 === 0) {
                document.getElementById("resultado").innerHTML = "Divisão por zero não é permitida";
                return;
            }
            resultado = n1 / n2;
            break;
        default:
            resultado = "inválida";
    }

    document.getElementById('resultado').innerHTML = `O resultado da operação é ${resultado}`
}
