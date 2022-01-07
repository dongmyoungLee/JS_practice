// 외부 동작에 의해서도 슬라이드 전환이 이루어졌으면 좋겠다는 요구사항에 대한 대응 -> 차라리 prototype 활용하여 이런식으로 개편
// 메소드를 각자 다 들고 다닐 필요는 없는건 좋지만 각 프로퍼티에 대한 정보가 외부로 유출되는 단점이 있음
// 또한 slide 요소를 외부에서 접근할 수 있음. 접근 하는 순간 무언가 방어 해주는 방어 로직이 필요함

function Slide($target, slideData) {
    const frag = document.createDocumentFragment()
    const $slide = document.createElement('div')

    this.$container = document.createElement('ul')
    this.currentIndex = 0
    this.slideData = slideData

    $slide.className = 'slide'
    this.$container.className = 'slide__container' 

    this.$container.style.width = slideData.length * 100 + 'px'

    slideData.forEach((v, i) => {
        const $li = document.createElement('li')
        $li.className = 'slide__item'
        $li.innerText = v
        this.$container.appendChild($li)
    })

    $slide.appendChild(this.$container)

    $slide.addEventListener('click', this.triggerClick.bind(this))

    frag.appendChild($slide)
    $target.appendChild(frag)
}

Slide.prototype.triggerClick = function(e) {
    e && e.preventDefault()
    this.currentIndex = (this.currentIndex + 1) % this.slideData.length
    this.$container.style.left = -100 * this.currentIndex + 'px'
}

document.body.innerHTML += '<div id="a"></div><div id="b"></div><div id="c"></div><div id="d"></div><div id="e"></div>'

const slide1 = new Slide(document.getElementById('a'), [1,2,3,4,5])
const slide2 = new Slide(document.getElementById('b'), ['a', 'b', 'c', 'd', 'e'])
const slide3 = new Slide(document.getElementById('c'), ['A', 'B', 'C', 'D', 'E'])

console.log(slide3)