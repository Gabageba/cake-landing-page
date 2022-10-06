let position = 0
let activeItem = 0
const slidesToShow = 3
const slidesToScroll = 1
const container = document.querySelector('.review-slider-container')
const track = document.querySelector('.review-slider-track')
const item = document.querySelector('.review-slider-item')
const btnPrev = document.querySelector('.swipe-button-left')
const btnNext = document.querySelector('.swipe-button-right')
const itemWidth = document.querySelector('.review-slider-item').clientWidth
const items = document.querySelectorAll('.review-slider-item')
const itemsCount = items.length

btnNext.addEventListener('click', () => {
  if (position - itemWidth < -(itemWidth * (items.length - 1))) {
    position = 0
    resetActiveItem()
    activeItem = 0
  } else {
    position -= itemWidth
    resetActiveItem()
    activeItem++
  }
  setPosition()
  setActiveItem()
})

btnPrev.addEventListener('click', () => {
  if (position + itemWidth > 0) {
    position = -(itemWidth * (items.length - 1))
    resetActiveItem()
    activeItem = items.length - 1
  } else {
    position += itemWidth
    resetActiveItem()
    activeItem--
  }
  setActiveItem()
  setPosition()
})

const setPosition = () => {
  track.style.transform = `translateX(${position}px)`
}

const setActiveItem = () => {
  items[activeItem].style.opacity = 1
  items[activeItem].style.scale = 1
}

const resetActiveItem = () => {
  items[activeItem].style.opacity = 0.1
  items[activeItem].style.scale = 0.8
}

setActiveItem()
