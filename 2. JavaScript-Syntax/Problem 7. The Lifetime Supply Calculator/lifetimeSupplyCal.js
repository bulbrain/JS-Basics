/**
 * Created by georgi on 13.11.14.
 */
function calcSupply(age, maxAge, food, foodPerDay) {
    var restAge = maxAge - age;
    var foodYear = foodPerDay * 365;
    var totalFood = foodYear * restAge;
    console.log(totalFood.toFixed(0) + 'kg of ' + food + ' would be enough until I am ' + maxAge + ' years old.');
}

calcSupply(38, 118, 'chocolate', 0.5);
calcSupply(20, 87, 'fruits', 2);
calcSupply(16, 102, 'nuts', 1.1);