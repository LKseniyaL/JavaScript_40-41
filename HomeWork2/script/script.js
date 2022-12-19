// 1. First level: функция isAbsoluteBalance принимает на вход строку
// и возвращает true, если в строке поровну символов a и не-а
// И символы "а" идут через один
// пример: isAbsoluteBalance("мама") -> true
// isAbsoluteBalance("папа") -> true
// isAbsoluteBalance("аааббб") -> false

const st = 'mama';

function isAbsoluteBalance(string){
    if(string.length % 2 !== 0){
        return false
    }
    for(let i = 1; i < string.length - 1 ; i++){
        if(string[i] === 'a' && string[i + 1] === 'a'){
            return false
        }
        if(string[i] !== 'a' && string[i + 1] !== 'a'){
            return false
        }
    }
    return true;
}
console.log(isAbsoluteBalance(st));

//*********************************************************** */

// 2. функция getDiagonal принимает стороны параллелипипеда a, b, c и возвращает диагональ этого параллелипипеда

const a = 10;
const b = 10;
const c = 10;

function getDiagonal(a, b, c){
let diagonal = 0;
for(let i = 0; i < getDiagonal.length; i++){
diagonal = Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2);
diagonal = Math.sqrt(diagonal);
}
return parseInt(diagonal);
}
console.log(getDiagonal(a, b, c));

//**********************************************************

// 3. 
// функция maskWords принимает строку str и число num
// и заменяет num слов на соответствующее количество *
// начиная с конца. Пример console.log(maskWords("Мама мыла раму", 2))
// выведет Мама **** ****


const string = 'Мама мыла раму';
const number = 2;

function maskWords(string, number){
 if(number === 0){
    return string;
}
const result = string.split('')
    for(let i = string.length-1; i >= 0; i--){
        
        if(number === 0){
            break;
        }
            if(result[i] === ' '){
                number--;
                continue;
            }
            
            result[i] = '*';
    }
    return result.join('');
}
console.log(maskWords(string, number));