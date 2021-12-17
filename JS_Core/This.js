/* 

# This Bainding 은 실행컨텍스트가 활성화 될 때 한다.

# This 란 함수가 호출 될 때 결정된다. 

# 따라서 This 란 코드만 보고 예측 할 수 있는게 아니라 이 함수를 어떤식으로 호출 했느냐에 따라서 This 는 얼마든지 달라 질 수 있음.

#1 전역공간에서의 This

    - 브라우저에서의 This 는 window 객체,
    Node.JS 에서는 global 객체이다.

#2 함수 호출에서의 This

    - 함수를 호출 할 때도 This 는 window 를 가리킨다.


#3 메서드 호출에서의 This

    - 메서드 호출 주체 (메서드명 앞) , 메소드 명의 점 바로 앞에 있는 주체가 this가 된다.

# callback 호출에서의 This

    - 기본적으로는 함수내부에서와 동일하다. 하지만 call 또는 apply 또는 bind 명령어로 this bainding 하였을 경우엔 This 의 주체가 달라질 수 있음.

# 생성자함수 호츨에서의 This 

    - New 키워드를 사용하였을 경우 This는 객체의 주체가 됨.


*/

function a(x, y, z) {
    console.log(this, x, y, z)
}

var b = {
    bb : 'bbb'
}

a.call(b,1,2,3);;  //{bb: 'bbb'} 1 2 3

a.apply(b, [1,2,3]); //{bb: 'bbb'} 1 2 3

var c = a.bind(b); //{bb: 'bbb'} 1 2 3
c(1,2,3)

// call 과 apply 의 첫번째 인자는 함수를 호출할때 this는 이것으로 하겠다 라는 명시적 this 바인딩 이다.

