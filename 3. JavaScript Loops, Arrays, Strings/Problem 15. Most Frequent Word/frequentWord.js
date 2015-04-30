/**
 * Created by georgi on 20.11.14.
 */
function findMostFreqWord(str) {
    var count = 0, maxCount = 0;
    words = str.toLowerCase().split(/[ .,]+/);
    for (i=0; i<words.length; i++) {
        for (j=0; j<words.length; j++) {
            if(words[i] == words[j]) {
                count++;
            }
        }
        if (count > maxCount) {
            maxCount = count;
            var a = words[i];
            count = 0;
        }
        count = 0;
    }
    console.log(a + ' -> ' + maxCount);
}

findMostFreqWord('in the middle of the night');
findMostFreqWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.');
findMostFreqWord('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.');