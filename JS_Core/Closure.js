/*

A : 실행컨텍스트 B 내부함수

클로저란 - A의 Lexical environment 와 내부함수 B의 조합에서 나타나는 특별한 현상을 말함.

즉 , 컨텍스트 A에서 선언한 변수를 내부함수 B에서 참조할 경우 발생하는 특별한 현상이다.

컨텍스트 A에서 선언한 변수 a를 참조하는 내수함수 B를 
A의 외부로 전달할 경우, A가 종료된 이후에도 a가 사라지지 않는 현상.

클로저를 통한 가장 큰 이점

    - 함수 종료 후에도 사라지지 않는 지역변수를 만들 수 있음.


*/

var outer = function() {
    var a = 1;
    var inner = function() {
        return ++a;
    };
    return inner;
}

var outer2 = outer();
console.log(outer2());
console.log(outer2());

/////////////////////////////////////////


function user(_name) {
    var _logged = true;

    return { // return 이 되고 함수는 강제종료 되었기 때문에 다 사라져야할 변수들
        get name() {
            return _name
        },
        set name(v) {
            _name = v
        },
        login() {
            _logged = true
        },
        logout() {
            _logged = false
        },
        get status() {
            return _logged ? 'login' : 'logout';
        },
    }
}

//#  _name, _logged 함수 종료후에도 사라지지 않고 값을 유지하는 변수

// # 외부로 부터 내부 변수 보호 (캡슐화)

var roy = user('DM')
console.log(roy.name)
roy.name = 'jsay'
console.log(roy.logout())
console.log(roy.status)
