// 이미지 슬라이드를 만들라는 요구사항이 있을때 가장 먼저 구상하게 되는 소스

document.body.innerHTML = '<div></div>'
const $div = document.getElementsByTagName("div")[0]

const frag = document.createDocumentFragment()
const $slide = document.createElement('div')
const $container = document.createElement('ul')
$slide.className = 'slide'
$container.className = 'slide__container'

const slideData = [1, 2, 3, 4, 5]
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
$div.appendChild(frag)