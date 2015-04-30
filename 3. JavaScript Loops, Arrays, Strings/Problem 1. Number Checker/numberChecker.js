/**
 * Created by georgi on 20.11.14.
 */
function printNumbers(number) {
    var arr = [];
    if (number < 0) {
        console.log('no');
    } else {
        for (var i= 0; i <= number; i++) {
            if (i % 4 && i %5 != 0) {
                arr[i] = i;
            }
        }
        console.log(arr.filter(Number));
    }
}

printNumbers(20);
printNumbers(-5);
printNumbers(13);