/**
 * Created by georgi on 21.11.14.
 */
function findLargestBySumOfDigits(arr) {
    var sum = 0;
    var maxSum = 0;
    var maxNum = 0;
    for (i = 0; i < arr.length; i++) {
        var temp = Math.abs(arr[i]);
        if (!isInt(temp)) {
            console.log('undefined');
            return(undefined);
        } else {
        var digits = ('' + temp);
        digits = digits.split('');
        for (j = 0; j < digits.length; j++) {
            sum = sum + parseFloat(digits[j]);
        }
        if (sum > maxSum) {
            maxSum = sum;
            maxNum = arr[i];
        }
        sum = 0; }
    }
    console.log(maxNum);
}

function isInt(n) {
    return n % 1 === 0;
}

findLargestBySumOfDigits([5, 10, 15, 111]);
findLargestBySumOfDigits([33, 44, -99, 0, 20]);
findLargestBySumOfDigits(['hello']);
findLargestBySumOfDigits([5, 3.3]);