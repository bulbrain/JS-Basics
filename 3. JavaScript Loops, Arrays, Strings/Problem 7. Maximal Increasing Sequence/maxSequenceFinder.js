/**
 * Created by georgi on 20.11.14.
 */
function findMaxSequence(arr) {
    var maxArr = [[arr[0]]];
    var currentArr = [arr[0]];

    for (var i = 1; i < arr.length; i++) {
        if (i == arr.length - 1) {
            if (arr[i] > arr[i - 1]) {
                currentArr.push(arr[i]);
            } if (currentArr.length >= maxArr[0].length) {
                maxArr = [];
                maxArr.push(currentArr);
            }
        } else if (arr[i] > arr[i - 1]) {
            currentArr.push(arr[i]);
        } else {
            if (currentArr.length >= maxArr[0].length) {
                maxArr = [];
                maxArr.push(currentArr);
            }
            currentArr = [arr[i]];
        }
    }
    if (maxArr[0].length == 1) {
        console.log('no');
    } else {
        console.log(maxArr[0]);
    }
}

findMaxSequence([3, 2, 3, 4, 2, 2, 4]);
findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]);
findMaxSequence([3, 2, 1]);