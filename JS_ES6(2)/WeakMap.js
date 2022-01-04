/*

1. 참조형 데이터만 key 로 설정할 수 있음.
2. size 불가
3. iterable 하지 않기 때문에 순회 불가
4. for of 사용 불가
5. keys ,value, entries 사용불가


*/

let obj1 = { a : 1 } // 참조 카운트 1
let map = new Map() 
map.set(obj1, 10) // 2
obj1 = null // 1


let obj2 = { b : 2 } // 1
const wmap = new WeakMap()
wmap.set(obj2, 20) // 1
obj2 = null  // 0 -> gc 대상

const keysArray = [{a:1}, [1,2,3], function() {}]

const wmap1 = new WeakMap()

keysArray.forEach((v, i) => {
    wmap1.set(v, i)
})

console.log(wmap1)

// privateMember 은닉화 만들기

const weakmapValueAdder = (wmap, key, addValue) => {
    wmap.set(key, Object.assign({}, wmap.get(key), addValue))
}

const Person = (() => {
    const privateMembers = new WeakMap()
    return class {
        constructor(n, a) {
            privateMembers.set(this, {name:n, age:a})
            console.log(privateMembers)
        }
        set name(n) {
            weakmapValueAdder(privateMembers, this, {name : n})
        }
        get name() {
            return privateMembers.get(this).name
        }
        set age(a) {
            weakmapValueAdder(privateMembers, this, { age:a})
        }
        get age() {
            return privateMembers.get(this).age
        }
    }
})()

const dm = new Person('동명', 30)
console.log(dm.name, dm.age, dm)

dm.age = 25
console.log(dm.name, dm.age, dm)
