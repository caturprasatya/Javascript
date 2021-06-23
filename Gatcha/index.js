// insert your code here
var gacha
/*
##PSEUDECODE
STORE tombol WITH ROUND DOWN OF RANDOM NUMBER BETWEEN 1 AND 5

SWITCH tombol
    CASE 1
        DISPLAY "coba lagi ya"
        END
    CASE 2
        DISPLAY "selamat kamu mendapatkan kupon sebanyak 5"
        END
    CASE 3
        DISPLAY "selamat kamu mendapatkan kupon sebanyak 15"
        END
    CASE 4
        DISPLAY "selamat kamu mendapatkan kupon sebanyak 50"
        END
    CASE 5
        DISPLAY "WOW, kamu menang jackpot! Selamat!!"
        END
END SWITCH
*/

var tombol = Math.floor(Math.random()*5 + 1)

switch(tombol){
    case 1:
        console.log("coba lagi ya")
        break;
    case 2:
        console.log("selamat kamu mendapatkan kupon sebanyak 5")
        break;
    case 3:
        console.log("selamat kamu mendapatkan kupon sebanyak 15")
        break;
    case 4:
        console.log("selamat kamu mendapatkan kupon sebanyak 50")
        break;
    case 5:
        console.log("WOW, kamu menang jackpot! Selamat!!")
        break;
}
console.log(tombol)
