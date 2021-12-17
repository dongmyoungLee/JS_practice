// 예제 30

var address = 'seoul'
var members = {}
var addFamily = function(age, name, role) {
    this.members[role] = {age, name}
}

var getHeadCount = function() {
    console.log(this)
    return Object.keys(this.members).length
}

var family = {address, members, addFamily, getHeadCount}

/* var family = {
    adress : 'seoul,
    members : {},
    addFamily = function(age, name role) {
        thls.members[role] = {age, name}
    }
    getHeadcount = function() {
        return Object.keys(this.members).length
    }
}
-> 원래는 이런 객체를 변수가 미리 선언되어있으면 위와 같은
경우로 할 수  있음

*/

family.addFamily(30, '최', '언트')
family.addFamily(31, '박', '오트')
family.addFamily(32, '김', '아트')


console.log(family.getHeadCount())

