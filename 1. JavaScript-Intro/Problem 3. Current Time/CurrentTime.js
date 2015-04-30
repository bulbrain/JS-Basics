/**
 * Created by georgi on 09.11.14.
 */
var now = new Date();
var hour = now.getHours();
var mins = now.getMinutes();
if (mins < 10) {
    mins = "0" + mins;
}
console.log(hour + ":" + mins);
