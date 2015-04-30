/**
 * Created by georgi on 20.11.14.
 */
function compareChars(arr1, arr2) {
    var counter = 0;
    for (i=0; i<arr1.length; i++) {
        if (arr1[i] == arr2[i]) {
            counter++;
        }
    }
    if (counter == arr1.length) {
        console.log('Equal')
    } else {
        console.log('Not Equal')
    }
}

compareChars(['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'],
    ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q']);
compareChars(['3', '5', 'g', 'd'],
    ['5', '3', 'g', 'd']);
compareChars(['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'],
    ['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r']);
