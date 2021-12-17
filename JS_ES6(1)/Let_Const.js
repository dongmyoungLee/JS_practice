let a = 1

function f() {
    // console.log(a,b,c) - a 만 전역컨텍스트 참조 후 출력 b,c는 안쪽 스코프에 있기 때문에 불가
        let b = 2
        // console.log(a,b,c) - a,b 만 출력
        if(true) {
            let c =3
            console.log(a,b,c)
        }
        // console.log(a,b,c) - a,b 만 출력
};
f()

/*

let 은 재선언 가능, 블럭스코프에 갇힌다 . TDZ 생김.

*/

var funcs = []

for(var i=0; i<10; i++) {
    funcs.push(function() {
        console.log(i)
        // 여기서 10만 나오는이유는 var i 는 전역변수이기 때문임
        // var 일 경우 1회차부터 i값은 10을 참조하게 됨.
        // let 일 경우 let은 지역변수이기 때문에 0부터 참조하게됨 전역에 값을 주지 않음.
    })
}
funcs.forEach(function(f) {
    f()   
})


/*

const 는 무조건 값을 할당해줘야 한다 , 재설정 안됨.
const 자체의 변수에는 접근 할 수는 없지만 그 변수가 참조하고 있는 객체의 프로퍼티 에는 접근이 가능하다.
참조형 데이터를 상수변수에 담는다해도 참조형 데이터의 값이 변하진 않는다.

하지만 안에 참조형 데이터 마저 상수로 만들고싶다 할 경우
freeze 라는 메서드를 사용하면된다.

1) 객체 자체를 얼리거나
2) 객체 내부의 프로퍼티를 순회하면서, 혹시 참조형이면, 1) 반복->재귀

얕은복사 

- 객체의 프로퍼티들을 복사 (depth 1단계 까지만)

깊은복사

- 객체의 프로퍼티들을 복사 (모든 depth에 대해서)

1) 프로퍼티들을 복사
2) 프로퍼티들 중에 참조형이 있으면, 1번반복 --> 재귀


*/

let a1 = {
    a : 1,
    b : [1,2,3],
    c : {a : 1, b : 2}
}

let b = Object.assign({}, a1) // 얕은복사
b.b = Object.assign([], a1.b); // 깊은복사 해줘야함 참조형 다

// 깊은 복사를 해야만 immutable (불변객체) 하다.

b.b[1] = 20
console.log(b)
console.log(a1)

// 반복문에서의 상수

var obj = {
    prop1: 1,
    prop2: 2,
    prop3: 3
}
// for문 괄호안에 있는 변수도 블럭스코프의 영역이다.
for(const prop in obj) {
    console.log(prop) // -> const 이지만 가능.
}

for(const i=0; i<5; i++) {
    console.log(i) // const 재할당 불가 for-in,for-of 문만 가능
}


/*

# let 과 const 의 공통사항

유효범위 존재, 범위는 블록스코프 내부이고, TDZ 가 걸림

 
*/



