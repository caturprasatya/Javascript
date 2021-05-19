function numberToWords(number) {
  // Your code here
    //string kosong untuk menyesuakan index dengan number
    let uniqe = { 'satu' : 1 , 
            'dua' : 2 , 
            'tiga' : 3, 
            'empat': 4, 
            'lima' : 5, 
            'enam' : 6, 
            'tujuh' : 7, 
            'delapan' : 8, 
            'sembilan' : 9, 
            'sepuluh' : 10, 
            'sebelas' : 11
    }
    if (number == 0) {
        return ' '
    }

    for (const key in uniqe) {
        if (number <= 11 && number === uniqe[key]) {
            return key
        } else if( number > 11 && number < 21) {
            return numberToWords( number - 10) + ' belas'  
        } else if( number >= 21 && number < 99) {
            return numberToWords(Math.floor(number / 10)) + ' puluh ' + numberToWords(number % 10)
        } else if( number >= 100 && number < 200) {
            return 'seratus ' + numberToWords(number % 100)
        } else if( number >= 200 && number < 1000) {
            return numberToWords(Math.floor(number / 100)) + ' ratus ' + numberToWords(number % 100) 
        } else if( number >= 1000 && number < 2000) {
            return 'seribu ' + numberToWords(number % 1000) 
        } else if( number >= 2000 && number < 1000000) {
            return numberToWords(Math.floor(number / 1000)) + ' ribu ' + numberToWords(number % 1000) 
        } else if( number >= 1000000 && number < 1000000000) {
            return numberToWords(Math.floor(number / 1000000)) + ' juta ' + numberToWords(number % 1000000) 
        } else if( number >= 1000000000 && number < 1000000000000) {
            return numberToWords(Math.floor(number / 1000000000)) + ' miliyar ' + numberToWords(number % 1000000000) 
        } else if (number > 1000000000000){
            return numberToWords(Math.floor(number / 1000000000000)) + ' triliyun ' + numberToWords(number % 1000000000000) 
        }
    }
    
}

// Driver code
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));

//abaikan code dibawah ini
module.exports = numberToWords;
