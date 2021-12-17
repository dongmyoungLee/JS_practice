/*
template literal

띄어쓰기,공백 그대로 가능 필요시에 trim 처리
*/

const a = 10
const b = 20

const str = `${a} + ${b} = ${a+b}`;

// console.log(str)

/*

# forEach

Array.prototype.forEach(callback, thisArg)

- callback : function (currentValue(필수), index, originalArray)
    - currentValue : 현재 값
    - index : 현재 인덱스
    - originalArray : 원본 배열

- thisArg : this 에 할당할 대상. 생략시 global 객체
*/

// const a3 = [1, 2, 3]
// a3.forEach(function(v, i, arr) {
//     console.log(v,i,arr,this)
// },[10, 20, 30])

/*

# map

Array.prototype.map(callback[, thisArg])

- callback : function (currentValue, index, [originalArray])
    - currentValue : 현재값
    - index : 현재 인덱스
    - originalArray : 원본배열

- thisArg : this에 할당할 대상 생략시 global 객체

# return 필수

*/
// const a1 = [1, 2, 3]
// const b1 = a1.map(function(v, i, arr) {
//     console.log(v, i, arr, this)
//     return this[0] + v
// }, [10])

// console.log(b1)


/* 

# reduce

Array.prototype.reduce(callback, initaValue)

- initiaValue : 초기값. 생략시 첫번째 인자 자동지정되며, 이 경우 CurrentValue 는 두번째 인자부터 배정된다.

- callback : function (accumulator(필수), currentValue(필수), [currentIndex], [originalArray])
    - accumulator : 누적된 계산값
    - currentValue : 현재값
    - currentIndex : 현재 인덱스
    - originalArray : 원본 배열

    # return 필수
*/
// const arr = [1, 2, 3]
// const res = arr.reduce(function(p, c, i, arr) {
//     console.log(p, c, i, arr)
//     return p + c
// }, 10)
// console.log(res)

// const no = [1,2,3,4,5,6,7,8,9,10]
// const yes = no.reduce((a, c) => { return a + c } );
// console.log(yes)



