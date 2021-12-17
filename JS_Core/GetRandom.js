Array.prototype.rand = function() {
    let index = Math.floor(this.length * Math.random());
    return this[index];
}

let arr = new Array('seoul', 'new york', 'ladarkh', 'busan', 'Tsukuba');

let Num = new Array(1,2,3,4,5,6,7,8,9,10);

document.write(Num.rand()+"<br>")
document.write(arr.rand())



