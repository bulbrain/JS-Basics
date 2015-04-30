/**
 * Created by georgi on 12.11.14.
 */
function roundNumber(number) {
    var round;
    var floor;
    floor = Math.floor(number);
    console.log(floor);
    round = Math.round(number);
    console.log(round);
    console.log();
}

roundNumber(22.7);
roundNumber(12.3);
roundNumber(58.7);