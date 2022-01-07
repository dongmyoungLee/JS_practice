// 이미지 슬라이드를 한 페이지에 두개 이상 넣어야 하는 상황 대응

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

    $slide.addEventListener('click', e => {
        e.preventDefault()
        currentIndex = (currentIndex + 1) % slideData.length
        console.log(currentIndex)
        $container.style.left = -100 * currentIndex + 'px'
    })

    frag.appendChild($slide)
    $target.appendChild(frag)
}

document.body.innerHTML += '<div id="a"></div><div id="b"></div><div id="c"></div><div id="d"></div><div id="e"></div>'
buildSlide(document.getElementById('a'), [1,2,3,4,5])
buildSlide(document.getElementById('b'), ['a', 'b', 'c', 'd', 'e'])
buildSlide(document.getElementById('c'), ['A', 'B', 'C', 'D', 'E'])