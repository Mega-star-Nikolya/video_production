let position = 0;
const slidesToShow = 2;
const slidesToScroll = 1;
const container = document.querySelector('.slideshow__container');
const track = document.querySelector('.slideshow__track');
const btnPrev = document.querySelector('.btn--prev');
const btnNext = document.querySelector('.btn--next');
const item = document.querySelectorAll('.slideshow__item');
const itemCount = item.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

item.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener('click', () => {
    const itemLeft = itemCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    position -= itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;
    setPosition();
    checkBtns();
});

btnPrev.addEventListener('click', () => {
    const itemLeft = Math.abs(position) / itemWidth;
    position += itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;
    setPosition();
    checkBtns();
});

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemCount - slidesToShow) * itemWidth;
};
checkBtns();

// console.log(itemWidth)