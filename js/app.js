$(document).ready(function() {
    let position = 0;
    const slidesToShow = 2;
    const slidesToScroll = 1;
    const container = $('.slideshow__container');
    const track = $('.slideshow__track');
    const item = $('.slideshow__item');
    const btnPrev = $('.btn--prev');
    const btnNext = $('.btn--next');
    const itemWidth = container.width() / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;

    item.each(function(index, item) {
        $(item).css({
            minWidth: itemWidth,
        })
    });

    btnNext.click(function() {
        position -= movePosition;
        setPosition();
        checkBtns();
    });

    btnPrev.click(function() {
        position += movePosition
        setPosition();
        checkBtns();
    });

    const setPosition = () => {
        track.css({
            transform: `translateX(${position}px)`
        });
    };

    const checkBtns = () => {
        btnPrev.prop('disabled', position === 0);
        btnNext.prop('disabled', true);
    };
    checkBtns();

    /*  console.log(itemWidth); */
});