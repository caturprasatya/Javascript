let kata = "katak";
let temp = "";

for (let i = kata.length-1; i >= 0 ; i--) {
    temp += kata[i]
}

if (kata === temp) {
    console.log(true)
} else (
    console.log(false)
)
console.log(temp)