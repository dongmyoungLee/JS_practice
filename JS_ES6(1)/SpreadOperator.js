/*

# spread operator (펼치기 연산자. 전개연산자) 


*/

var birds = ['eagle', 'pigeon']
var mammals = ['rabbit', 'cat']
var animals = birds.concat('whale').concat(mammals)

console.log(animals)

// concat 함수 없이 스프레드 오퍼레이터로 가능

const animals2 = [...birds, 'whale', ...mammals]
console.log(animals2)

const values = [10, 20, 30, 40, 50]
console.log(10, 20, 30, 40, 50)
console.log(...values)// -> spread operator 가능

// apply 는 첫번째 인자로 this 를 가지고 두번째 인자로 배열을 반환한다. 원래의 Math.max(values)는 배열을 받아들이지 못해 NaN이 출력되지만 apply를 통해 배열을 가져온다면 해결 가능하고 또한 spreadOperator 를 통해 해결도 가능하다.

console.log(Math.max.apply(null,values))
console.log(Math.max(...values))

const values2 = [3,4,5,6,7,8]
const sum = (...args) => args.reduce((p,c) => p + c)
console.log(sum(1,2, ...values2, 9, 10))

/*spreadOperator

getter : 나머지 / 받는 입장
setter : 펼치기 / 주는 입장

*/ 

/*

iterable(반복) 한 data 는 모두 활용할 수 있다.
배열처럼 인덱스가 있고 순서가 있는 데이터는 활용가능


얕은 복사만 가능.
*/

// const str = 'hello world!'
// console.log([...str])
// console.log(str.split(''))
