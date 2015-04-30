/**
 * Created by georgi on 12.11.14.
 */
function evenNumber(number) {
    var checker;
    if (number % 2 == 0) {
        checker = true;
    } else {
        checker = false;
    }
    console.log(checker);
}

evenNumber(3)
evenNumber(127)
evenNumber(588)