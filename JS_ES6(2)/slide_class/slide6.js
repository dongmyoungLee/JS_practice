// index 정보로 즉시 슬라이드 전환이 가능하게 해달라는 요구사항에 대응

const Slide = (() => {
    const CONTAINER = Symbol('container')
    const SLIDE_DATA = Symbol('SlideData')
    const CURRENT_INDEX = Symbol('currentIndex')
    const SLIDE_TO = Symbol('slideToIndex')

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
        
        [SLIDE_TO](index) {
            this[CURRENT_INDEX] = index
            this[CONTAINER].style.left = -100 * index + 'px'
        }

        set index(index) {
            index = index % this[SLIDE_DATA].length
            this[SLIDE_TO](index)
        }

        triggerClick(e) {
            e && e.preventDefault()
            this.index = this[CURRENT_INDEX] + 1
        }
    }
})()

document.body.innerHTML += '<div id="a"></div><div id="b"></div><div id="c"></div><div id="d"></div><div id="e"></div>'

const slide1 = new Slide(document.getElementById('a'), [1,2,3,4,5])
const slide2 = new Slide(document.getElementById('b'), ['a', 'b', 'c', 'd', 'e'])
const slide3 = new Slide(document.getElementById('c'), ['A', 'B', 'C', 'D', 'E'])

// slide1.index = 3