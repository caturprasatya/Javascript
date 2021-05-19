function toRoman(num) {
    let roman = { 1 :'I' ,
                  4 :'IV' , 
                  5 :'V', 
                  9 :'IX' , 
                  10 :'X' , 
                  40 :'XL' , 
                  50 :'L' , 
                  90 : 'XC' , 
                  100 : 'C' , 
                  400:'CD' , 
                  500:'D' , 
                  900:'CM' , 
                  1000:'M' 
                }
    let keys = Object.keys(roman)

    if (num === 0) return ''
    
    for (let i = keys.length - 1; i >= 0; i--) {
        let key = keys[i]

        while (num >= Number(key)) {
            return roman[key] + toRoman(num - Number(key))
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
