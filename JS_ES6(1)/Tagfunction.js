/*

tag 함수는 첫번째 인자로 string 타입을 배열로 반환해주고, 그 뒤로는 쭉 Number 타입을 반환한다.

무조건 string이 interpolation 보다 1개 더 많다.

*/
const tag = function(strs, arg1, arg2) {
    return {strs: strs, args: [arg1, arg2]}
}
const res = tag `순서가 ${1}이렇게 ${2}`
// console.log(res)

/*
const tags = (strings, ...expessions) => {
    console.log(strings, expessions)
}
const a = 'iu', b = 'Friday'
const str = tags `Hello, ${a}! Today is ${b}!!`
*/

const addSuffix = (strs, ...exps) => {
    return strs.reduce(function(acc, curr, i) {
        let res = acc + curr + '_suffix'
        if(exps[i]) {
            res += exps[i]
        }
        return res
    }, '')
}
// document.write(addSuffix `이 함수는 ${'각 문자열'}마다${'|_suffix|'}라는 글자를 추가합니다`)

const setDecimalSeperators = function(strs, ...args) {
    return args.reduce(function(p, c, i) {
        return p + strs[i] + (c + '').replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, '$&,')
    }, '') + strs[strs.length - 1]
}

const res1 = setDecimalSeperators `이 사과는 하나에 ${2000}원이고, 총 ${1234567}개를 구입하시면 총 ${2000 * 1234567}원 이에요<br>`
document.write(res1)

// # String.raw

console.log(`안녕하세요\n안녕하세요!`)
console.log(String.raw `안녕하세요\n안녕하세요!`)


