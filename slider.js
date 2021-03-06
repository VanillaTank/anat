//слайдер  !!! РАБОТАЕТ ТОЛЬКО ДЛЯ 3 ЭЛЕМЕНТОВ !!!
const arrows = document.querySelectorAll('.arrow');
const sliderContainerInner = document.querySelectorAll('.sliderContainerInner');
const paginItems = [...document.querySelectorAll(".pagin__item")];
let currentIndex = 0;
let startX = 0;
let endX = 0;
const slideWidth = sliderContainerInner[0].clientWidth;

const swipeAction = (e) => {
    startX = e.clientX || e.changedTouches[0].clientX;
}

const swipeEnd = (e) => {
    endX = e.clientX || e.changedTouches[0].clientX;
    let distanceMove = startX - endX;
    if (Math.abs(distanceMove) > slideWidth * 0.25 && startX < endX) {
        prevSlide();
    } else if (Math.abs(distanceMove) > slideWidth * 0.25 && startX > endX) {
        nextSlide();
    }
}

sliderContainerInner.forEach(item => {
    item.style.display = 'none';
    item.addEventListener('touchstart', swipeAction);
    item.addEventListener('touchend', swipeEnd);
    item.addEventListener('mousedown', swipeAction);
    item.addEventListener('mouseup', swipeEnd);
});


paginItems.forEach(item => {
    item.classList.remove('pagin__item--active');
    item.addEventListener('click', (evt) => {
        paginItems.forEach(item => item.classList.remove('pagin__item--active'));
        sliderContainerInner[currentIndex].style.display = 'none';
        evt.target.classList.add('pagin__item--active');
        currentIndex = paginItems.indexOf(evt.target);
        sliderContainerInner[currentIndex].style.display = 'flex';
    })
});

sliderContainerInner[currentIndex].style.display = 'flex';
paginItems[currentIndex].classList.add('pagin__item--active');

const nextSlide = () => {
    if (currentIndex < sliderContainerInner.length - 1) {
        sliderContainerInner[currentIndex].style.display = 'none';
        paginItems[currentIndex].classList.remove('pagin__item--active');
        currentIndex++;
        sliderContainerInner[currentIndex].style.display = 'flex';
        paginItems[currentIndex].classList.add('pagin__item--active');

    } else {
        sliderContainerInner[currentIndex].style.display = 'none';
        paginItems[currentIndex].classList.remove('pagin__item--active');
        currentIndex = 0;
        sliderContainerInner[currentIndex].style.display = 'flex';
        paginItems[currentIndex].classList.add('pagin__item--active');
    }
}

const prevSlide = () => {
    if (currentIndex == 0) {
        sliderContainerInner[currentIndex].style.display = 'none';
        paginItems[currentIndex].classList.remove('pagin__item--active');
        currentIndex = 2;
        sliderContainerInner[currentIndex].style.display = 'flex';
        paginItems[currentIndex].classList.add('pagin__item--active');
    } else if (currentIndex > 0 && currentIndex <= 2) {
        sliderContainerInner[currentIndex].style.display = 'none';
        paginItems[currentIndex].classList.remove('pagin__item--active');
        currentIndex--;
        sliderContainerInner[currentIndex].style.display = 'flex';
        paginItems[currentIndex].classList.add('pagin__item--active');
    }
}

arrows.forEach(item => {
    item.addEventListener('click', (evt) => {
        let currentArrow = evt.target;
        if (evt.target.tagName == "IMG") {
            currentArrow = currentArrow.parentNode;
        }
        if (currentArrow.classList.contains('arrowNext')) {
            nextSlide();
        }
        if (currentArrow.classList.contains('arrowPrew')) {
            prevSlide();
        }
    })
})