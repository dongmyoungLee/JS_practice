/*

# Execution Context

- 함수를 실행할 때 필요한 환경정보를 담은 객체

# stack

제일 마지막에 들어온게 제일 먼저 빠지고
제일 먼저들어온게 마지막에 처리되는  자바스크립트의 방식

# Call stack

현재 어떤 함수가 동작중인지, 다음에 어떤함수가 호출 될 예정인지
등을 제어하는 자료구조

# Lexical Environment

어휘적, 사전적 환경

- 실행컨텍스트를 구성하는 환경 정보들을 모아 사전처럼 구성한 객체

Lexical Environment 는 다음 2개로 나뉘어 진다.

- environmentRecord (내부 기록 환경)

    현재 문맥의 식별자 정보
    
    - 현재 컨텍스트의 식별자 정보를 수집해서 environmentRecord
    에 담는 과정에서 Hoisting 이 발생

    - 실행컨텍스트의 맨위로 식별자를 끌어올린다 -> Hoisting
    - 함수 선언문은 전체를 끌어 올린다.
    - 실행컨텍스트가 실행되면 가장 먼저 하는일이 현재 컨텍스트에서 
    선언되어 있는 식별자들을 다 끌어올린다.
    

- OuterEnvironmentRefernce (외부 기록 환경)

    현재 문맥과 관련이 있는 외부 식별자 정보

    - SCOPE CHAIN 이 만들어진다.

- 변수의 유효범위

    외부로는 나갈 수 있는데 자기보다 더 안쪽으로는 들어갈수없음

 */
// 예제 1 )

var a = 1;
function outer() {
    console.log(a); 
    
    function inner() {
        console.log(a); 
        var a = 3;

    }
    inner(); 
    console.log(a); 
}
outer();
console.log(a); 

/* 
<전역 컨텍스트>
    1. 변수 a 할당 -> 함수 outer 선언 -> 변수 a 에 값 1 할당 -> outer 함수 호출 -> outer 컨텍스트 활성회
    
    <outer 컨텍스트>
        함수 inner 선언 -> environmentRecord 값 a 탐색 -> 없음 -> 바깥 전역컨텍스트에서 environmentRecord 값 a 탐색 후 값 1출력 -> inner 함수 호출 -> inner 컨텍스트 활성화
        
        <inner 컨텍스트>
            변수 a 선언 -> environmentRecord 값 a 탐색 후 undefined 출력 (es5 이기 때문 es6 의 let과 const는 허용하지 않음) -> 변수 a에 값 3 할당 -> inner 컨텍스트 비활성화 종료
        </inner 컨텍스트>
        
        outer environmentRecord 값 a 탐색 -> 없어서 전역 컨텍스트로 가서 a값을 받아와서 1출력 -> outer 컨텍스트 비활성화 종료
    </outer 컨텍스트>
    
    전역 컨텍스트 environmentRecord a의 값으로 1 출력 ->
    전역컨텍스트 비활성화 종료
</전역 컨텍스트>
*/