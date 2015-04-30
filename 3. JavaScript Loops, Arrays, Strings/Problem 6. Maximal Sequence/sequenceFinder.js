/**
 * Created by georgi on 20.11.14.
 */
function findMaxSequence(arr) {
    var maxArr = [[arr[0]]];
    var currentArr = [arr[0]];

    for (var i = 1; i < arr.length; i++) {
        if (i == arr.length - 1) {
            if (arr[i] === arr[i - 1]) {
                currentArr.push(arr[i]);
            } if (currentArr.length >= maxArr[0].length) {
                maxArr = [];
                maxArr.push(currentArr);
            }
        } else if (arr[i] === arr[i - 1]) {
            currentArr.push(arr[i]);
        } else {
            if (currentArr.length >= maxArr[0].length) {
                maxArr = [];
                maxArr.push(currentArr);
            }
            currentArr = [arr[i]];
        }
    }
    console.log(maxArr[0]);
}

findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
findMaxSequence(['happy']);
findMaxSequence([2, 'qwe', 'qwe', 3, 3, '3']);