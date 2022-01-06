/*

Generator

1. 중간에서 멈췄다가 이어서 실행할 수 있는 함수.

2. function 키워드 뒤에 * 을 붙여 표현하며, 함수 내부에서는 yield 키워드를 활용한다.

3. 함수 실행 결과에 대해 next() 메소드를 호출할 때 마다 순차적으로 제너레이터 함수 내부의 yield 키워드를 만나기전까지 실행하고, yield 키워드에서 일시정지 된다

4. 다시 next() 메소드를 호출하면 그 다음 yield 키워드를 만날때까지 함수 내부의 내용을 진행하는 식이다.


*/

function* generator() {
    console.log(1)
    yield 1
    console.log(2)
    yield 2
    console.log(3)
}

const gen = generator()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

// 함수선언문
function* gene1() { yield }

// 함수표현식
const gene = function* () { yield }

// 메소드 축약형
const obj = {
    gene1 : function() { yield },
    *gene2 () { yield }
}

// 클래스
class A {
    *gene () { yield }
}

// iterator 로서의 generator
const obj1 = {
    a : 1,
    b : 2,
    c : 3,
    *[Symbol.iterator] () {
        for (let prop in this) {
            yield [prop, this[prop]]
        }
    }
}

console.log(...obj1)

