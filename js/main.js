;(function(){

    //Показ меню 
    const menuIcon = document.querySelector('.burger-btn');
    const menuBody = document.querySelector('.header__menu');
    const menuList = document.querySelector('.menu__list');
    const searchIcon = document.querySelector('.header__search');
    
    if(menuIcon) {
        menuIcon.addEventListener("click", function(e) {
            document.body.classList.toggle('_lock');
            menuBody.classList.toggle('active');
            menuList.classList.toggle('active');
            searchIcon.classList.toggle('active');
            menuIcon.classList.toggle('active');
        });
    }


    //Слайдер

    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.slider-next-button',
          prevEl: '.slider-prev-button',
        },
      });

    // Плавный скролл до меню

    const menuLinks = document.querySelectorAll('.link-from-menu[data-goto]');
    if (menuLinks.length > 0) {
        menuLinks.forEach(menuLinks => {
            menuLinks.addEventListener('click', onMenuLinkClick);
        });

        function onMenuLinkClick(e) {
            const menuLink = e.target;
            if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
                const gotoBlock = document.querySelector(menuLink.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

                if(menuIcon.classList.contains('active')) {
                    menuBody.classList.remove('active');
                    searchIcon.classList.remove('active');
                    document.body.classList.remove('_lock');
                    menuIcon.classList.remove('active');
                }

                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: 'smooth'
                });
                e.preventDefault();
            }
        }
    }


})();