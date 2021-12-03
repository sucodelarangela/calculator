//A função pega os elementos nas Ids "visor" e "parcial" e atribui um valor vazio
function limpaTela() {
  document.getElementById("visor").innerHTML = "";
  document.getElementById("parcial").innerHTML = "";
}

function backspace() {
  let numero = document.getElementById("visor").innerHTML;
  let novoNumero = parseFloat(numero.slice(0, -1));
  console.log(novoNumero)
  visor.innerHTML = novoNumero;
}

function divide() {
  let numero = document.getElementById("visor").innerHTML;
  let dividendo = parseFloat(numero.slice(0, -3));
  visor.innerHTML = "";
  parcial.innerHTML = dividendo + " ÷ ";
}

function multiplica() {
  let numero = document.getElementById("visor").innerHTML;
  let fatorUm = parseFloat(numero.slice(0, -3));
  visor.innerHTML = "";
  parcial.innerHTML = fatorUm + " x ";
}

function soma() {
  let numero = document.getElementById("visor").innerHTML;
  let primeiroNumero = parseFloat(numero.slice(0, -3));
  visor.innerHTML = "";
  parcial.innerHTML = primeiroNumero + " + ";
}

function subtrai() {
  let numero = document.getElementById("visor").innerHTML;
  let primeiroNumero = parseFloat(numero.slice(0, -3));
  visor.innerHTML = "";
  parcial.innerHTML = primeiroNumero + " - ";
}

function mostraResultado() {
  let operador = document.getElementById("parcial").innerHTML;
  if (operador.includes(" ÷ ") == true) {
    let dividendo = parseFloat(operador.slice(0, -3));
    let divisor = parseFloat(document.getElementById("visor").innerHTML);
    let operacao = dividendo / divisor;
    visor.innerHTML = operacao;
    parcial.innerHTML = dividendo + " ÷ " + divisor + " = ";
  } else if (operador.includes(" x ") == true) {
    let fatorUm = parseFloat(operador.slice(0, -3));
    let fatorDois = parseFloat(document.getElementById("visor").innerHTML);
    let operacao = fatorUm * fatorDois;
    visor.innerHTML = operacao;
    parcial.innerHTML = fatorUm + " x " + fatorDois + " = ";
  } else if (operador.includes(" + ") == true) {
    let primeiroNumero = parseFloat(operador.slice(0, -3));
    let segundoNumero = parseFloat(document.getElementById("visor").innerHTML);
    let operacao = primeiroNumero + segundoNumero;
    visor.innerHTML = operacao;
    parcial.innerHTML = primeiroNumero + " + " + segundoNumero + " = ";
  } else if (operador.includes(" - ") == true) {
    let primeiroNumero = parseFloat(operador.slice(0, -3));
    let segundoNumero = parseFloat(document.getElementById("visor").innerHTML);
    let operacao = primeiroNumero - segundoNumero;
    visor.innerHTML = operacao;
    parcial.innerHTML = primeiroNumero + " - " + segundoNumero + " = ";
  }
}
