/**
 * Created by georgi on 20.11.14.
 */
function checkBrackets(str) {
    var leftBrackets = 0;
    var rightBrackets = 0;
    var arr = str.split('');
    for (i=0; i<arr.length; i++) {
        if (arr[i] == '(') {
            leftBrackets ++;
        } else if (arr[i] == ')') {
            rightBrackets ++;
        }
    }
    if (rightBrackets == leftBrackets) {
        console.log('correct');
    } else {
        console.log('incorrect');
    }
}

checkBrackets('( ( a + b ) / 5 – d )');
checkBrackets(') ( a + b ) )');
checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )');