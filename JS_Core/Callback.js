/*
    Callback 함수에서는 제어권을 넘겨준다 넘겨줘야 할 제어권에는
실행시점 , 매개변수, this 가 있음


# 실행시점


    -다른 함수(A) 의 인자로 콜백함수 (B) 를 전달 하면
    A가 B의 제어권을 갖게 된다.

    - 특별한요청 (bind) 가 없는 한 A에 미리 정해놓은 방식에 따라 B를 호출한다.

    - 여기서 미리 정해놓은 방식이란, 어떤 시점에 콜백을 호출 할 지, 인자에는 어떤 값들을 지정할지, this에는 무엇을 바인딩할지 등이다.



*/

let arr = ['딸기', '감', '배', '바나나', '새우']

let entries = []

                    // 콜백함수 item, index 순서.
arr.forEach(function(item, index) {
    entries.push([index, item, this[index]])
}, [10,20,30,40,50])
// this 의 0번째 요소가 마지막배열 0번째인자 10을 가리킨다
// this로 인식할 대상이 온다. (생략가능)
console.log(entries)


document.body.innerHTML = '<div id="a">click</div>';
let obj = { a : 1}
function cnFunc(x) {
    console.log(this, x);
    document.write(this, x)
}

document.getElementById('a').addEventListener('click', cnFunc.bind(obj))


let arr2 = [1,2,3,4,5];
let obj2 = {
    vals : [1,2,3],
    logValues : function(v, i) {
        if(this.vals) {
            console.log(this.vals, v, i)
        } else {
            console.log(this, v, i)
        }
    }
}

obj2.logValues(2,1)
arr2.forEach(obj2.logValues)
//arr2.forEach(obj2.logValues.bind(obj))
//arr2.forEach(obj2.logValues.bind(obj))
// this 바인딩
