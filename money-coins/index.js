function moneyCoins(money) {
  // your implementation code here
    let output = []
    let i = 0

    while ( money > 0 ) {
        if (money >= 10000) {
            output.push(10000)
            money -= 10000
        } else if (money >= 5000) {
            output.push(5000)
            money -= 5000
        } else if (money >= 2000) {
            output.push(2000)
            money -= 2000
        } else if (money >= 1000) {
            output.push(1000)
            money -= 1000
        } else if (money >= 500) {
            output.push(500)
            money -= 500
        } else if (money >= 200) {
            output.push(200)
            money -= 200
        } else if (money >= 100) {
            output.push(100)
            money -= 100
        } else if (money >= 50) {
            output.push(50)
            money -= 50
        } else if (money >= 20) {
            output.push(20)
            money -= 20
        } else if (money >= 10) {
            output.push(10)
            money -= 10
        } else if (money >= 1) {
            output.push(1)
            money -= 1
        }
        i++
    }

    return output
}

//driver code
console.log(moneyCoins(543));
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(moneyCoins(7752));
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(moneyCoins(37454));
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]

//abaikan code dibawah ini
module.exports = moneyCoins
