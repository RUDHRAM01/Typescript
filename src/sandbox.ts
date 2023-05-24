const characters = 'rudhram';
console.log(characters);
var inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(input => {
  console.log(input)
}) 

const dia = (value: number) => {
  return value * Math.PI
}

console.log(dia(65))