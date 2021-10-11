//A função pega os elementos nas Ids "visor" e "parcial" e atribui um valor vazio
function limpaTela() {
  document.getElementById("visor").innerHTML = "";
  document.getElementById("parcial").innerHTML = "";
}

function backspace() {
  var numero = document.getElementById("visor").innerHTML;
  var novoNumero = parseFloat(numero.slice(0, -1));
  console.log(novoNumero)
  visor.innerHTML = novoNumero;
}

function divide() {
  var numero = document.getElementById("visor").innerHTML;
  var dividendo = parseFloat(numero.slice(0, -3));
  visor.innerHTML = "";
  parcial.innerHTML = dividendo + " ÷ ";
}

function multiplica() {
  var numero = document.getElementById("visor").innerHTML;
  var fatorUm = parseFloat(numero.slice(0, -3));
  visor.innerHTML = "";
  parcial.innerHTML = fatorUm + " x ";
}

function soma() {
  var numero = document.getElementById("visor").innerHTML;
  var primeiroNumero = parseFloat(numero.slice(0, -3));
  visor.innerHTML = "";
  parcial.innerHTML = primeiroNumero + " + ";
}

function subtrai() {
  var numero = document.getElementById("visor").innerHTML;
  var primeiroNumero = parseFloat(numero.slice(0, -3));
  visor.innerHTML = "";
  parcial.innerHTML = primeiroNumero + " - ";
}

function mostraResultado() {
  var operador = document.getElementById("parcial").innerHTML;
  if (operador.includes(" ÷ ") == true) {
    var dividendo = parseFloat(operador.slice(0, -3));
    var divisor = parseFloat(document.getElementById("visor").innerHTML);
    var operacao = dividendo / divisor;
    visor.innerHTML = operacao;
    parcial.innerHTML = dividendo + " ÷ " + divisor + " = ";
  } else if (operador.includes(" x ") == true) {
    var fatorUm = parseFloat(operador.slice(0, -3));
    var fatorDois = parseFloat(document.getElementById("visor").innerHTML);
    var operacao = fatorUm * fatorDois;
    visor.innerHTML = operacao;
    parcial.innerHTML = fatorUm + " x " + fatorDois + " = ";
  } else if (operador.includes(" + ") == true) {
    var primeiroNumero = parseFloat(operador.slice(0, -3));
    var segundoNumero = parseFloat(document.getElementById("visor").innerHTML);
    var operacao = primeiroNumero + segundoNumero;
    visor.innerHTML = operacao;
    parcial.innerHTML = primeiroNumero + " + " + segundoNumero + " = ";
  } else if (operador.includes(" - ") == true) {
    var primeiroNumero = parseFloat(operador.slice(0, -3));
    var segundoNumero = parseFloat(document.getElementById("visor").innerHTML);
    var operacao = primeiroNumero - segundoNumero;
    visor.innerHTML = operacao;
    parcial.innerHTML = primeiroNumero + " - " + segundoNumero + " = ";
  }
}