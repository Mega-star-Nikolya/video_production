$(document).ready(function() {
    let position = 0;
    const slidesToShow = 2;
    const slidesToScroll = 1;
    const container = $('.slideshow__container');
    const track = $('.slideshow__track');
    const item = $('.slideshow__item');
    const btnPrev = $('.btn--prev');
    const btnNext = $('.btn--next');
    const itemCount = item.length;
    const itemWidth = container.width() / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;

    item.each(function(index, item) {
        $(item).css({
            minWidth: itemWidth,
        })
    });

    btnNext.click(function() {
        const itemLeft = itemCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
        position -= itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;

        setPosition();
        checkBtns();
    });

    btnPrev.click(function() {
        const itemLeft = Math.abs(position) / itemWidth;
        position += itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;

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
        btnNext.prop('disabled', position <= -(itemCount - slidesToShow) * itemWidth);
    };
    checkBtns();

    console.log(itemCount);
});