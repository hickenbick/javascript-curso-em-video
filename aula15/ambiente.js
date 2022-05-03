let num = [5, 8, 9, 2]
num[4] = 6 
num.push(7)
num.sort()
var sort = num.length
console.log(`Nosso vetor é o ${num}`)
console.log(`Esse Array possui ${sort} caracteres`)
console.log(`O primeiro elemento de num é o ${num[0]}`)

for (let c = 0; c <= num.length; c++) {
  console.log(num[c])
}