/**
 * Created by georgi on 20.11.14.
 */
function reverseString(str) {
    var arr = str.split('');
    var reversed = new Array(arr.length);
    for (i=0; i<arr.length; i++) {
        reversed[arr.length - i - 1] = arr[i];
    }
    console.log(reversed.join(''));
}

reverseString('sample');
reverseString('softUni');
reverseString('java script');