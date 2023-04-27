const menuToggle = document.querySelector('.menu__toggle');
const menuList = document.querySelector('.menu__list');

menuToggle.addEventListener('click', function() {
    if (menuList.style.transform === 'translateY(0%)') {
        menuList.style.transform = 'translateY(-200%)';
        menuToggle.classList.remove('menu__toggle--active');
    } else {
        menuList.style.transform = 'translateY(0%)';
        menuToggle.classList.add('menu__toggle--active');
    }
});