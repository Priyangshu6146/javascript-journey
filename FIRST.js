//                                                        Loops()

// let i = 1;
// do {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
//     i++;
// } while (i <= 100);
// let n = 1000;

// let num = prompt("Enter the number under 2000");

// while (num != n) {
//     num = prompt("You entered wrong number.Guess again:");
// }
// console.log("Congralution");
// let n = 1000;

// let num = prompt("Enter the gamenumber");
// for (let i = 1; i <= 1; i++) {
//     if (num == n) {
//         console.log("win");
//     } else {
//         console.log("Better luc but next time");
//     }

//------------------------------X------------------------------X------------------------------X------------------------------X

//                                                       String[]


// let str = "Priyangshu";
// let str2 = 'Ghosh';
// console.log(str[n]);
//Template Literals

// let sent = `The sum of ${1 + 2 + (3 * (4 / 1))}`;
// console.log(sent);
// let str1 = "helpppp";
// // let str2 = "\tGhosh"
// console.log(str1.charAt(0));
// let username = prompt("Enter the name");
// let username2 = username.split(' ', 1);
// let username3 = username.length;
// console.log("@" + username2 + username3);
// let str = "Priyangshu Ghosh";
// let part = str.split();// ['Priyangshu Ghosh']
// let part1 = str.split("");//['P','r','i','y','a','n','g','s','h','u',' ','G','h','o','s','h']
// let part2 = str.split(" ");//['Priyangshu', 'Ghosh']
// let part3 = str.split(",");//['Priyangshu Ghosh']
// let part4 = str.split("", 5);//['P','r','i','y','a']
// let part5 = str.split(" ", 5);//['Priyangshu', 'Ghosh']
// let part6 = str.split("")[0];//P
// let part7 = str.split(" ")[0];//Priyangshu
// //Substring
// let part8 = str.substring(0, 5);//Priya
// let part9 = str.substring(5, 0);//Priya
// let part10 = str.substring(0)//Priyangshu Ghosh
// let part11 = str.substring(0, 5)[0];//P
// console.log(part11);

//------------------------------X------------------------------X------------------------------X------------------------------X

//                                                Arrays[]    18 June 2026


// let heros = ["Ironman", "batman", "hulk"];
// for (let i = 0; i < heros.length; i++) {
//     console.log(i);
// }
//let heroes = ["ironman", "Badman", "king"];
//For loop
// for (let i = 1; i <= heroes.length; i++) {
//     console.log(heroes[i - 1]);
// }
// for of loop
// for (let hero of heroes) {
//     console.log(hero);
// }
//let cities = ["Kolkata", "Mumbai", "Cheenni", "Hyderabad", "Bhubneswar"];
// for (let city of cities) {
//     console.log(city);
// }
// for (let city = 0; city < cities.length; city++) {
//     cities = cities[city];
//     console.log(cities.toUppercase());
// }
// for (let city of cities) {
//     console.log(city.toUpperCase());
// }
// let Items = [250, 645, 300, 900, 50];
// for (let i = 0; i < Items.length; i++) {
//     let offer = ((Items[i] * 10) / 100);
//     Items[i] -= offer;
//     console.log("Applying Offer=", Items[i]);
// }
// let marks = [85, 97, 44, 37, 76, 60];
// let mark = 0
// for (let i = 0; i < marks.length; i++) {
//     mark = mark + marks[i];
// }
// let Average = mark / marks.length
// console.log("Average marks of the entire class=", Average);
//let veggies = ["Pototo", "Tamato", "Peas", "Cabbage", "Brinjal"];

//Push() Method.

//veggies.push("Chilli", "Pickel", "Green Chilli");

//Pop() Method.

// let deletedItem = veggies.pop();
// console.log(veggies);
// console.log("Deleted", deletedItem);

//toString() Method

// console.log(veggies);
// let marks = [96, 45, 56, 75, 89];
// console.log(marks.toString());

//concat() Method
//let marvalHeroes = ["Ironman", "Spiderman", "Hulk", "Antman", "Dr.Strange"];
// let dc_Heroes = ["Superman", "Speed", "Batman"];
// let heroes = marvalHeroes.concat(dc_Heroes);
// console.log(heroes);

//Unshift() Method
// marvalHeroes.unshift("Antman")
// console.log(marvalHeroes);

//shift() Method
// let heroes = marvalHeroes.shift();
// console.log(marvalHeroes);

//Slice() Method

//console.log(marvalHeroes.slice(1, 3));

//Splice() Method
// let Number = [1, 2, 3, 4, 5, 6, 7];
// Number.splice(2, 2, 101, 102);
// console.log(Number);
// Number.splice(2, 0, 105);
// console.log(Number);
// Number.splice(2, 1);
// console.log(Number);
// Number.splice(4);
// console.log(Number);
// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// companies.shift();
// console.log(companies);
// companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// companies.splice(2, 1, "Ola")
// console.log(companies);
// companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// companies.push("Amazon");
// console.log(companies);

//------------------------------X------------------------------X------------------------------X------------------------------X

//                                                Function()    24 June 2026


// function name() {
//     console.log("My name is Priyangshu");// (4) Priyangshu
//     console.log("My age is ");// (4) 19
// }

// for (let i = 0; i < n; i++) {
//     name(); //
// }

// function name(n) {
//     console.log(n);
// }
// name();// Undefined
// name(100);// 100

// function name(n, msg) {
//     console.log(n + msg);//100Priyangshu
// }
// name(100, "Priyangshu");

// function name(n, msg) {
//     console.log(n * msg);//  NaN(Not a Number)
// }
// name(100, "Priyangshu");

// function sum(a, b) {
//     let Add = a + b;
//     console.log("Sum =", Add);
//     return Add;
// }
// sum(4, 5); //9

// function sum(a, b) {
//     let Add = a + b;
//     console.log("Before return");
//     return Add;
//     console.log("After return");
// }
// let val = sum(4, 5);
// console.log(val); // 9

// function sum(x, y) {
//     sum = x + y;
//     console.log(sum); // 7
//     return sum;
// }
// sum(3, 4);
//  console.log(x); // error: x is not defined

// Arrow Function
// let sum = (a, b) => {
//     console.log(a + b); //9
// }
// sum(4, 5);

//Multiplication
// let mul = (x, y) => {
//     return x * y; // we have to pass calling value in inspect to get the value of x & y
// }
// mul(3, 4); // this don't work because there is no console.log() in the function defination.

//Arrow variable
// let mul = (x, y) => {
//     return x * y;// 5
// }
// mul = 5;// because mul is a variable now and we can aasign a value to it. So, the function is no longer valid and we can't call it anymore.

//print anything without parameter
// let hello = () => {
//     console.log("hello");// hello ,here we can call the function without passing any parameters.
// }

// function vowels(name) {
//     let Vowels = 0;
//     for (let i = 0; i < name.length; i++) {
//         if (name[i] === "a" || name[i] === "e" || name[i] === "i" || name[i] === "o" || name[i] === "u") {
//             Vowels += 1;
//         } else if (name[i] === "A" || name[i] === "E" || name[i] === "I" || name[i] === "O" || name[i] === "U") {
//             Vowels += 1;
//         }
//     } console.log(Vowels);
//     return Vowels;
// }
// vowels("PRIYANGSHU ghosh");


// let vowels = (str) => {
//     let Vowel = 0
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === "a" || str[i] === "e" || str[i] === "o" || str[i] === "i" || str[i] === "u") {
//             Vowel++;
//         }
//     }
//     console.log(Vowel);
//     return Vowel;
// }
// vowels("anshu");

// ForEach loop in Array[]
// function abc() {
//     console.log("Hello");
// }
// function num(abc) {
//     return abc;
// }
// num(abc());

// let arr = [1, 2, 3, 4, 5];

// arr.forEach(function abc(val) { // Value means value at each index it print
//     console.log(val);
// })

// let arr = ["Delhi", "Mumbai", "Kolkata"];

// arr.forEach((val) => {
//     console.log(val);
// })

// let arr = ["Delhi", "Mumbai", "Kolkata"];

// arr.forEach((val) => {
//     console.log(val.toUpperCase());
// })


// let arr = ["Delhi", "Mumbai", "Kolkata"];

// arr.forEach((val, index, arr) => {
//     console.log(val, index, arr);
// })

//let arr = [1, 2, 3, 4, 5, 6]

// arr.forEach((val, idx) => {
//     console.log(val * val, idx);
// })

// let calculate = (num) => {
//     console.log(num * num);
// }
// arr.forEach(calculate);

//Map Method
// let arr = [1, 2, 3, 4];
// let newArr = arr.map((val) => {
//     return val;
// })
// console.log(newArr); // [1,2,3,4]

// Filter Method
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newArr = arr.filter((val) => {
//     return val % 2 == 0;
// })
// console.log(newArr); //[2,4,6,8]

// Reduce Method

// let arr = [1, 2, 3, 4];
// let newarr = arr.reduce((first, second) => {
//     return first + second;
// })
// console.log(newarr); // 10

// let arr = [2, 8, 10, 6, 3, 9, 15, 28];
// let newarr = arr.reduce((first, second) => {
//     return first > second ? first : second;
// })
// console.log(newarr);

// let marks = [50, 70, 90, 75, 69.5, 90, 90.2, 89.99];
// let newMarks = marks.filter((val) => {
//     return val >= 90;
// })
// console.log(newMarks);

// let n = prompt("Enter the value of n");
// let arr = []
// for (let i = 1; i <= n; i++) {
//     arr.push(i);
// }
// console.log(arr);

// let sum = arr.reduce((First, Second) => {
//     return First + Second;
// })
// console.log("Total sum of the array=", sum);

// let prod = arr.reduce((first, second) => {
//     return first * second;
// })
// console.log("Total product of the array=", prod);

//------------------------------X------------------------------X------------------------------X------------------------------X

//                                                   DOMS    27 June 2026
// console.log(window);
// console.dir(document.body);
// console.log(document.body)
// console.dir(document.body.childNodes[1]);

//DOM MANUPLUTION
//1.Selecting By ID
// let button = document.getElementById("head");
// console.dir(button);

//Selecting By Class
let headings = document.getElementsByClassName("heading-class");
console.dir(headings);
console.log(headings);

// Selecting By Tags
let para = document.getElementsByTagName("p");
console.dir(para);

//Selecting By Query
let element = document.querySelectorAll(".heading-class");
console.dir(element);

//Properties - check,change & update the value 
//tagName
let para = document.querySelector("p");
console.dir(para.tagName);

//innerText
console.dir(document.body.firstChild);
let div = document.querySelector("div").children;
console.log(div);

//firstChild Node
let p01 = document.getElementById("para-01");
console.log(p01.firstChild.nodeName);
