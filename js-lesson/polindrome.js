/* 
* Написать функцию, которая определяетб является ли переданная строка палиндромом
* (читается слева-направо и справа-налево оиданоко).
Примеры планидромов:
- Казак
- А роза упала на лапу Азора
- Do geese see God?
- Madam, I'm Adam
* Ограничение по памяти O(1).

*/

function isEquals(str1, str2){
    return str1.toLowerCase() === str2.toLowerCase()
}

function isLetter(char){
    return char.toLowerCase() !== char.toUpperCase()
}

function isPalindrome(str){
    let start = 0;
    let end = str.length - 1;

    while(start < end) {
        const firstChar = str[start];
        const endChar = str[end];
        
        if (!isLetter(firstChar)){
            start += 1;
            continue;
        }

        if (!isLetter(endChar)){
            end -= 1;
            continue;
        }

        if (!isEquals(firstChar,endChar)){
            return false;
        }

        start +=1;
        end -= 1;
    }
    return true;
}