/*


객체의 단점

Iterable 하지 않다. (모든 요소를 순회할 수 없음)

for - in 문은 Iterable 한 것 처럼 보일 뿐.

hasOwnproperty 로 판단을 할 필요가 있음

unique 함을 완벽하게 보장하지 못함 


이러한 객체가 가진 단점을 보완한 새로운 데이터 타입이 Map 이다

1. [key, value] 쌍 (pair) 로 이루어진 요소의 집합.
2. 순서를 보장하며, iterable 하다.
3. 키에는 어떤 데이터타입도 저장할 수 있으며, 문자열로
취급하지 않는다.

*/

const map = new Map()
map.set(1, 10)
map.set(01, 20)
map.set('01', 30)
map.set({}, 30)

console.log(map)
console.log(map.size)
console.log(map.get(1))
console.log(map.has(01))

const arr = [[10, 147], ['10', 'value'], [false, true]]
// iterable 한 데이터 다 들어올 수 있음.
const map1 = new Map(arr)

console.log(map1)
console.log(map1.keys())
console.log(map1.values())
console.log(map1.entries())

const values = map1.values()
// 하나씩 꺼내고 더 꺼낼게 없을때 done : true
console.log(values.next())
console.log(values.next())

const mapArray1 = [...arr]

console.log(mapArray1)





