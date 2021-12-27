const obj = (() => {
    const _privateMember1 = Symbol('private1')
    const _privateMember2 = Symbol('private2')
    return {
        [_privateMember1] : '외부에서 보이긴 하는데 접근할 방법이 마땅치 않네',
        [_privateMember2] : 10,
        publicMember1 : 20,
        publicMember2 : 30
    }
})()
console.log(obj)
// console.log(obj[Symbol('private1')]) 안됨
// console.log(obj[_privateMember1]) 안됨

for(const prop in obj) {
    console.log(prop, obj[prop])// public 만 출력
}

