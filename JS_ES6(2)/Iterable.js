/*

iterable 이란 내부 요소들을 공개적으로 탐색(반복)할 수 있는 데이터구조, [Symbol.iterator] 메소드를 가지고 있다.

개체 자신이 iterable 한 경우

1. array , map , set, string, generator 를 실행한 결과

*/

// iterable한 data 는 배열로 전환 가능

const arr = [1, 2, 3]
const map = new Map([['a', 1], ['b', 2], ['c', 3]])
const set = new Set([1, 2, 3])
const str = '문자열'
const gene = (function*() {
    yield 1
    yield 2
    yield 3
})()

console.log(Array.from(arr))
console.log(Array.from(map))
console.log(Array.from(set))
console.log(Array.from(str))
console.log(Array.from(gene))

// iterable 한 data 는 펼치기 연산자도 가능

console.log([...arr])
console.log([...map])
console.log([...set])
console.log([...str])
console.log([...gene])

// iterable 한 data 는 해체할당 가능

const [arrA, , arrC] = arr

console.log(arrA, arrC)

// iterable 한 data 로 for-of 문 사용가능
for(let x of [1,2,3]) {
    console.log(x)
}

const a = [
    new Promise((resolve, reject) => { setTimeout(resolve, 5000, 1)}),
    new Promise((resolve, reject) => { setTimeout(resolve, 1000, 2)}),
    3456,
    'abc',
    new Promise((resolve, reject) => { setTimeout(resolve, 3000, 3)})
]

Promise.all(a) // 받을 수 있는 인자는 iterable 한 data
    .then(v => { console.log(v) })
    .catch(err => { console.log(err) })


// generator - yield* 문법으로 이용가능 
const makeGenerator = iterable => function* () {
    /*
    yield 1
    yield 2
    yield 3

    과 같음
    */
    yield* iterable
}

const aGen = makeGenerator(arr)()

console.log(aGen.next())
console.log(aGen.next())
console.log(aGen.next())
console.log(aGen.next())

/* 

iterable 한 개체를 인자로 받을 수 있는 개체

1. new Map()
2. new Set()
3. new WeakMap() -> 자체는 iterable 하지 않지만 받을 수 있는 인자가 iterable 함
4. new WeakSet()
5. Promise.all()
6. Promise.race()
7. Array.from()

*/



