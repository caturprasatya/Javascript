function ticTacToe(){
    let value = ['X', 'O']
    let x = 0
    let y = 0
    let result = []

    for (let i = 0; i < 3; i++) {
        let temp = []
        for (let j = 0; j < 3; j++) {
            let change = Math.round(Math.random())
            //*push to temporary
            if (x >= 5 || y >= 5) {
                //* hundle if more than 5
                if (x >= 5) temp.push(value[1])
                if (y >= 5) temp.push(value[0])
            } else {
                temp.push(value[change])
            }
    
            //* count y OR x
            if (change === 0) x++ 
            else y++
        }
        result.push(temp)
    }
    console.log(result);
}

ticTacToe()