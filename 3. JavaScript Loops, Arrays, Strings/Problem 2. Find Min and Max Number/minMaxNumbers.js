/**
 * Created by georgi on 20.11.14.
 */
function findMinAndMax(arr) {
    var minArray = Math.min.apply(Math, arr);
    console.log('Min -> ' + minArray);
    var maxArray = Math.max.apply(Math, arr);
    console.log('Max -> ' + maxArray);
    console.log('------------------');
}

findMinAndMax([1, 2, 1, 15, 20, 5, 7, 31]);
findMinAndMax([2, 2, 2, 2, 2]);
findMinAndMax([500, 1, -23, 0, -300, 28, 35, 12]);