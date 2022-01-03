// 참조카운트를 증가시키지 않는다.
const s = new WeakSet()

let o = {} // o 는 {} 를 참조한다 -> 참조 카운트 1
let o2 = o // o2는 o를 통해서 {} 를 참조한다 -> 참조카운트 2

/*

o2 = null // o2 에 null 이 들어가면서 -> {} 이 참조카운트 1로 변경

o = null // {} 는 참조 카운트가 0 이 된다. 그 말은 즉 
Garbage collector 의 수거 대상이 된다.

*/

s.add(o) // o라는 변수가 가리키는 {} 를 s 에 추가는 했지만 참조카운트는 여전히 1 이다.
o = null // {} 참조카운트 0 -> GC 수거대상

// .keys(), .values(), .entries(), .size, .firEach , for ...of 등등 내용을 순회하는 것들은 사용 불가함.

// add, delete, has 는 가능.

