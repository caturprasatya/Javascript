// Your code here
let hit1 = process.argv[2]
let hit2 = process.argv[3]
let hit3 = process.argv[4]
let hit4 = process.argv[5]
let hit5 = process.argv[6]
let hit6 = process.argv[7]
let hit7 = process.argv[8]
let hit8 = process.argv[9]
let hit9 = process.argv[10]
let hit10 = process.argv[11]


class BattleShip {
    constructor(land, ships, hits) {
        this.land = land
        this.ships = ships
        this.hits = hits
        this.onTarget = 0
    }

    addShip() {
        let board = this.land
        let i = 0

        while(i <= this.ships){
            let col = Math.floor(Math.random() * 9)
            let row = Math.floor(Math.random() * 9)
            let colA = Math.floor(Math.random() * 9)
            let rowA = Math.floor(Math.random() * 9)
            let colB = Math.floor(Math.random() * 9)
            let rowB = Math.floor(Math.random() * 9)

            board[rowA][colA] = 'A'
            board[rowB][colB] = 'B'
            board[row][col] = 'C'
            i++
        }
        return board
    }
    prosesHit(){
        let board = this.addShip()
        let hit = this.hits
        let hitCol = []

        for (let i = 0; i < hit.length; i++) {
            if (hit[i][0] === 'A') {
                hitCol.push(0)
            } else if (hit[i][0] === 'B') {
                hitCol.push(1)
            } else if (hit[i][0] === 'C') {
                hitCol.push(2)
            } else if (hit[i][0] === 'D') {
                hitCol.push(3)
            } else if (hit[i][0] === 'E') {
                hitCol.push(4)
            } else if (hit[i][0] === 'F') {
                hitCol.push(5)
            } else if (hit[i][0] === 'G') {
                hitCol.push(6)
            } else if (hit[i][0] === 'H') {
                hitCol.push(7)
            } else if (hit[i][0] === 'I') {
                hitCol.push(8)
            } else {
                hitCol.push(9)
            }
            
        }
        
        let a = 0
        while (a < hit.length) {              
            let row = +hit[a][1] - 1
            let col = hitCol[a]
            
            if (col <= board[0].length){    
                if (board[row][col] === 'A' || board[row][col] === 'B' || board[row][col] === 'C') {
                    board[row][col] = 'X'
                    this.onTarget++
                } else if (board[row][col] === ' '){
                    board[row][col] = '0'
                }
            }                
            a++
        }
        return board
    }

    printBord(){
        let fixBoard = this.prosesHit()

        for (let i = 0; i < fixBoard.length; i++) {
            let tempStr = ''
            for (let j = 0; j < fixBoard[i].length; j++) {
                let position = fixBoard[i][j]

                if (j === fixBoard[i].length - 1){    
                    tempStr += `| ${position} |`
                }  else {
                    tempStr += `| ${position} `
                }            
            }
            if (i === fixBoard.length - 1) {
                console.log(`${i+1} ${tempStr}`)
            } else {
                console.log(`${i+1}  ${tempStr}`)
            }
            if (i !== fixBoard.length - 1) {
                console.log(`   |---|---|---|---|---|---|---|---|---|---|`)
            }
        }
    }
}

let land = [ [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' , ' '],
        [ 'A', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' , ' '],
        [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' , ' '],
        [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' , ' '],  
        [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' , ' '],
        [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' , ' '],
        [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' , ' '],
        [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' , ' '],
        [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' , ' '],
        [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' , ' ']
    ] // default ship untuk memastikann
let hitTemp = [hit1 ,hit2 ,hit4 ,hit5 ,hit6 ,hit7,hit8 ,hit9 ,hit10]
let hitShip = []
for (let i = 0; i < 10; i++) {
    if (hitTemp[i]) {
        let loc = hitTemp[i].toUpperCase()
        if (loc[0] === 'A' || loc[0] === 'B' || loc[0] === 'C' || loc[0] === 'D' || loc[0] === 'E' || loc[0] === 'F' ||loc[0] === 'G' ||loc[0] === 'H' ||loc[0] === 'I' || loc[0] === 'J') {
            hitShip.push(loc)
        }
    }    
}
// console.log(hitShip)

let defendShip = new BattleShip(land, 4, hitShip)

console.log('     A   B   C   D   F   F   G   H   I   J')
console.log('   +---------------------------------------+')
//proses to hit
defendShip.printBord()

console.log('   +---------------------------------------+')
console.log(`Hit anda terkena ${defendShip.onTarget}`)