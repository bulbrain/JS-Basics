/**
 * Created by georgi on 13.11.14.
 */
function bitChecker(number) {
    var mask = 1 << 3;
    if ((number & mask) != 0) {
        console.log('true');
    } else {
        console.log('false');
    }
}

bitChecker(333);
bitChecker(425);
bitChecker(2567564754);