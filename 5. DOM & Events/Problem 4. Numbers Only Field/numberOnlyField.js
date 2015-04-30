/**
 * Created by georgi on 23.11.14.
 */
 function numberOnlyField() {
    var input = document.getElementById('textF');
    input.addEventListener("keydown", check());

    function check() {
        var keyPressed = event.keyCode;
        if (keyPressed < 48 || keyPressed > 57) {
            input.disabled = true;
            input.style.backgroundColor = "red";

            var delay = 500;

            setTimeout(function () {
                input.style.backgroundColor = "white";
                input.disabled = false;
                input.focus();
            }, delay);
        }
    }
}