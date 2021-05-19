function stringToArray(str){
    let arr = str.split(',')
    let result = []
    arr.forEach(a => {
        result.push(a.split(''))
    });
    return result
}

let str = 'sadad,safasfas,afsfa'
console.log(stringToArray(str));