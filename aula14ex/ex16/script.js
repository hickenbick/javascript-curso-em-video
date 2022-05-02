function executar() {
  var inputInicio = document.querySelector(".inicio");
  var inputFinal = document.querySelector(".final");
  var inputPular = document.querySelector(".pular");
  var resultado = document.querySelector(".resultado");
  if (
    inputInicio.value.length == 0 ||
    inputFinal.value.length == 0 ||
    inputPular.value.length == 0
  ) {
    resultado.innerHTML = `[ERRO] preencha os dados corretamente.`;
  } else if (inputPular.value == 0) {
    resultado.innerHTML = `O pulo não pode ser = 0!`;
  } else {
    var inicio = Number(inputInicio.value);
    var final = Number(inputFinal.value);
    var pular = Number(inputPular.value);
    if (inicio < final) {
      for (var c = inicio; c <= final; c += pular) {
        resultado.innerHTML += ` ${c} >`;
      }
    } else {
      for (var c = inicio; c >= final; c -= pular) {
        resultado.innerHTML += ` ${c} >`;
      }
    }
    resultado.innerHTML += ` FIM!`;
  }
}
