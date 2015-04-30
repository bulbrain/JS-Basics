/**
 * Created by georgi on 22.11.14.
 */
function toggle() {
    if (document.getElementById('like').innerText == 'Like') {
        document.getElementById('like').innerText = 'Unlike';
    } else {
        document.getElementById('like').innerText = 'Like';
    }
}
