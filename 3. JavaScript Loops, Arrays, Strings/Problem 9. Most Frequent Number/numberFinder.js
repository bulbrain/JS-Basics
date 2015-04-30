/**
 * Created by georgi on 20.11.14.
 */
function findMostFreqNum(arr) {
    var count = 0, maxCount = 0;
    for (i=0; i<arr.length; i++) {
        for(j=0; j<arr.length; j++) {
            if (arr[i] == arr[j]) {
                count++;
            }
        }
        if (count > maxCount) {
            maxCount = count;
            var a = arr[i];
            count = 0;
        }
        count = 0;
    }
    console.log(a + ' (' + maxCount + ' times)');
}

findMostFreqNum([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]);
findMostFreqNum([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]);
findMostFreqNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);