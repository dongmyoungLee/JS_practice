/*

Promise Status

unnsettled (미확정) 상태 : pending, thenable 하지 않다.

settled(확정) 상태 : resolved, thenable 한 상태

fulfilled (성공), rejected(실패)

const a = new Promise(function(성공시호출함수, 실패시호출함수) {
    (실제동작구현) 
})


*/

new Promise((resolve, reject) => {
    setTimeout(() => {
        if (false) {
            resolve('해결완료')
        } else {
            reject(Error('실패'))
        }
    }, 3000)
}).then(res => { //resolve
    // console.log(res)
}).catch(err => { // reject
    // console.log(err)
})

const promiseTest = (param, delay) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (param) {
            resolve('해결완료')
        } else {
            reject(Error('실패'))
        }
    }, delay)
})

const testRun = (param, delay) => promiseTest(param, delay)
    .then(text => {console.log(text)})
    .catch(error => {console.log(error)})

const a = testRun(true, 1000)
const b = testRun(false, 3000)


/*
다른 로직들이 많이 들어가있는 상태에서도...
저밑의 어딘가에서

a.then(res => {
    console.log(res)
})
*/