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

function* gene2() {
    yield* [1,2,3,4,5]
    yield
    yield* 'abcde'
}

const gen1 = gene2()
console.log(gen1.next())
console.log(gen1.next())
console.log(gen1.next())
console.log(gen1.next())
console.log(gen1.next())
console.log(gen1.next())
console.log(gen1.next())
console.log(gen1.next())
console.log(gen1.next())
console.log(gen1.next())
console.log(gen1.next())
console.log(gen1.next())

function* geneT() {
    let first = yield 1
    console.log(first)
    let second = yield first + 2
    console.log(second)
    yield second + 3
}

const genT = geneT()

console.log(genT.next())
console.log(genT.next(10))
console.log(genT.next(20))

/*

비동기 처리 예시

#원하는 작업

userId 가 1000번 이후인 데이터를 가져와서
그 중에 4번째 위치한 User 정보를 보고싶음

*/

// const ajaxCalls = () => {
//     const res1 = fetch.get('https://api.github.com/users?since=1000') 
//     const res2 = fetch.get(`https://api.github.com/user/${res1[3]}`) 
// }
// const m = ajaxCalls()

// server request 를 보내고, server에서 response 가 온다. 응답시간은 천차만별임.

// res1 에는 request 를 하자마자 바로 결과가 담긴다. 즉 response된 결과가 담기는게 아니라, 불필요한 데이터가 담긴다.

// 결국 위의 방식은 동기처리나 다름없음

/* 

콜백 방식의 비동기처리 ( JQuery )

    $.ajax({
        method: 'GET',
        url: 'https://api.gitgub.com',
        success: function(res) {
            const res2 = fetch.get(`https://api.github.com/user/${res1[3]}`)
        }
    })

*/

/*

Promise 방식의 비동기처리

fetch.get('https://api.github.com/users?since=1000')
.then(function (res) {
    const res2 = fetch.get(`https://api.github.com/user/${res1[3]}`)
})

*/

/* 

Generator 방식의 비동기처리

*/

const fetchWrapper = (gen, url) => fetch(url)
    .then(res => res.json())
    .then(res => gen.next(res))

function* getNthUserInfo() {
    const [gen, from, nth] = yield
    const req1 = yield fetchWrapper(gen, `https://api.github.com/users?since=${from || 0}`)
    const userId = req1[nth - 1 || 0].id
    console.log(userId)
    const req2 = yield fetchWrapper(gen, `https://api.github.com/user/${userId}`)
    console.log(req2)
}

const runGenerator = (generator, ...rest) => {
    const gen = generator()
    gen.next()
    gen.next([gen, ...rest])
}

runGenerator(getNthUserInfo, 1000, 4)
runGenerator(getNthUserInfo, 1000, 6)
