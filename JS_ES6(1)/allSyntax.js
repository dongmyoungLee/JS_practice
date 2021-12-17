// # if 문

{
    let a = 2
    if (a > 1) {
        let b = a * 3
        console.log(b)
    } else {
        let b = a / 3
        console.log(b)
    }
    //console.log(b) - ReferenceError
}
//console.log(b) -ReferenceError

// # Switch

let a = Math.ceil(Math.random() * 3)
switch(a) {
    case 1 : {
        let b = 10
        console.log(a + b)
        break
    }
    case 2 : {
        let b = 20
        console.log(a + b)
        break
    }
    case 3 : {
        let b = 30
        console.log(a + b)
        break
    }
}
// console.log(a, b) : ReferenceError

// # for문

var sum = 0
for(let i = 1; i <= 10; i++) {
    sum += i
}
console.log(sum)
// console.log(i) - ReferenceError