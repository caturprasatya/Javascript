function createNestedArr(row, col){
    let result = []
    for(let i = 0; i < row; i++) {
        let temp = []
        for(let j = 0; j < col; j++) {
            let num = Math.floor(Math.random() * 26) + 65
            let abjad = String.fromCharCode(num)
            temp.push(abjad)
        }
        result.push(temp)
    }
    return result
}


console.log(createNestedArr(3, 3));