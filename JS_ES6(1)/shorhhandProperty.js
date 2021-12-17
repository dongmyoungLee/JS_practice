/*


*/

// const converExtension = (fullFileName) => {
//     const fullFileNameArr = fullFileName.split('.')
//     const filename = fullFileNameArr[0]
//     const ext = fullFileNameArr[1] && fullFileNameArr[1] === 'png' ? 'jpg' : 'gif'
//     return {
//         filename,
//         ext
//     }
// }
// console.log(converExtension('bac.png'))

// 해체할당도 축약 가능

// const {
//     name,
//     age
// } = {
//     name:'지공',
//     age : 30
// }
// console.log(name, age)

// # concise methods ( 간결한 메소드 )
// 축약형 메소드는 프로토타입 기능이 사라지고 오로지 함수 본연의 기능만 사용이 가능하다. 뉴 생성자함수 사용불가함
var obj = {
    name: 'foo',
    getName: function () { return this.name },
    getName2 () { return this.name }
}

console.log(obj)

// # 상위 클래스의 메소드에 접근할수있는 super 메소드 가능

// # computed property (계산된 프로퍼티명)

let suffix = ' name'
let iu = {
    ['last' + suffix] : '이',
    ['first' + suffix] : '지은'
}
console.log(iu)

// # own property enumeration order ( 고정된 프로퍼티 열거 순서)

const obj1 = {
    c:1,
    2:2,
    a:3,
    0:4,
    b:5,
    1:6
}
const keys1 = []
for(const key in obj1) {
    console.log(key)
}

// 숫자가 먼저오고, 작은수에서 큰수로, 문자열이 입력된 순서 그대로 순서가 지정된다.

// 숫자인데 첫글자가 0 이 아닌 경우 -> 숫자로 인식

//  symbol 열거 대상 제외 이지만 열거를 할 수 있는 방법은 Reflect.ownkeys 사용하면 된다.

// 객체의 열거 순서 : 숫자를 asc , 문자열 입력된 순서, 심볼을 입력된 순서.

// 순서를 정확히 지키는 경우 : Object.getOwnPropertyName(), Reflect.ownKeys(), Object.assign()

// 순서를 보장하지 않는경우 : for in, Object.keys(), JSON.stringify()







