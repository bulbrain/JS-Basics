/**
 * Created by georgi on 13.11.14.
 */
function convertDigitToWord(value) {
    var num;
    switch (value) {
        case 1 : num = 'one'; break;
        case 2 : num = 'two'; break;
        case 3 : num = 'three'; break;
        case 4 : num = 'four'; break;
        case 5 : num = 'five'; break;
        case 6 : num = 'six'; break;
        case 7 : num = 'seven'; break;
        case 8 : num = 'eight'; break;
        case 9 : num = 'nine'; break;
    }
    console.log(num);
}

convertDigitToWord(8);
convertDigitToWord(3);
convertDigitToWord(5);