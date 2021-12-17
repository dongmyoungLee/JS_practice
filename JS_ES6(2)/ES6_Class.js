class Cart {
    constructor() {
        this.store = {}
    }
    // constructor()
    // new 키워드를 통해 객체사 생성될때 호출됨.
    // 주로 매개변수에서 전달 받은 값을 속성으로 추가하거나, 속성의 초기값을 대입하는 초기화 과정을 주로 함.

    addProduct(product) {
        this.store[product.id] = product
    }

    getProduct(id) {
        return this.store[id]
    }
}

const cart1 = new Cart()
console.log(cart1)

cart1.addProduct({id:1, name:'노트북'})

console.log(cart1.store)

// 상속

class Chart {
    constructor(width, height) {
        this.width = width
        this.height = height
    }

    drawLine() {
        console.log('draw line')
    }
}

class BarChart extends Chart {
    constructor(width, height) {
        super(width, height)
    }

    draw() {
        this.drawLine()
        console.log(`draw ${this.width} X ${this.height} barChart`)
    }
}

const barchart1 = new BarChart(100, 100)


barchart1.draw()

