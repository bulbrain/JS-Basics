/**
 * Created by georgi on 21.11.14.
 */
function findNthDigit(arr) {
    var num = Math.abs(arr[1]);
    num = num * 100;
    if (num % 100 == 0) {
        num = num / 100;
    }
    num = (''+num);
    var nth = num.length+1 - arr[0];
    num = num[nth-1];
    if (num == undefined) {
        console.log('The number doesn’t have ' + arr[0] + ' digits');
    } else {
        console.log(num);
    }
}

findNthDigit([1, 6]);
findNthDigit([2, -55]);
findNthDigit([6, 923456]);
findNthDigit([3, 1451.78]);
findNthDigit([6, 888.88]);