/*
-- Primitive Value (기본형 데이터) --

number, string, boolean, null, undefined, symbol

-- Reference Value (참조형 데이터) --

object, array, function, map, Set, WeakMap, WeakSet


# 가장 큰 차이

가지는 주소값에 값이 그대로 들어오느냐,
별개의 데이터가 다른곳에 또 있느냐 의 차이


# primitive value => 유일무이하고 고유한 존재.
# 비공개 멤버에 대한 needs 에서 탄생.
# 기본적인 열거 대상에서 제외
# 암묵적 형변환 불가
# new 연산자 불가능
# typeof 는 symbol로 출력가능

*/

// 매번 만들때 마다 새로워짐

const a = Symbol()
const b = Symbol()

console.log(a == b) // false
console.log(a === b) // false

// property 의 은닉화에 성공한 사례
const x = () => {
    const a = Symbol('a')
    const b = '계산된 프로퍼티'
    return {
        [a] : 10
        // 대괄호표기법 변수를 표현하기 위한것.
        // a : a -> 이렇게해주면 public 하게 가능
    }
}
const y = x()
// console.log(y.Symbol('a')) 불가능
// console.log(y.[Symbol('a')]) 불가능

//console.log(y.a)  이렇게 하면 접근가능

console.log(y) // 객체의 property 에 접근 할 수 없음.

const c = Reflect.ownKeys(y)
console.log(y[c[0]])
// 위와 같은 방법으로 접근은 가능하지만 객체가 항상 어떻게 되어 있을지 모르기 때문에 효과적인 방법이 아님. 이 수단을 제외 하고 본다면 접근할 수 있는 수단이 없는것과 다름없음


const NAME = Symbol('이름')
const GENDER = Symbol('성별')
const iu = {
    [NAME] : '아이유',
    [GENDER] : 'female',
    age : 26
}
const suzi = {
    [NAME] : '수지',
    [GENDER] : 'female',
    age : 26
}
const dm = {
    [NAME] : 'DM',
    [GENDER] : 'male',
    age : 28.9
}
console.log(iu[NAME], suzi[NAME], dm[NAME])

for(const prop in iu) {
    console.log(prop, iu[prop]) // 심볼열거안됨
}
// 등등 다른메소드들을 사용해도 열거안됨.





