
var agora = new Date()
hora = agora.getHours()
console.log(`Agora são extamente ${hora}h`)


if (hora < 5) {
  console.log('Boa madrugada, ainda acordado?')
}
else if (hora < 12) {
  console.log('Bom dia, Ainda é manhã.')
}
else if (hora < 19) {
  console.log('Boa tarde, É tarde.')
}
else if (hora <24) {
  console.log('boa noite, Já é noite.')
}
else if (hora >=25) {
  console.log('Você tem certeza de que está no relógio do planeta terra?')
}