/*
PSEUDECODE
STORE index AS NUMBER WITH 0
STORE user AS ARRAY WITH ['Tono', 'Anton', 'Budi']

FOR i FROM 7 TO 31 INCREMENT BY 1
    IF index EQUAL 0
        DISPLAY `Tanggal ${i}: ${user[0]}, ${user[1]}, ${user[2]}`
    ELSE 
        IF i MODULUS 5 EQUAL 0
            DISPLAY `Tanggal ${i}:  Tempat fitness tutup``
        ELSE IF index MODULUS 2 EQUAL 0 AND index MODULUS 4 EQUAL 0 AND index MODULUS 5 EQUAL 0
            DISPLAY `Tanggal ${i}: ${user[0]}, ${user[1]}, ${user[2]}`
        ELSE IF index MODULUS 2 EQUAL 0 AND index MODULUS 4 EQUAL 0
            DISPLAY `Tanggal ${i}: ${user[0]}, ${user[1]}`
        ELSE IF index MODULUS 2 EQUAL 0 AND index MODULUS 5 EQUAL 0
            DISPLAY `Tanggal ${i}: ${user[0]}, ${user[2]}`
        ELSE IF index MODULUS 4 EQUAL 0 AND index MODULUS 5 EQUAL 0
            DISPLAY `Tanggal ${i}: ${user[1]}, ${user[2]}`
        ELSE IF index MODULUS 2 EQUAL 0
            DISPLAY `Tanggal ${i}: ${user[0]}`
        ELSE IF index MODULUS 4 EQUAL 0
            DISPLAY `Tanggal ${i}: ${user[1]}`
        ELSE IF index MODULUS 5 EQUAL 0
            DISPLAY `Tanggal ${i}: ${user[2]}`
        ELSE 
            DISPLAY `Tanggal ${i}: `
        END IF
    END IF

    index INCREMENT BY 1
END FOR
 */

let index = 0
let user = ['Tono', 'Anton', 'Budi']

for (let i = 7; i <= 31; i++) {
    if (index === 0) {
        console.log(`Tanggal ${i}: ${user[0]}, ${user[1]}, ${user[2]}`)
    } else {
        if (i % 5 === 0) {
            console.log(`Tanggal ${i}: Tempat fitness tutup`)
        } else if (index % 2 === 0 && index % 4 === 0 && index % 5 === 0) {
            console.log(`Tanggal ${i}: ${user[0]}, ${user[1]}, ${user[2]}`)
        } else if (index % 2 === 0 && index % 4 === 0) {
            console.log(`Tanggal ${i}: ${user[0]}, ${user[1]}`)
        } else if (index % 2 === 0 && index % 5 === 0) {
            console.log(`Tanggal ${i}: ${user[0]}, ${user[2]}`)
        } else if (index % 4 === 0 && index % 5 === 0) {
            console.log(`Tanggal ${i}: ${user[1]}, ${user[2]}`)
        } else if (index % 2 === 0) {
            console.log(`Tanggal ${i}: ${user[0]}`)
        } else if (index % 4 === 0) {
            console.log(`Tanggal ${i}: ${user[1]}`)
        } else if (index % 5 === 0) {
            console.log(`Tanggal ${i}: ${user[2]}`)
        } else {
            console.log(`Tanggal ${i}: `)
        }
    }
    index++
}