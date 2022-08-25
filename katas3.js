function showResults(value) {
  console.log(`O resultado do kata é: ${value}`);
}

const sampleArray = [
  469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848,
  179, 535, 940, 472,
];

function kata1() {
  let resultado = [];
  for (let i = 1; i <= 25; i++) {
    resultado.push(i);
  }
  return resultado;
}
showResults(kata1());

function kata2() {
  let resultado = [];
  for (let i = 25; i >= 1; i--) {
    resultado.push(i);
  }
  return resultado;
}
showResults(kata2());

function kata3() {
  let resultado = [];
  for (let i = 1; i <= 25; i++) {
    resultado.push(i * -1);
  }
  return resultado;
}
showResults(kata3());

function kata4() {
  let resultado = [];
  for (let i = 25; i >= 1; i--) {
    resultado.push(i * -1);
  }
  return resultado;
}
showResults(kata4());

function kata5() {
  let resultado = [];
  for (let i = -25; i <= 25; i++) {
    let numeroAtual = i;
    if (numeroAtual % 2 !== 0) {
      resultado.push(numeroAtual);
    }
  }
  return resultado;
}
showResults(kata5());

function kata6() {
  let resultado = [];
  for (let i = 1; i <= 100; i++) {
    let numeroAtual = i;
    if (numeroAtual % 3 == 0) {
      resultado.push(numeroAtual);
    }
  }
  return resultado;
}
showResults(kata6());

function kata7() {
  let resultado = [];
  for (let i = 1; i <= 100; i++) {
    let numeroAtual = i;
    if (numeroAtual % 7 == 0) {
      resultado.push(numeroAtual);
    }
  }
  return resultado;
}
showResults(kata7());

function kata8() {
  let resultado = [];
  for (let i = 100; i > 0; i--) {
    let numeroAtual = i;
    if (numeroAtual % 7 == 0 || numeroAtual % 3 == 0) {
      resultado.push(numeroAtual);
    }
  }
  return resultado;
}
showResults(kata8());

function kata9() {
  let resultado = [];
  for (let i = 1; i <= 100; i++) {
    let numeroAtual = i;
    if (numeroAtual % 2 !== 0 && numeroAtual % 5 == 0) {
      resultado.push(numeroAtual);
    }
  }
  return resultado;
}
showResults(kata9());

function kata10(value) {
  return value;
}
showResults(kata10(sampleArray));

function kata11(value) {
  let resultado = [];
  for (let i = 0; i <= value.length; i++) {
    if (value[i] % 2 == 0) {
      resultado.push(value[i]);
    }
  }
  return resultado;
}
showResults(kata11(sampleArray));

function kata12(value) {
  let resultado = [];
  for (let i = 0; i < value.length; i++) {
    if (value[i] % 2 !== 0) {
      resultado.push(value[i]);
    }
  }
  return resultado;
}
showResults(kata12(sampleArray));

function kata13(value) {
  let resultado = [];
  for (let i = 0; i < value.length; i++) {
    if (value[i] % 8 == 0) {
      resultado.push(value[i]);
    }
  }
  return resultado;
}
showResults(kata13(sampleArray));

function kata14(value) {
  let resultado = [];
  for (let i = 1; i < value.length; i++) {
    quadrado = value[i] * value[i];
    resultado.push(quadrado);
  }
  return resultado;
}
showResults(kata14(sampleArray));

let num = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
function kata15(value) {
  let soma = 0;
  for (let i = 0; i < value.length; i++) {
    soma += value[i];
  }
  return soma;
}
showResults(kata15(num));

function kata16(value) {
  let soma = 0;
  for (let i = 0; i < value.length; i++) {
    soma += value[i];
  }
  return soma;
}
showResults(kata16(sampleArray));

function kata17(value) {
  let numMinimo = value[0];
  for (let i = 0; i <= value.length; i++) {
    if (value[i] < numMinimo) {
      numMinimo = value[i];
    }
  }
  return numMinimo;
}
showResults(kata17(sampleArray));

function kata18(value) {
  let numMaximo = value[0];
  for (let i = 0; i <= value.length; i++) {
    if (value[i] > numMaximo) {
      numMaximo = value[i];
    }
  }
  return numMaximo;
}
showResults(kata18(sampleArray));
