function generateBoard(num){
    let total = num * num
    let result = []
    
    for (let i = 0; i < num; i++) {
        let temp = []
        for (let j = 0; j < num; j++) {
            if (i % 2 == 0) {
                temp.unshift(total)
            } else {
                temp.push(total)
            }
            total--
        } 
        result.push(temp)    
    }
    return result
}

console.log(generateBoard(5));