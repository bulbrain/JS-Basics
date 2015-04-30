/**
 * Created by georgi on 20.11.14.
 */
function findMostFreqWord(str) {
    str = str.toUpperCase().replace(/[^0-9JQKA]+/g, ' ').trim();
    var cards = str.split(' ');
    var counts = {};

    for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        counts[card] = counts[card] ? counts[card] + 1 : 1;
    }

    var values = Object.keys(counts).map(function(val) {
        return counts[val];
    });

    for (var i = 0; i < values.length; i++) {
        var freq = ((counts[cards[i]] / cards.length) * 100);
        console.log(cards[i] + " -> " +  freq.toFixed(2) + "%");
    }

    console.log();

}

findMostFreqWord('8♥ 2♣ 4♦ 10♦ J♥ A♠ K♦ 10♥ K♠ K♦');
findMostFreqWord('J♥ 2♣ 2♦ 2♥ 2♦ 2♠ 2♦ J♥ 2♠');
findMostFreqWord('10♣ 10♥');