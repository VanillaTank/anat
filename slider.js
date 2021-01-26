    //слайдер  !!! РАБОТАЕТ ТОЛЬКО ДЛЯ 3 ЭЛЕМЕНТОВ !!!
    const arrows = document.querySelectorAll('.arrow');
    const sliderContainerInner = document.querySelectorAll('.sliderContainerInner');
    const paginItems = [...document.querySelectorAll(".pagin__item")];
    let currentIndex = 0;

    sliderContainerInner.forEach(item => {
        item.style.display = 'none';
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

    arrows.forEach(item => {
        item.addEventListener('click', (evt) => {
            let currentArrow = evt.target;
            if (evt.target.tagName == "IMG") {
                currentArrow = currentArrow.parentNode;
            }
            if (currentArrow.classList.contains('arrowNext')) {
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
            if (currentArrow.classList.contains('arrowPrew')) {
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
        })
    })