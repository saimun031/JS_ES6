// var name = "saimun";
// console.log(naem);
// name = "babu";
// console.log(name);



// var listOfMovies = fetch("url.com/movies")
// console.log(listOfMovies)



// const event = new Promise((resolve, reject) => {
//     var name = "saimun";
//     if (name == "saimun") {
//         resolve();
//     }
//     else {
//         reject("Name was not saimun, name was: " + name);
//     }
// });
// event
//     .then((name) => {
//         console.log(name);
//     })

//     .catch((err) => {
//         console.log(err);
//     })
//     .finally(() => {
//         console.log("Promise Finished");
//     });



// const axios = require("axios");
// const data = axios.get("https://cat-fact.herokuapp.com/facts");
// data
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });



// const person = {
//     name: "saimun",
//     age: 25,
//     inMarried: false,
// };
// console.log(person);
// person.name = "babu";
// console.log(person);
// const person2 = { ...person }
// console.log(person2);
// const person3 = { ...person, age: 20, }
// console.log(person3);


// const user_map = {
//     1: { name: "saimun" },
//     2: { name: "babu" },
// }
// const usermap = new Map([
//     [1, { name: "saimun" }],
//     [2, { name: "babu" }],
// ])
// usermap.set({ userId: 1 }, { name: "sayed" })
// console.log(usermap);
// console.log(user_map[1]);
// console.log(user_map[2]);



// const people = [
//     {
//         name: "saimun",
//         age: 26,
//         occupation: "web developer"
//     },
//     {
//         name: "babu",
//         age: 25,
//         occupation: "student"
//     },
//     {
//         name: "sayed",
//         age: 27,
//         occupation: "cricketer"
//     }
// ];
//Map
// const names = people.map(person => {
//     return person.name;
// });
// console.log(names);

//Filter
// const overtwentyfive = people.filter(person => {
//     return person.age > 25;
// });
// console.log(overtwentyfive);

//Map + Filter
// const overtwentyfive = people.filter(person => {
//     return person.age > 25;
// }).map(person => {
//     return person.name;
// });
// console.log(overtwentyfive);

//Reduce
// const totalage = people.reduce((total, person) => {
//     return total + person.age;
// }, 0);
// console.log(totalage);



// const array = [1, 2, 3, 4, 23, 40, 5, 6, 50];
// // const newarray = [];
// // for (let i = 0; i < array.length; i++) {
// //     newarray.push(array[i] * 2);
// // }
// const newarray = array.map((number) => {
//     return number * 2;
// });
// console.log(array);
// console.log(newarray);



// Create a Map
// const fruits = new Map();
// // Set Map Values
// fruits.set("apples", 500);
// fruits.set("bananas", 300);
// fruits.set("oranges", 200);
// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
// ]);
// fruits.get("bananas");
// fruits.size;
// fruits.delete("apples");
// fruits.has("apples");
// console.log(fruits);
// List all entries
// let text = "";
// fruits.forEach(function (value, key) {
//     text += key + ' = ' + value + "\n";
// });

// let text = "";
// for (const x of fruits.entries()) {
//     text += x + "\n";
// }
// console.log(text);




// let number = [1, 2, 3, 4, 5, 6];
// let res = number.map((num) => {
//     return num * 2;
// });
// console.log(number);
// console.log(res);




// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // let res = number.find((currentvalue, index, arr) => {
// let res = number.filter((currentvalue, index, arr) => {
//     console.log(index);
//     console.log(arr);
//     return currentvalue > 4;
// });
// console.log(number);
// console.log(res);
// // print();




// var ge = "saimun";
// var ger = "Sayed";
// console.log(ger);
// let ger = "saimun";
// if (true) {
//     let ger = "say sayed";
//     console.log(ger);
// }
// console.log(ger);
// const gre = {
//     massage: "say saimun",
//     times: 4,
// }
// gre.massage = "hello"
// console.log(gre.massage)





// const nmbr = [1, -1, 2, 3];
// const fil = nmbr.filter(n => n => 0);
// console.log(fil);

// const nmbr = [1, -1, 2, 3];
// const fil = nmbr.filter(n => n => 0);
// const itm = fil.map(n => '<li>' + n + '</li >');
// console.log(itm);


// const nmbr = [1, -1, 2, 3];
// const fil = nmbr.filter(n => n => 0);
// const itm = fil.map(n => {
//     // const obj = { value: n };
//     // return obj;
//     return { value: n };
// });
// console.log(itm);

// const nmbr = [1, -1, 2, 3];
// const itm = nmbr.filter(n => n => 0).map(n => ({ value: n }));
// console.log(itm);

// const nmbr = [1, -1, 2, 3];
// const itm = nmbr.filter(n => n => 0).map(n => ({ value: n })).filter(obj => obj.value > 1);
// console.log(itm);

// const nmbr = [1, -1, 2, 3];
// const itm = nmbr.filter(n => n => 0)
//     .map(n => ({ value: n }))
//     .filter(obj => obj.value > 1)
//     .map(obj => obj.value);
// console.log(itm);




// function sum(x, y = 5) {
//     // take sum
//     // the value of y is 5 if not passed
//     console.log(x + y);
// }
// sum(5); // 10
// sum(5, 15); // 20

// const first_name = "Jack";
// const last_name = "Sparrow";
// console.log('Hello ' + first_name + ' ' + last_name);

// const first_name1 = "Jacks";
// const last_name1 = "Sparrows";
// console.log(`Hellow ${first_name1} ${last_name1}`);

// // before you would do something like this
// const person = {
//     name: 'Saimun',
//     age: 26,
//     gender: 'Male'
// }
// let name = person.name;
// let age = person.age;
// let gender = person.gender;
// console.log(name); // Sara
// console.log(age); // 25
// console.log(gender); // female


////////////   JS ES6   ////////////

// function hi() {
//     for (var i = 0; i < 5; i++) {
//         console.log(i);
//     }
// }
// hi();

// var counter = 5;
// function Name() {
//     var name = "sai";
//     console.log(name);
// }
// console.log(name);
// Name();

// const list = [1, 2, 3, 4, 5];
// for (/*var*/ let i = 0; i < list.length; i++) {
//     console.timeLog(i);
// }
// console.timeLog(i);


// const name = "sai";
// const age = 26;
// console.log(`Hi my name is ${name}, & my age is ${age}.`);


// function Book(title, author) {
//     return {
//         title,
//         author
//     };
// }
// var book = Book("Bangla", "saimun");
// console.log(book);


// const list = {
//     name: "List:",
//     items: ["milk", "rice"]
// };
// const { name, items } = list;
// console.log(name, items);


// const location1 = () => {
//     console.log("my location is unknown");
// };
// const location2 = location3 => {
//     console.log(`my location is ${location3}`);
// };
// location1();
// location2("Bangladesh");



// const user = {
//     name: "sai",
//     age: 26,
//     Name: function () {
//         console.log(`my name is ${this.name}`);
//         const fname = () => {
//             console.log(`my name is ${this.name} & my age is ${this.age}`);

//         };
//         fname();
//     }
// };
// user.Name();



// const add = (a = 1, b = 1) => {
//     console.log(a + b);
// };
// add();



// const list = ["milk", "eggs", "banana", "rice", "potato", "bread"];
// //foreach
// list.forEach(product => {
//     console.log(product + " nice");
// });

// const list = ["milk", "eggs", "banana", "rice", "potato", "bread"];
// //foreach
// list.forEach((product, index) => {
//     console.log(`the index is ${index} & the product is ${product}`);
// });

// const list = ["milk", "eggs", "banana", "rice", "potato", "bread"];
// //foreach
// //map
// const nlist = list.map(item =>
//     item + " new"
// );
// console.log(nlist);

// // const flist = list.filter(item =>
// //     item == "eggs"
// // );
// const flist = list.filter(item =>
//     item !== "eggs"
// );
// console.log(flist);




// class list {
//     constructor(item, nmbr) {
//         this.item = item;
//         this.nmbr = nmbr;
//     }
//     slist() {
//         console.log(this.item);
//     }
// }
// const mlist = new list(["milk", "eggs", "bread"], 3);
// // console.log(mlist);
// // mlist.slist();
// class Product extends list {
//     constructor(item, nmbr, amount, cost) {
//         super(item, nmbr);
//         this.amount = amount;
//         this.cost = cost;
//     }
// }
// const product = new Product(["rice", "candy", "chocklate"], 3, 2, 20);
// product.slist();
// console.log(product);




// const prom = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve(200);
//         resolve({ user: "sai", pass: "123456" });

//     }, 2000);
// });
// prom.then(date => {
//     console.log(date);
// });

// const prom = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(new Error("somthing wrong"));

//     }/*, 2000*/);
// });
// prom.then(date => {
//     console.log(date);
// })
//     .catch(err => console.log(err));




// let w = 6;
// if (true) {
//     let w = 5;
//     console.log(w);
// }
// console.log(w);
// let w = 20;
// for (let w = 1; w <= 10; w++) {

//     console.log(w);
// }
// console.log(w);


// let name = "saimun";
// let massage = `I am ${name} & I am learning JS ES6`;
// console.log(massage);



// const add = (a, y) => {
//     let sum = a + y;
//     console.log(sum)
// }
// add(15, 7);



// hoisting //
// e = 20;
// console.log(e);
// var e;

// e = 20;
// console.log(e);

// strict //
// "use strict"
// e = 20;
// console.log(e);



// default and rest parameter //

// default parameter //
// "use strict"
// function massage(text = "my name is saimun") {
//     console.log(`${text}`)
// }
// massage();
// massage("learning JS ES 6");


//rest parameter //
// "use strict"
// function sum(x, y, ...z) {
//     console.log(`x=${x}, y=${y},z=${z}`);
// }
// sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);




// spread oparator //

// function addnmbr(x, y, z) {
//     return x + y + z;
// }
// let nmbr = [1, 2, 3];
// console.log(addnmbr(...nmbr));


// function addnmbr(x, y, z) {
//     return x + y + z;
// }
// let nmbr = [1, 2, 3];
// // console.log(addnmbr(...nmbr));
// let nmbrs = [5, 6, ...nmbr, 7];
// console.log(nmbrs);


// function addnmbr(x, y, z) {
//     return x + y + z;
// }
// let nmbr = [1, 2, 3];
// // console.log(addnmbr(...nmbr));
// // let nmbrs = [5, 6, ...nmbr, 7];
// // console.log(nmbrs);
// let nmbr1 = [4, 5, 6];
// // let nmbr2 = [...nmbr, ...nmbr1];
// let nmbr2 = nmbr.concat(nmbr1);
// console.log(nmbr2);



// spread oparator & objects//

// let p1 = {
//     name: "saimun",
//     age: 26
// }
// let p2 = {
//     nationity: "banglideshi",
//     occupation: "Nothing"
// }
// let p = { ...p1, ...p2 }
// console.log(p);




// object literals //

// function info(name, age) {
//     return {
//         name,
//         age
//     }
// }
// console.log(info("saimun", 26));

//consize//
// function info(name, age) {
//     return {
//         name,
//         age
//     }
// }
// console.log(info("saimun", 26));
// // let massage = {
// //     body() {
// //         return `hi, I am object function`
// //     }
// // }
// // console.log(massage.body());
// let massage = {
//     'body name'() {
//         return `hi, I am object function`
//     }
// }
// console.log(massage['body name']());




// for-of & for-in loop //

// const names = [1, 2, 3, "a", "b", "c"];
// for (let name of names) {
//     console.log(name);
// }



// let student = {
//     id: 101,
//     name: "saimun",
//     cgpa: 3.42
// }
// for (let x in student) {
//     // console.log(x);
//     // console.log(student[x]);
//     console.log(`${x}: ${student[x]}`);

// }




// for Vs forEach //

// const nmbr = [10, 2, 30, 4, 5];
// for (let i = 0; i < nmbr.length; i++) {
//     console.log(nmbr[i]);
// }

// const nmbr = [10, 2, 30, 4, 5];
// nmbr.forEach(function (x) {  //anonymous function
//     console.log(x);
// });

// const nmbr = [10, 2, 30, 4, 5];
// const squernmbr = [];
// nmbr.forEach(function (x) {  //anonymous function
//     squernmbr.push(x * x);
// })
// console.log(squernmbr);

// const nmbr = [10, 2, 30, 4, 5];
// console.log(nmbr);
// nmbr.forEach(function (x, index, arr) {  //anonymous function
//     arr[index] = x + 5;
// })
// console.log(nmbr);




// map, filter //
// const nmbr = [10, 2, 30, 4, 5];
// console.log(nmbr);
// const squernmbr = nmbr.map(function (x) {
//     return x * x
// })
// console.log(squernmbr);

// const nmbr = [10, 2, 30, 4, 5, 30, 9, 50];
// console.log(nmbr);
// const squernmbr = nmbr.filter(function (x) {
//     return x > 10;
// })
// console.log(squernmbr);




// arrow function Vs tradional function //

// function dis1() {
//     console.log("display 1");
// }
// const dis2 = () => {
//     console.log("display 2");
// }
// dis1();
// dis2();

// function dis1() {
//     return "display 1";
// }
// const dis2 = () =>
//     // {
//     //     return "display 2";
//     // }
//     "display 2";
// console.log(dis1());
// console.log(dis2());



// function add(n, m) {
//     return n + m;
// }
// const add1 = (n, m) => n + m;
// console.log(add(19, 10));
// console.log(add1(1, 10));




// const student = [
//     {
//         id: 101,
//         name: "saimun",
//         gpa: 3.42
//     },
//     {
//         id: 102,
//         name: "babu",
//         gpa: 2.42
//     },
//     {
//         id: 103,
//         name: "sayed",
//         gpa: 4.00
//     },
//     {
//         id: 104,
//         name: "musfiquer",
//         gpa: 3.74
//     }
// ]
// function sname() {
//     return student.filter(function (x) {
//         return x.gpa > 3;
//     });
// }
// console.log(sname());

// function sname() {
//     return student.filter(function (x) {   //traditional function map & filter
//         return x.gpa > 3;
//     }).map(function (y) {
//         return y.name;
//     });
// }
// console.log(sname());

// const sname = () => {
//     return student.filter((x) => x.gpa > 3).map((y) => y.name); //arrow function map & filter
// }
// console.log(sname());




// array destructuring & object destructuring //

// let aa = 10, ba = 20;
// [aa, ba] = [ba, aa];
// console.log(aa);
// console.log(ba);




// const sinfo = {
//     id: 101,
//     fname: "saimun",
//     gpa: 3.42,
// }
// const { id, fname } = sinfo
// console.log(id)
// console.log(fname)
// console.log(sinfo.gpa)

// const sinfo = {
//     id: 101,
//     fname: "saimun",
//     gpa: 3.42,
//     language: { //nasted object destructuring
//         native: "bangla",
//         beginner: "english"
//     }
// }
// const { id, fname, language } = sinfo
// console.log(id)
// console.log(fname)
// console.log(sinfo.gpa)
// // console.log(language)
// console.log(language.native)


// destructuring function peramitars //

// const studentinfo = ({ id, name }) => {
//     console.log(`${id}, ${name}`);
// }
// const student = {
//     id: 101,
//     name: "saimun"
// }
// studentinfo(student);





// Array Methoeds //
// find  and find index //

// let nmbr = [1, 9, 3, 4, 5, 6, 7];
// let firstevennmbr = nmbr.find(x => x % 2 == 0);
// let firstevennmbrindex = nmbr.findIndex(x => x % 2 == 0);
// console.log(firstevennmbr);
// console.log(firstevennmbrindex);




// string methode //
// startswith(), endswith(), includes() //

// const message = "today is friday";
// console.log(message.startsWith('today'));
// console.log(message.endsWith('friday'));
// console.log(message.includes('is'));




// Module- export, import //

// import { text, setText } from './module.js'
// console.log(text)
// setText("goodbye")
// console.log(text)




// class- constructor, object, set, get //

// class student {
//     constructor(id, name) {
//         this.id = id;
//         this.name = name;
//     }
//     set studentname(name) {
//         this.name = name;
//     }
//     get studentinfo() {
//         return this.id + " " + this.name;
//     }
// }
// let s1 = new student(101, "saimun");
// console.log(s1);

// s1.studentname = "sayed";
// console.log(s1);

// console.log(s1.studentinfo);





// synchronous Vs asynchronous //

// const taskone = () => {
//     console.log("task1");
// }
// const loading = () => {
//     console.log("task2 data");
// }
// const tasktwo = () => {
//     setTimeout(loading, 2000);
// }
// const taskthree = () => {
//     console.log("task3");
// }
// const taskfour = () => {
//     console.log("task4");
// }
// taskone();
// tasktwo();
// taskthree();
// taskfour();



// const taskone = () => {
//     console.log("task1");
// }
// // const loading = () => {
// //     console.log("task2 data");
// // }
// const tasktwo = () => {
//     setTimeout(() => {
//         console.log("task2 data");
//     }, 2000);
// }
// const taskthree = () => {
//     console.log("task3");
// }
// const taskfour = () => {
//     console.log("task4");
// }
// taskone();
// tasktwo();
// taskthree();
// taskfour();





// callback & higher order function  //

// function square(x) {
//     console.log(`square of ${x}: ${x * x}`);
// }
// function higherorderfunction(num, callback) {
//     callback(num);
// }
// higherorderfunction(6, square);




// const taskone = (callback) => {
//     console.log("task1");
//     callback();
// }
// // const loading = () => {
// //     console.log("task2 data");
// // }
// const tasktwo = (callback) => {
//     setTimeout(() => {
//         console.log("task2 data");
//         callback();
//     }, 4000);
// }
// const taskthree = (callback) => {
//     console.log("task3");
//     callback();
// }
// const taskfour = () => {
//     console.log("task4");
// }
// // taskone(function f1() {
// //     tasktwo(function f2() {
// //         taskthree(function f3() {
// //             taskfour();
// //         });
// //     });
// // });
// taskone(() => {
//     tasktwo(() => {
//         taskthree(() => {
//             taskfour();
//         });
//     });
// });



// console.log("hi");
// document.querySelector(".jsbutton").addEventListener("click", () => {
//     console.log("button is clicked");
// })
// console.log("bye");




// promise //

// console.log("welcome");
// // how to creat promis- panding, resolve, reject
// const promise1 = new Promise((resolve, reject) => {
//     let completedpromise = true /* false */;
//     if (completedpromise) {
//         resolve("complite promise 1");
//     }
//     else {
//         reject("not complite promise 1");
//     }
// });
// const promise2 = new Promise((resolve, reject) => {
//     resolve("completed promise 2");
// });
// // console.log(promise1);
// // promise1.then((res) => {
// //     console.log(res);
// // })
// //     .catch(err => {
// //         console.log(err);
// //     });
// // promise2.then((res) => console.log(res));
// Promise.all([promise1, promise2]).then((res1, res2) => console.log(res1))
// console.log("end");




// promise chinning //

const taskone = () => {
    return new Promise((resolve, reject) => {
        resolve("task1 in complited");
    })
}
const tasktwo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("task2 in complited");
        }, 3000);
    });
};
const taskthree = () => {
    return new Promise((resolve, reject) => {
        reject("task3 is not complited");
    })
}
const taskfour = () => {
    return new Promise((resolve, reject) => {
        resolve("task4 in complited");
    })
}
// taskone().then((res) => console.log(res));
// tasktwo().then((res) => console.log(res));
// taskthree().then((res) => console.log(res));
// taskfour().then((res) => console.log(res));
taskone()
    .then((res) => console.log(res))
    .then(tasktwo)
    .then((res) => console.log(res))
    .then(taskthree)
    .then((res) => console.log(res))
    .then(taskfour)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
