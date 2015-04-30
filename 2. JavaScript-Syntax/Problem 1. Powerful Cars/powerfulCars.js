/**
 * Created by georgi on 12.11.14.
 */
function convertKWtoHP(number) {
    var hp = number * 1.34102209;
    hp = hp.toFixed(2);
    console.log(hp);
}

convertKWtoHP(75);
convertKWtoHP(150);
convertKWtoHP(1000);
