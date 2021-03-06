//Diberikan program untuk mengubah
const moneyStocks = {
  100000: 1,
  50000: 2,
  20000: 4,
  10000: 5,
  5000: 5,
  1000: 10,
  500: 5
};

//MULAI BAGIAN CODE UNTUK DEBUG
let uang = [];
for (const key in moneyStocks) {
    uang.push(+key);
}
// console.log(uang);
for (let i = 0; i < uang.length - 1; i++) {
  for (let j = i + 1; j < uang.length; j++) {
    if (uang[i] < uang[j]) {
      let swap = uang[i];
      uang[i] = uang[j];
      uang[j] = swap;
    }
  }
}
// console.log(uang);

function getMoneyChange(mauDiTukar) {
    let obj = {};
    
    if (mauDiTukar < uang[uang.length - 1]) {
        console.log('Maaf uang kembalian tidak cukup');
    } else {
        for (let i = 0; i < uang.length; i++) {
                while (moneyStocks[uang[i]] !== 0 && mauDiTukar - uang[i] >= 0) {
                    if (!obj[uang[i]]) {
                        obj[uang[i]] = 0;
                    }
                    moneyStocks[uang[i]] -= 1;
                    mauDiTukar -= uang[i];
                    obj[uang[i]] += 1;
                }
            }
        }
        
        let money  = []
        let value = []
        for (const key in obj) {
            money.push(+key)
            value.push(+obj[key])
        }

        for (let i = money.length - 1; i >= 0; i--) {
            console.log(`${money[i]} ${value[i]} lembar`);
            
        }
}

//AKHIR DARI BAGIAN DEBUG

console.log('CASE 1:\n----------------');
getMoneyChange(75000);
/*
    50000 1 lembar
    20000 1 lembar
    5000 1 lembar
*/
console.log('');
console.log('CASE 2:\n----------------');
getMoneyChange(190000);
/*
    100000 1 lembar
    50000 1 lembar
    20000 2 lembar
*/
console.log('');
console.log('CASE 3:\n----------------');
getMoneyChange(190);
/*
    Maaf uang kembalian tidak cukup
*/
console.log('');
console.log('CASE 4:\n----------------');
getMoneyChange(100000);
/*
    20000 1 lembar
    10000 5 lembar
    5000 4 lembar
    1000 10 lembar
*/
console.log('');
console.log('CASE 5:\n----------------');
getMoneyChange(400);
    /*
    Maaf uang kembalian tidak cukup
*/
console.log('');
console.log(moneyStocks);
/*
{ '500': 5,
    '1000': 0,
    '5000': 0,
    '10000': 0,
    '20000': 0,
    '50000': 0,
    '100000': 0 }
*/
