
// 안전성을 위해 private 멤버 활용 (Symbol)
// key 값이 Symbol 이기 때문에 접근할 수 있는 방법이 마땅치않음

const Slide = (() => {
    const CONTAINER = Symbol('container')
    const SLIDE_DATA = Symbol('SlideData')
    const CURRENT_INDEX = Symbol('currentIndex')

    return class {
        constructor($target, slideData) {
            const frag = document.createDocumentFragment()
            const $slide = document.createElement('div')

            this[CONTAINER] = document.createElement('ul')
            this[CURRENT_INDEX] = 0
            this[SLIDE_DATA] = slideData

            $slide.className = 'slide'
            this[CONTAINER].className = 'slide__container'

            this[CONTAINER].style.width = slideData.length * 100 + 'px'
            slideData.forEach((v, i) => {
                const $li = document.createElement('li')
                $li.className = 'slide__item'
                $li.innerText = v
                this[CONTAINER].appendChild($li)
            })
            $slide.appendChild(this[CONTAINER])
            $slide.addEventListener('click', this.triggerClick.bind(this))

            frag.appendChild($slide)
            $target.appendChild(frag)
        }

        triggerClick(e) {
            e && e.preventDefault()
            this[CURRENT_INDEX] = (this[CURRENT_INDEX] + 1) % this[SLIDE_DATA].length
            this[CONTAINER].style.left = -100 * this[CURRENT_INDEX] + 'px'
        }
    }
})()

document.body.innerHTML += '<div id="a"></div><div id="b"></div><div id="c"></div><div id="d"></div><div id="e"></div>'

const slide1 = new Slide(document.getElementById('a'), [1,2,3,4,5])
const slide2 = new Slide(document.getElementById('b'), ['a', 'b', 'c', 'd', 'e'])
const slide3 = new Slide(document.getElementById('c'), ['A', 'B', 'C', 'D', 'E'])

// slide1.triggerClick()