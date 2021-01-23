window.onload = function () {
    //окрашивание элеманта списка навигации по клику
    const menuItem = document.querySelectorAll('.header__menu-item');
    const menuLink = document.querySelectorAll('.header__menu-link');
    menuItem.forEach(item => {
        item.addEventListener('click', (evt) => {
            menuItem.forEach(item => {
                item.classList.remove('header__menu-item--active');
            })
            menuLink.forEach(item => {
                item.classList.remove('header__menu-link--active');
            })

            let currentMenuItem = evt.target;
            if (currentMenuItem.tagName == "LI") {
                currentMenuItem.classList.add('header__menu-item--active');
                currentMenuItem.firstChild.classList.add('header__menu-link--active');
                window.location = currentMenuItem.firstChild.getAttribute("href");
            } else {
                let parentLi = currentMenuItem.parentNode;
                parentLi.classList.add('header__menu-item--active');
                currentMenuItem.classList.add('header__menu-link--active');
            }
        })
    })

    //слайдер
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
    //высоты заголовков в футере
    const exampleHeigth = document.querySelector('.header__logo-img').height;
    const footerTitle = document.querySelectorAll('.footer__item-title');
    footerTitle.forEach(item =>{
        value = exampleHeigth + 6;
        item.style.height = value + "px";
    })

    //гамбургер меню
        const hamburgerIcon = document.querySelector('.header__menu-gamberger');
        const headerMenu = document.querySelector('.header__menu')
        hamburgerIcon.addEventListener('click', () => {
            headerMenu.classList.toggle('header__menu--active');
        });

        document.querySelectorAll('.header__menu-link').forEach(item => {
            item.addEventListener('click', deleteClassActive)
            item.parentElement.addEventListener('click', deleteClassActive)
        })

        function deleteClassActive() {
            headerMenu.classList.remove('header__menu--active');
        } 



}
