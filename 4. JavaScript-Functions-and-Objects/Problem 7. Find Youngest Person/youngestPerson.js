/**
 * Created by georgi on 21.11.14.
 */
function findYoungestPerson(persons) {
    var minAge = persons[0].age;
    var mem;
    for (i = 0; i < persons.length; i++) {
        if (persons[i].age <= minAge) {
            minAge = persons[i].age;
            mem = persons[i];
        }
    }
    console.log('The youngest person is: ' + mem.firstname + ' ' + mem.lastname);
}

var persons = [
    { firstname : 'George', lastname: 'Kolev', age: 32},
    { firstname : 'Bay', lastname: 'Ivan', age: 81},
    { firstname : 'Baba', lastname: 'Ginka', age: 40}]
findYoungestPerson(persons);