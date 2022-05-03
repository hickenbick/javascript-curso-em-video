let valores = [2, 5, 5, 20, 8, 7, 4]

// for (let c = 0; c < valores.length; c++ ) {
//   console.log(`A posição ${c} tem o valor: ${valores[c]};`)
// }

for (let c in valores){
  console.log(`A posição ${c} tem o valor: ${valores[c]};`)
}
let pos = valores.indexOf(20)
console.log(`A posição do número 5 é ${pos}`)

