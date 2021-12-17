/*

블락 스코프 : block Scope = 블락에 의해 생기는 유효범위

{ } 에 의해서 변수의 유효범위가 결정된다.

var -> ES5

let, const -> ES6

# 예제 1

{
    let a = 10
    {
        let a = 20
        console.log(a) -> 20
    }
    console.log(a) -> 10
}
console.log(a) -> ReferenceError : a is not defined


*/

if(true) {
    let a = 10
    if(true) {
        console.log(a) // TDZ -> Temporal Dead Zone ( 임시 사각 지대 ) -> 변수가 선언되기 전에 실행이 나오면 그 부분은 전부 에러표시. 
        const a = 20
    }
    console.log(a)
}
console.log(a)

/*

# 호이스팅

기존 var 같은 경우 호이스팅을 한다.

1. 변수명만 위로 끌어 올린다.
2. undefined 를 할당한다.


# let 과 const 같은 경우도 변수명을 위로 끌어올리고 호이스팅을 하긴 한다. 다만 이전 var 과 같은 undefined 는 할당하지 않는다. 

*/