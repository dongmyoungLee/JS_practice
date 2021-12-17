// ArrowFunction 은 익명함수 일 수 밖에 없음
// calss 로 선언시 메서드의 이름이 name property로 자동할당된다

// # new.target

function Person (name) {
    console.dir(new.target)
    if (new.target !== undefined) {
        this.name = name
    } else {
        throw new Error('new 연산자 사용할 것')
    }
}
// new target 은 new 를 사용해서 만든 인스턴스를 가리킴
console.log(new Person('지공'))

class A {
    constructor () {
        console.log(new.target)
    }
}

class B extends A {
    constructor () {
        super()
    }
}

const b = new B()
const a = new A()

// use strict 를 쓴 상태에서 크롬에서는 블록스코프 안에 함수선언문이 갇힌다. firefox 같음. safari 도 같음

// 'strict mode' 가 아닌, 'sloppy mode' 에서는 브라우저 마다 다른 동작, 예상이 안됨.

// 'strict mode' : 함수선언문도 블락스코프에 갇힘.

/*
이러한 문제들을 해결하기 위해 결국엔 ES6+ 환경에서는 함수선언문을 쓰지 않는다. 그럼 뭘 쓰나?

Arron Function 을 사용한다. 
객체 에서는 메소드축약형을 사용한다.

생성자 함수를 쓸땐 class를 쓴다.

어떻게든 안쓰는 쪽으로 고민을 하고 작성을 하도록 한다.

*/


// a456(); <- 호이스팅 때문에 여기서도 실행이됨 ㅡㅡ
// function a456 () {
//     console.log('a');
// }
// a456();

// a457(); <- arrowFunction 사용
// const a457 = () => {
//     console.log('a')
// }
// a457();

