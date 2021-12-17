/*

Destructuring Assignment (해체할당, 구조분해할당, 디스트럭쳐링)

*/
// 배열의 해체 할당

const colors = ['red', 'white', 'orange']

const [first, second, third] = colors;
const [, , th] = colors;

console.log(first, second, third, th)

// 객체의 해체 할당

// const iu = {
//     name : '아이유',
//     age : 25,
//     gender : 'female'
// }
// const {
//     name,
//     age,
//     gender
// } = iu

// console.log(name, age, gender)

const loginInfo = {
    device: {
        createAt: '2017-12-06T00:14:04+0000',
        deviceId: '000000000004Vx',
        deviceType: 'desktop'
    },
    user: {
        createAt: '2017-03-08T18:00:28+0000',
        email : 'pajang1515@daum.net',
        name: '이동명',
        nickname: 'gogogo',
        phoneNumber: '010-5540-1958'
    }
}
const {
    device: {
        createAt,
        deviceId,
        deviceType
    },
    device: deviceInfo,
    user: userInfo,
    user: {
        nickname
    },
    user: {
        createAt: userCreateAt,
        email,
        name
    }
} = loginInfo

console.log(deviceInfo)

// Default Parameter 와 연동

const phone = {
    name : 'Iphone',
    color : undefined
}

const {
    name: n,
    version: v = '6+', // default parameter
    color: c = 'silver' // default parameter
} = phone;

console.log(n, v, c)

// 사용 예

const deliveryProduct = {
    orderedDate : '2021-12-04',
    estimatedDate : '2021-12-03',
    status : '배송중',
    items : [
        {name: '사과', price: 10000, quantity: 3},
        {name: '배', price: 1500, quantity: 2},
        {name: '딸기', price: 2000, quantity: 4}
    ]
}

const {
    estimatedDate: esti,
    status,
    items: [, ...products]
} = deliveryProduct

console.log(esti, status, products)

// 인자에서 바로 객체로 받아버림
// defaultParameter 도 가능 
const getArea = ({width, height = 1}) => {
    console.log(width * height)
}

getArea({width: 10, a:100})

