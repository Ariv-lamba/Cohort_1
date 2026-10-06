// a simple object look like 
const student = {
    name : "sonu",
    age : 24,
    degree : "b.tech", 
    cgpa : 7.84
};
console.log(student);
// an array of objects (students details) name students 
const students = [
    { name : "ariv",
        age : 19,
        height: 5.11
    },
    {
        name : "sonu",
        age : 24,
        height : 5.10
    },
    {
        name : "lamba",
        age : 26,
        height : 6.1
    },
    {
        name : "monu",
        age : 29,
        height : 5.9
    }
];
console.log(students );

// splice function is used to delete 1 object from array of object
students.splice(3, 1);

console.log(students );
// splice function is used to insert elements ( maybe 1 or multiple )
students.splice(0, 0, {
    name : "rinku",
    age : 14,
    height : 5.6

}, {
    name : "sunil",
    age : 47,
    height : 5.11
}, {
    name : "rajesh",
    age : 45,
    height : 5.7
});
console.log(students );
// splice is used to delete multiple elements 
//students.splice(3,3);
console.log(students );

// now 

// now try to use some map 

const arr = students.map(x=>x.name);
console.log(arr);
const checkage = students.filter(x => x.age>20);
console.log(checkage);