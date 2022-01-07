// 외부 동작에 의해서도 슬라이드 전환이 이루어졌으면 좋겠다는 요구사항에 대한 대응

const buildSlide = ($target, slideData) => {
    const frag = document.createDocumentFragment()
    const $slide = document.createElement('div')
    const $container = document.createElement('ul')
    $slide.className = 'slide'
    $container.className = 'slide__container'

    let currentIndex = 0
    $container.style.width = slideData.length * 100 + 'px'
    slideData.forEach((v, i) => {
        const $li = document.createElement('li')
        $li.className = 'slide__item'
        $li.innerText = v
        $container.appendChild($li)
    })
    $slide.appendChild($container)


    const handleClick = e => {
        e && e.preventDefault()
        currentIndex = (currentIndex + 1) % slideData.length
        $container.style.left = -100 * currentIndex + 'px'
    }
    
    $slide.addEventListener('click', handleClick)

    frag.appendChild($slide)
    $target.appendChild(frag)

    return {
        triggerClick() {
            handleClick()
        } 
    }
}

document.body.innerHTML += '<div id="a"></div><div id="b"></div><div id="c"></div><div id="d"></div><div id="e"></div>'

const slide1 = buildSlide(document.getElementById('a'), [1,2,3,4,5])
const slide2 = buildSlide(document.getElementById('b'), ['a', 'b', 'c', 'd', 'e'])
const slide3 = buildSlide(document.getElementById('c'), ['A', 'B', 'C', 'D', 'E'])

