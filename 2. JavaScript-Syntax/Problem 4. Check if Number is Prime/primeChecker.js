/**
 * Created by georgi on 12.11.14.
 */
function isPrime(number) {
    var p = 0;
    for(i = 2; i < number; i++) {
        if(number % i == 0) {
            p = p + 1;
        }
    }
    if(p == 0) {
        console.log("true");
    } else {
        console.log("false");
    }
}

isPrime(7);
isPrime(254);
isPrime(587);