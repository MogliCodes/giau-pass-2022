

const windowHeight = window.innerHeight
const introEl = document.getElementById('intro')
const introElPosY = introEl.getBoundingClientRect().y
const introElHeight = introEl.clientHeight
const bgBlur = document.querySelector('.bg--blur')

const startPoint = windowHeight / 2
const endPoint = introElPosY + (introElHeight / 2)
const diff = endPoint - startPoint
// 844 => 100%
// 8.44 => 1%
// 1px => 0.12

console.log('start and end', startPoint, endPoint, diff)

window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY
    console.log(scrollTop)

    if(scrollTop >= startPoint && scrollTop <= endPoint) {
        bgBlur.style.opacity = (scrollTop - startPoint) / 100;
    }
})


