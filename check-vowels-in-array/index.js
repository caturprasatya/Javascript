function alfabet(row, col) {
    let result = []

    for (let i = 0; i < row; i++) {
        result.push([])
        for (let j = 0; j < col; j++) {
            let ascii = Math.ceil(Math.random() * 25) + 65
            let huruf = String.fromCharCode(ascii)
            result[i].push(huruf)
        }
    }
    return result
}

function square() {
    let alfabets = alfabet(2,2)
    let temp = []
    let result = 0

    for (let i = 0; i < alfabets.length - 1; i++) {
        for (let j = 0; j < alfabets[i].length - 1; j++) {
            temp.push(`${alfabets[i][j]}${alfabets[i][j + 1]}${alfabets[i + 1][j]}${alfabets[i + 1][j + 1]}`)   
        }

    }

    for (let i = 0; i < temp.length; i++) {
        let count = 0
        for (let j = 0; j < temp[i].length; j++) {
            if (temp[i][j] === 'A' || temp[i][j] === 'I' || temp[i][j] === 'U' || temp[i][j] === 'E' || temp[i][j] === 'O') {
                count++
            }
        }
        if(count === 4) {
            result++
        }
    }
    return result
}
console.log(square())