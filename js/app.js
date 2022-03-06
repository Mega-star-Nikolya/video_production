$(function() {
    /*При скроле страницы header(шапка) фиксируется при scroll(скроле)*/
    let header = $("#jsHeader");
    let intro = $("#jsIntro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    checkScroll(scrollPos, introH)

    $(window).on("scroll resize", function() {
        let introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        checkScroll(scrollPos, introH)
    })

    function checkScroll(scrollPos, introH) {
        if (scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /*Плавный скрол при нажатие на шапку навигации и премещение по странице - Smooth scroll*/
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;
        nav.removeClass("show");
        $("html, body").animate({
            scrollTop: elementOffset - 80
        }, 700)
    });

    /*Burger- при нажание на меню открывается список*/
    let nav = $("#jsnav")
    let jsnavToggle = $("#jsnavToggle")
    jsnavToggle.on("click", function(event) {
        event.preventDefault();
        nav.toggleClass("show");
    });

    /*Слайдер https://kenwheeler.github.io/slick/ */
    /*     let slider = $("#jsClientsSlader");

        slider.slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            arrows: false,
            dots: true
        }); */
    const nav__linkSearch = document.querySelector('.nav__linkSearch');
    const body = document.querySelector('body');
    nav__linkSearch.addEventListener('click', function(e) {
        e.stopPropagation();
        this.classList.add('nav__linkSearch--active')
    });
    body.addEventListener('click', function() {
        nav__linkSearch.classList.remove('nav__linkSearch--active')
    });
});