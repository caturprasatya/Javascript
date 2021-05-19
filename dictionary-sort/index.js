function dictionarySort(dictionaries) {
  // your code below here...
  let result = ''

    for (let i = 0; i < dictionaries.length; i++) {
        
        let min = i
        for (let j = i + 1; j < dictionaries.length; j++) {
            if (dictionaries[min] > dictionaries[j]) {
                min = j
            }
        }

        if (min !== i) {
            let swap = dictionaries[i]
            dictionaries[i] = dictionaries[min]
            dictionaries[min] = swap        
        }

        if (i === dictionaries.length - 1) {
            result += dictionaries[i]
        } else {
            result += `${dictionaries[i]},`
        }
    }
    return result
}

let nama = ['anggi', 'angga', 'ani', 'adi']
console.log(dictionarySort(nama))

module.exports = dictionarySort
