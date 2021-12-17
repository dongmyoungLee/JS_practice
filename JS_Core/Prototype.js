/*

intance.__proto__

intance.constructor

(Object.getPrototypeOf(instance)).constructor

Constructor.prototype.constructor

이들로 인해 Person.prototype 으로 접근 가능


*/

// function Person(n, a) {
//     this.name = n;
//     this.age = a;
// }

// let roy = new Person('로이킴', 10)

// console.log(roy)

// let royClone1 = new roy.__proto__.constructor('로이박', 15)
// console.log(royClone1)

// let royClone2 = new roy.constructor('로이최', 25)
// console.log(royClone2)

// let royClone3 = Object.getPrototypeOf(roy).constructor('롱리', 25)
// console.log(royClone3)

// let royClone4 = new Person.prototype.constructor('로이갓', 25)
// console.log(royClone4)

function Person(n, a) {
    this.name = n;
    this.age = a;
}

let roy = new Person('로이', 30);
let jay = new Person('제이', 25);

// roy.setOlder = function() {
//     this.age += 1;
// }
// roy.getOlder = function() {
//     return this.age;
// }
// jay.setOlder = function() {
//     this.age += 1;
// }
// jay.getOlder = function() {
//     return this.age;
// }
// Person.prototype.setOlder = function() {
//     this.age += 1;
// }
// Person.prototype.getAge = function() {
//     return this.age;
// }

// console.log(roy.getAge(), jay.getAge())

///////////////////////////////////////////////

// Prototype Chain

// function Ultra() {}
// Ultra.prototype.ultraProp = true;

// function Super() {}
// Super.prototype = new Ultra();

// function Sub() {}
// Sub.prototype = new Super();

// let o = new Sub();
// console.log(o.ultraProp);

/////////////////////////////////////////

// function Person1(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person1.getInfomation = function(instance) {
//     return {
//         name : instance.name,
//         age : instance.age
//     };
// }

// Person1.prototype.getName = function() {
//     return this.name;
// }

// Person1.prototype.getAge = function() {
//     return this.age;
// }

// let roy1 = new Person1('로이', 30)
// console.log(roy1.getName())
// console.log(roy1.getAge())
// console.log(Person1.getInfomation(roy))



// Person 

function Person(name, age) {
    this.name = name || '이름없음';
    this.age = age || '나이모름';
}
Person.prototype.getName = function() {
    return this.name;
}
Person.prototype.getAge = function() {
    return this.age;
}

// Employee

function Employee(name, age, position) {
    this.superClass(name, age);
    this.position = position || '직책모름';
}

// Employee 에 Bridge 연결 그리고 Bridge 와 Person  연결
var extendClass = (function() {
    function Bridge() {}
    return function(Parent, Child) {
        Bridge.prototype = Parent.prototype;
        Child.prototype = new Bridge();
        Child.prototype.constructor = Child;
        Child.prototype.superClass = Parent;
    }
})();
extendClass(Person, Employee);
Employee.prototype.getPosition = function() {
    return this.position;
}

let test = new Employee('DM', 25, '영업부');
console.dir(test)