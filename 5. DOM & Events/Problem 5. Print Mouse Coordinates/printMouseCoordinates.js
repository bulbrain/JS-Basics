/**
 * Created by georgi on 23.11.14.
 */
function printMouseCoordinates() {
    var text = document.getElementById('textArea');
    var mouseX = event.clientX + document.body.scrollLeft;
    var mouseY = event.clientY + document.body.scrollTop;
    text.value += ('X:' + mouseX + ' Y:' + mouseY + ' Time:' + new Date + '\n');
}