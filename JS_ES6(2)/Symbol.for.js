// public member 전역공간에서 공유되는 심볼

// 일반 Symbol() 로 만든 심볼은 매번 새로운걸 만들고, 이 값을 정확히 알아야만 다시 접근할 수 있지만 Symbol.for() 를 사욯아면 전역공간에서 공유되는 심볼을 만들 수 있음.

const a = Symbol.for('abc')
const b = Symbol.for('abc')
console.log(a === b) // true

const obj = (() => {
    const COMMON = Symbol.for('공유심볼')
    return {
        [COMMON] : '공유할 프로퍼티 키 값, 어디서든 접근가능'
    }
})()

console.log(obj)
console.log(obj[Symbol.for('공유심볼')]) // symbol 에 넣어준 원래 값만 알 수 있다면 이런식으로 값에 접근가능함

// 이런식으로 사용가능
const keys = ['apple', 'banana']

const Constants = {}

keys.forEach(v => {
    Constants[Symbol.for(v)] = v
})

console.log(Constants)


// 표준 심볼들

const str = '이 _ 문자열을 _ 이렇게 _ 나누어주었으면 _ 좋겠어.'
console.log(str.split(' _ '))

String.prototype[Symbol.split] = function (string) {
    let result = ''
    let residue = string
    let index = 0
    do {
        index = residue.indexOf(this)
        if (index <= -1) {
            break
        }
        result += residue.substr(0, index) + '/'
        residue = residue.substr(index + this.length)
    } while (true)

    result += residue
    return result
}

console.log(str.split(' _ '))

class Person {
    constructor (name) {
        this.name = name
    }
}
const dm = new Person('DM')
console.log(dm.toString()) // object object

Person.prototype[Symbol.toStringTag] = 'PERSON'

console.log(dm.toString()) // object PERSON