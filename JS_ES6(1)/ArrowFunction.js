/*

ArrowFunction -> return 값만 있을 시 중괄호랑 return 문자 자체를 생략할 수 있음

인자가 하나 뿐이면 소괄호도 생략 할 수 있음.

*/

// var a = () => new Date()

// var b = a => a * a

// return 은 생략해도 되지만 객체임을 명시하는 뜻으로 괄호로 감싸줘야한다.
// var e = (x) => ({x : x})

// var f1 = function(a) {
//     return function(b) {
//         return a + b
//     }
// }

// var f = a => b => a + b;

// console.log(f(1)(2))

// 변수명의 맨 앞글자로 _ , $ 를 쓴다 . 관행적으로 함수안에서 실제로 쓰지 않을 인자다 라는 관행.

// 실행컨텍스트 생성시 this 바인딩을 하지 않는다.

// Arrow 함수는 기존 함수와 같이 함수 스코프이다. 다만 실행컨텍스트 생성시 this를 바인딩하지 않는다.

// const obj = {
//     a () {
//         console.log(this)
//         const b = () => {
//             console.log(this)
//         }
//         b()
//     }
// }
// obj.a()

const obj = {
    grades: [80, 90, 100],
    getTotal: function() {
        this.total = 0
        // 함수스코프 내에서의 this는 window였지만 ArrowFunction 으로 인해 this바인딩을 안함
        this.grades.forEach(v => {
            this.total += v
        })
    }
}
obj.getTotal()
console.log(obj.total)

// this가 바인딩되지 않기 때문에 this를 바꿀수없음
// call, 본연의 기능은 가능하지만 this바인딩만 되지않음

const a = () => {
    console.log(this)
}
a.call({a:1})

//

const sum2 = (...arg) => {
    console.log(this)
    return arg.reduce((p,c) => p + c)
}
console.log(sum2(1,2,3,4,5,6,7))

// super, arguments, new.target 도 반환하지 않음.

