let obj = {}

for (let i = 0; i < 4; i++) {
    obj['key' + i] = i;
}

console.log(obj)

let profile = 'Lee:28'
let person = {
    [profile] : true,
    [profile.split(':')[0]]: profile.split(':')[1],
}
// 이런식으로 property 만들기 가능.
console.log(profile)
console.log(person)
