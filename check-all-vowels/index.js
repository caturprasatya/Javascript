function checkVowel(str){
    let vowels = 'aiueo'
    for (const i of str) {
        for (const vowel of vowels) {
            if (i.toLowerCase() === vowel) {
                return true
            }
        }
    }
    return false
}

const str = 'you love me?';
const str1 = 'zxc fgh';
const str2 = 'I Know You';

console.log(checkVowel(str2));
