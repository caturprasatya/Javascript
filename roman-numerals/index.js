function toRoman(num) {
    let data = {
        1000 : 'M',
        500 : 'D',
        400 : 'CD',
        100 : 'C',
        50 : 'L',
        40 : 'XL',
        10 : 'X',
        9 : 'IX',
        5 : 'V',
        4 : 'IV',
        1 : 'I'
    }
    if (num <= 0) {
        return ''
    }
    let arrNumber = Object.keys(data)

    for (let i = arrNumber.length - 1; i >= 0; i--) {
        let number = arrNumber[i] 
        while (num >= +number) {
            return data[number] + toRoman(num - (+number))
        }
    }
}

// Drive code
console.log("My totally sweet testing script for new roman\n");
console.log("input | expected | actual");
console.log("——————|——————————|———————");
console.log("4     | IV       | ", toRoman(4));
console.log("9     | IX       | ", toRoman(9));
console.log("13    | XIII     | ", toRoman(13));
console.log("1453  | MCDLIII  | ", toRoman(1453));
console.log("1646  | MDCXLVI  | ", toRoman(1646));

//abaikan code dibawah ini
module.exports = toRoman
