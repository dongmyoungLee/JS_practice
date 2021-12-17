let obj = {a:1, b:2, c:30, d:44, e:5}

let {a, c} = obj
// 여러개의 객체를 한꺼번에 가져 올 수 있음

console.log(`a -> ${a}`)
console.log(`c -> ${c}`)

let {a:newA=10, f:newF=5} = obj
// 기존 속성명의 값을 가져와 새로운 변수명으로 할당가능 F는 원래 값이 없으니 Default Parameter 로 적용
console.log(`newA -> ${newA}`)
console.log(`newF -> ${newF}`)

let arr = [1, 2, 30 ,44 ,5]

let [b1, c1, ...rest] = arr

console.log(`0) b1 -> ${b1}`)
console.log(`0) c1 -> ${c1}`)
console.log(`0) rest -> ${rest}`)

let [a1=10, f1=9] = [1];
console.log(`1) a1 -> ${a1}`)
console.log(`1) f1 -> ${f1}`)

function getArr() {
    return [1,2,3,4,5,6]
}
[a2, , , , , f2] = getArr()
console.log(`3) a2 -> ${a2}`)
console.log(`3) f2 -> ${f2}`)

