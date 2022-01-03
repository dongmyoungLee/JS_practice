// reduce 를 사용한 중복 제거

const a = [1, 2, 3, 5, 4, 3, 2, 5, 4]

const b = a.reduce((a, cur) => {
    if (a.includes(cur)) {
        return a
    }
    // 없는경우에만 push 후 새로 반환
    a.push(cur)
    return a
}, [])

console.log(b)


// Set 을 사용한 중복 제거
// 중복을 제거한 값들로 이루어진 리스트가 됨.
// 추가, 삭제, 초기화, 요소의 총 개수, 포함여부확인 등 기능있음.

const c = new Set(a)
console.log(c)


// set 은 new 키워드를 사용해야만 함.
// index 를 부여받지는 않지만, 순서는 보장받음

const set = new Set()
set.add(5)
set.add('5')
// set.add(-0)
set.add(0)

console.log(set.size)
console.log(set.has(5))
console.log(set.delete(5))
console.log(set)

// 초기값 설정 가능
const s = new Set([1,2,3,4,5,6,7])
console.log(s)

// 펼치기연산자 가능
const ss = new Set([...s])
console.log(ss)

// map 은 key 값에 모든값이 올수있음
const map = new Map()
map.set('a', 1).set('b', 2).set({}, 3)

// 배열이 오는게 아니라 iterable 한 data가 올수있음
// 대표적인 iterable data => array, string, map, set
const set2 = new Set([...map])
console.log(set2)

// set 은 index 가 없음
// 각각의 요소를 뽑으려고 쓰는게 아닌 모든 요소를 순회하면서 어떠한 동작을 수행하고 싶을때 set을 사용함

s.forEach((key, value, ownerSet) => {
    console.log(key, value)
}, {})

// 중복제거 후 새로운 배열 만들기
const arr = [1,2,3,4,5,1,2,4,3,5,6]

const newArr = [...new Set(arr)]

console.log(newArr)

// 배열을 받아서 중복을 제거하는 함수
const makeUniqueArray = arr => [...new Set(arr)]

const arr1 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 2]

const newArr1 = makeUniqueArray(arr1)

console.log(newArr1)


/*

    Array 보다 Set 이 효과적으로 쓰일 수 있는 상황

    #1. 중복 제거
    #2. 전체 순회할 필요성이 있는 경우
    #3. 값의 유무 판단

    좋지 않은 경우

    #1. 특정 요소에 접근 해야할 경우
    #2. index 값이 필요한 경우

    
*/