/**
 * Created by georgi on 20.11.14.
 */
function findPalindromes(str) {
    str = str.toLowerCase().replace('.', '').replace(',', '');
    word = str.split(' ');
    for (i=0; i<word.length; i++) {
        var letter = word[i].split('');
        if (letter.length == 1) {
            console.log(letter.toString());
        }
    }
    for (i = 0; i < letter.length; i++) {
        for (j = 0; j < letter[i].length; j++) {
            if (letter[i][j] == letter[i][i]) {
                console.log(letter.join().replace(/,/g, ''))
            }
        }
    }
}

findPalindromes('There is a man, his name was Bob.');