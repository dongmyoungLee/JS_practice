var value = 0;
var obj = {
    value : 1,
    setValue : function() {
        let a = 20;
        this.value = 2;
        // (function() {
        //     this.value = 3;
        //     console.log(this)
        // }).apply(obj);
        {
            let a = 10;
            this.value = 3
            console.log(this)
            // 함수 스코프 에서는 this가 전역객체를 바라보았지만 블럭스코프 안에서는 this 바인딩을 따로 하지 않아도 된다.
        }
    }
}
obj.setValue();
console.log(value)
console.log(obj.value)
console.log(obj)