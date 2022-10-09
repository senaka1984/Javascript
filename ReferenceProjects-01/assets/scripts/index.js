
const person = [{ name: 'senaka', age: 10 }, { name: 'sithula', age: 20 }]

const myName = 'senaka';

const person1 = person.map((per) =>  {
    return {
    name: per.name,
    age: per.age,
    [myName]:
    }
});

person[0].name = 'thilini';

//console.log(person[0].name, person1[0].name)

const numbers = [1,2,3,4,5];

const sum = numbers.reduce((prevVal, currentVal, total) => {
    return prevVal + currentVal;
}, 0);

//console.log(sum);


const person3 = [...person1];

person1.push({name:'sadith', age:10});

person1[0].name='thilini';
console.log(person1);
console.log(person3);