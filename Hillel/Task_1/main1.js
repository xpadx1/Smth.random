const person1 = {
    age: 18,
    name:'Юрий Иванов'
}
const person2 = {
    age: 19,
    name: 'Дмитрий Кузьмин'
}
const person3 = {
    age: 16,
    name: 'Оксана Петрова'
}

 const average = (person1.age + person2.age + person3.age) / 3
document.write('<p>**************</p>');
document.write(
    `<p>Средний возраст студентов зарегестрировавшихся на вебинар: 
    <p> 1. ${person1.age} лет ${person1.name}</p>
    <p> 2. ${person2.age} лет ${person2.name}</p>
    <p> 3. ${person3.age} лет ${person3.name}</p></p>`)
document.write('<p>--------------</p>');
document.write(`Средний возраст студента: ${average}`);
document.write('<p>--------------</p>');
document.write('<p>**************</p>');