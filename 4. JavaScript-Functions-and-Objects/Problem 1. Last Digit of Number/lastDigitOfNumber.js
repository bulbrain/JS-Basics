/**
 * Created by georgi on 21.11.14.
 */
function lastDigitAsText(number) {
    number = Math.abs(number % 10);
    switch (number) {
        case 1 :
            number = 'One';
            break;
        case 2 :
            number = 'Two';
            break;
        case 3 :
            number = 'Three';
            break;
        case 4 :
            number = 'Four';
            break;
        case 5 :
            number = 'Five';
            break;
        case 6 :
            number = 'Six';
            break;
        case 7 :
            number = 'Seven';
            break;
        case 8 :
            number = 'Eight';
            break;
        case 9 :
            number = 'Nine';
            break;
        case 0 :
            number = 'Zero';
            break;
        default :
            number = 'Not a number';
            break;
    }
    console.log(number);
}

lastDigitAsText(6);
lastDigitAsText(-55);
lastDigitAsText(133);
lastDigitAsText(14567);