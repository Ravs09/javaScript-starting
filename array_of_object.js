const student = [
    { id: 1, name: "Sakib", age: 19, marks: 33 },
    { id: 2, name: "Rakib", age: 15, marks: 30 },
    { id: 3, name: "Sobuj", age: 22, marks: 79 },
    { id: 4, name: "Raj", age: 24, marks: 10 },
    { id: 5, name: "Fahim", age: 22, marks: 55 }
];
// const items = student.map(student => {
//     return student.name;
// });
// console.log(items);

// const filter = student.filter(student => {
//     return student.name === "Sakib"
// })

// console.log(filter)

// const filter = student.filter(x => {
//     return x.id === 2;
// });

// console.log(filter);

// const find = student.find(mark=> mark.marks === 65);
// console.log(find)

// const block = student.filter(mark=> mark.marks !== 65);
// console.log(block);


// const result =student.filter(s=> {
//     return s.marks > 25 ;
// });
// console.log(result);

// const result =student.filter(s=> {
//     return s.marks < 25 ;
// });
// console.log(result);


// const result =student.filter(s=> {
//     return s.name.includes("a") ;
// });
// console.log(result);

const result =student.filter(s=> {
    return s.name.startsWith("R") ;
});
console.log(result);