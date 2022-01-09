
//es5
function Person1 (name) {
    this.name = name
}

Person1.prototype.getName = function() { //prototype method
    return this.name
}

Person1.isPerson = function (obj) {//static method
    return obj instanceof this
}

const dm1 = new Person1('동명')

console.log(dm1.getName())
console.log(Person1.isPerson(dm1))
console.log(dm1)

//es6

class Person2 {
    constructor (name) {this.name = name}
    getName () {return this.name}
    static isPerson (obj) { return obj instanceof this}
}

const dm2 = new Person2('동명2')
console.log(dm2.getName())
console.log(Person2.isPerson(dm2))


// 클래스 리터럴

class Person3 { }
console.log(Person3.name)

// 기명 클래스 표현식

const Person4 = class Person4 { }
console.log(Person4.name)

// 익명 클래스 표현식

const Person5 = class { }
console.log(Person5.name)

// 클래스 TDZ

if(true) {
    class A { }

    const a = new A()

    if(true) {
        //const b = new A() // TDZ

        class A { }
    }
}

// const c = new A() -> ReferenceError 