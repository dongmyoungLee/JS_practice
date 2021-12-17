// const f = (x = 4, y = 5, z = 6) => { console.log(x,y,z) }
// console.log(undefined, 0, null)

// 할당되는 값 다 제대로 나오는데 할당되지 않은 값은 기본 파라미터 defaultParameter 로 지정됨

// undefinde 또는 누락된 파라미터에 대해서만 

// function 내부 인자에서도 let의 개념이 적용 되기 때문에
// (a = 1, b = c +1, c = 3) 이라고 해도 c 가 b 보다 늦게 선언되었기 때문에 TDZ 에 걸려 ReferenceError 를 범하게 됨.

// function a (a=1, b=a+1, c=3) {
//     console.log(a,b,c);
// }

// a(1,undefined,3)

// validation 가능

// const notValid = () => {
//     console.log('notValid Called.')
//     return 10
// }

// const sum = (x = notValid(), y = notValid()) => {
//     console.log(x + y)
// }

// Default Parameter 의 인자로서 변수의 값도 중복이 되어선 안된다 . 중복이 될 경우 TDZ에 걸림

// 유사배열객체 (array-like object) : 객체인데 , 각 프로퍼티의 키가 인덱스이고, length 라는 프로퍼티가 있는 객체

// ArrayFunction 은 Arguments 객체를 반환하지 않음.

// arguments 는 객체 이기 때문에 배열의 메서드는 사용불가.

// arguments 는 실제로 넘겨준 값에서만 종속된 녀석이다. ES6 이후로는 사용하지 않음.

// const a3 = function(a=1, b=2, c=3) {
//     console.log(arguments)
//     console.log(a,b,c)
// }

// a3()


/*

# Rest parameter ( 나머지 매개 변수 )

*/
// ... -> 해당변수가 넘어온 인자들을 모두 취합해서 배열로 받아들인다.

// ...z 만 받으면 arguments 를 대체 , 할당되는 값이 없다면 빈 배열을 반환

function f (a, b,...z) {
    var rest = Array.prototype.slice.call(arguments, 2)
    console.log(z)
}
f(1, 2, true, null, undefined, 10)
