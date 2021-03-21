window.onload = function () {


    const testBTN = document.getElementById('testBTN');
    testBTN.addEventListener('click', () => {
        console.log('Мозила');
       location = "http://www.mozilla.org"
    })
    //окрашивание элеманта списка навигации по клику
    const menuItem = [...document.querySelectorAll('.header__menu-item')];
    const menuLink = [...document.querySelectorAll('.header__menu-link')];
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

    //переключение активного пункта меню по скролу
    const scrollBlocks = document.querySelectorAll('.isScroll');
    document.addEventListener('scroll', () => {
        scrollBlocks.forEach(item => {
            if (item.getBoundingClientRect().y <=  window.outerHeight / 4 && item.getBoundingClientRect().y + item.getBoundingClientRect().height >= window.outerHeight / 2) {
                let num = Number(item.dataset.scrol)
                menuItem.forEach(item => {
                    item.classList.remove('header__menu-item--active');
                })
                menuLink.forEach(item => {
                    item.classList.remove('header__menu-link--active');
                })

                menuItem[num].classList.add('header__menu-item--active');
                menuLink[num].classList.add('header__menu-link--active');
            }
        })
    })
    //высоты заголовков в футере
    const exampleHeigth = document.querySelector('.header__logo-img').height;
    const footerTitle = document.querySelectorAll('.footer__item-title');
    footerTitle.forEach(item => {
        value = exampleHeigth + 6;
        item.style.height = value + "px";
    })
}
