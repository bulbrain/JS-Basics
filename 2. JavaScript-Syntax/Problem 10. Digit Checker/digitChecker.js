/**
 * Created by georgi on 13.11.14.
 */
function checkDigit(number) {
    var num = number / 100;
    num = Math.floor(num % 10);
    if (num == 3) {
        console.log(true);
    } else {
        console.log(false);
    }
}

checkDigit(1235);
checkDigit(25368);
checkDigit(123456);
