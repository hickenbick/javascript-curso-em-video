function executar() {
  var input = document.querySelector('.input')
  var resultado = document.querySelector('.resultado')
  if (input.value.length == 0) {
    resultado.innerHTML = `[ERRO] Preencha o campo corretamente`
  } else {
    resultado.innerHTML = ''
    var i = Number(input.value)
    for (var c = 0; c <= 10; c++)
    resultado.innerHTML += `${i} x ${c} = ${i*c}<br>`
  }
}

