/**
 * Created by georgi on 23.11.14.
 */
function hideOddRows() {
    var odd = document.body.querySelectorAll("tr:nth-child(odd)");
    for (i = 0; i < odd.length; i++) {
        odd[i].style.display = 'none';
    }
}