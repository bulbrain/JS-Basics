/**
 * Created by georgi on 13.11.14.
 */
function calcCilinderVol(arr) {
    var radius = arr[0];
    var height = arr[1];
    var volume = (Math.PI * radius * radius * height);
    console.log(volume.toFixed(3));
}

calcCilinderVol([2, 4]);
calcCilinderVol([5, 8]);
calcCilinderVol([12, 3]);