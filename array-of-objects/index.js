const arr = []

function createObj(name, phase, gender){
    
    let obj = {
        name : name,
        phase : phase,
        gender : gender
    }   
    arr.push(obj)
}

function getData(name){
    let target = null
    arr.forEach(student =>{
        if(student.name === name) target = student
    })
    
    return target
}

createObj('Ical', 1, 'Laki - laki')
createObj('Putri', 2, 'Perempuan')
createObj('Dato', 3, 'Laki - laki')
console.log(getData('Dato'))
// console.log(arr);