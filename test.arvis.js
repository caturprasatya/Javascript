const number  = 1000

let total = 0

for(let i = 0; i < number; i++){
  if (i % 3 === 0 || i % 5 === 0) {
    // newArray.push(i)
    // console.log('MASUK KONDISI');
    total += i
  }
}

// const total = newArray.reduce((a, b) => a + b)

console.log(total);
