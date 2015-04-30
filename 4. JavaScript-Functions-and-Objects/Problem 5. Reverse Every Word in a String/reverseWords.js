/**
 * Created by georgi on 21.11.14.
 */
function reverseWordsInString(str) {
    var words = str.split(' ');
    var newWords = '';
    for (i = 0; i < words.length; i++) {
        var word = words[i].split('').reverse().join('');
        newWords += word + ' ';
    }
    console.log(newWords);
}

reverseWordsInString('Hello, how are you.');
reverseWordsInString('Life is pretty good, isn’t it?');