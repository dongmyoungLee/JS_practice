// 외부 동작에 의해서도 슬라이드 전환이 이루어졌으면 좋겠다는 요구사항에 대한 대응 -> 차라리 prototype 활용하여 이런식으로 개편

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