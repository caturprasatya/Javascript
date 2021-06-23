let angka = 4;

for (let i = angka + 1; ;i++) { //looping tanpa batas
    let temp = i.toString() // mengganti type data
    var output = "";
    
        for (let j = temp.length-1; j >= 0; j--) { // looping untuk membalikan angka
            output += temp[j]
            // console.log(j)
        }

        if (output === temp) { // mencocokan type data, tempat berhenti loopingan
            console.log(`${i} angka palindrome`)
            break;
        } else { // apabila kondisi if tidak terpenuhi akan terus meloping
            console.log(`${i} bukan angka palindrome`)
        }
    // console.log(i, temp, output)
    } 