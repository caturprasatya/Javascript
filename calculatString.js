/**
 *
 * =================
 * calculate string
 * =================
 *
 * Buatlah sebuah fungsi yang akan menerima sebuah string berupa string perhitungan matematika ( 1 + 2 + 3 + 4)
 * Fungsi ini hanya dapat menerima aritmatika dengan kombinasi + dan - atau kombinasi * dan -
 *
 *
 * Berikanlah output hasil perhitungan aritmatika yang sudah dibuat
 */

function giveMeResult(string) {
  let output = 0
  let operatorInString = 0
  let operator
  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
      case '+':
        operator = 'plus'
        break;
      case '-':
        operator = 'minus'
        break;
      case '/':
        operator = 'devided'
        break;
      case '*':
        operator = 'times'
        break;  
      default:
        break;
    }

    if (!+string[i]) {
      operatorInString += 1
    } else {
      switch (operator) {
        case 'minus':
          output = output - +string[i]
          break;
        case 'devided':
          output = output / +string[i]
          break;
        case 'times':
          output = output * +string[i]
          break;
        default:
          output += +string[i]
          break;
      }
    }
  }
  return output
}

console.log(giveMeResult('1+1+1-1+1')) // 3
console.log(giveMeResult('1*2*3*2')) // 3
