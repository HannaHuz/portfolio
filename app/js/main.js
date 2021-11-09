const homeWrapper = document.querySelector(".home__title-container");
const homeTitle = document.querySelector(".home__title");

const textCont = homeTitle.textContent;
homeTitle.style.display = "none";

for (let i = 0; i < textCont.length; i++) {
    (function (i) {
        setTimeout(function () {
            const texts = document.createTextNode(textCont[i])
            const span = document.createElement('span');
            span.appendChild(texts);

            span.classList.add("active");
            homeWrapper.appendChild(span);
        }, 200 * i);
    }(i));
}


window.onload = function () {
    const preloader = document.getElementById('preloader');
    preloader.classList.add('preloader__gif_hide');
    setTimeout(function () {
        preloader.classList.add('preloader__gif_hidden');
    }, 650)
}


const burgerMenu = document.getElementById('burger-menu');
const overlay = document.getElementById('menu');
burgerMenu.addEventListener('click', function () {
    this.classList.toggle("close");
    overlay.classList.toggle("overlay");
});

for (const btn of document.querySelectorAll('.skill__info-btn')) {
    btn.addEventListener('click', () => {
        const [dots, moreText] = Array.from(btn.parentElement.querySelectorAll('span'));
        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btn.innerHTML = "+";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btn.innerHTML = "-";
            moreText.style.display = "inline";
        }
    });
}

$(document).ready(function () {
    $('.portfolio__carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        adaptiveHeight: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
            }
        }, {
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 14,
                infinite: true,
                dots: true,
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
                dots: true,
                autoplaySpeed: 2000,
            }
        }]
    });
});

(function () {
    let animateContent = document.querySelector('.animate-content');
    let animate = animateContent.querySelector('.animate');
    animate.classList.remove('animate-transition');

    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animate.classList.add('animate-transition');
                return;
            }
            animate.classList.remove('animate-transition');
        });
    });
    observer.observe(animateContent);
})();
