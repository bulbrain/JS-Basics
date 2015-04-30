/**
 * Created by georgi on 20.11.14.
 */
function displayProperties() {
    var arr = Object.getOwnPropertyNames(document);
    arr.sort();
    console.log(arr.join(('\n')));
}

displayProperties();