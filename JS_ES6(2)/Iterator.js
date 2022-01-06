/*
Iterator

-> 반복을 위해 설계된 특별한 인터페이스를 가진 객체

1. 객체 내부에는 next() 라는 메소드가 있는데,
2. 이 메소드는 value 와 done 프로퍼티를 지닌 객체를 반환한다.
3. done 프로퍼티는 boolean 값이다.

*/

// iterator 예시

const iter = {
    items : [10, 20, 30],
    count : 0,
    next() {
        const done = this.count >= this.items.length
        return {
            done,
            value: !done ? this.items[this.count++] : undefined
        }
    }
}

console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())