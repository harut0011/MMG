document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('resize', function() {
        console.log(document.querySelector('.container').offsetWidth)
        document.querySelector('.slider').style.width = document.querySelector('.container').offsetWidth + 'px';
    })
    const container = document.querySelector('.slider-container');
    const translation = document.querySelector('.slider-translation');
    const sliderItems = document.querySelectorAll('.slider-item');
    const prevBtn = document.querySelector('.slider-prev-button');
    const nextBtn = document.querySelector('.slider-next-button');
    const slidesToShow = 1;
    const slidesToScroll = 1;
    const itemWidth = container.clientWidth / slidesToShow;
    const sliderItemMargin = Number(window.getComputedStyle(sliderItems[0]).getPropertyValue("margin-left").replace(/\D+/g, "")) + Number(window.getComputedStyle(sliderItems[0]).getPropertyValue("margin-right").replace(/\D+/g, ""));

    for (let a = 0; a < sliderItems.length; a++) {
        sliderItems[a].style.minWidth = `${itemWidth - sliderItemMargin}px`
    }
    let move = 0;

    prevBtn.addEventListener('click', () => {
        move >= 0 ? move = -container.clientWidth : move = move + itemWidth * slidesToScroll
        translation.style.left = `${move}px`;


    })
    nextBtn.addEventListener('click', () => {
        move <= -container.clientWidth ? move = 0 : move = move - itemWidth * slidesToScroll
        translation.style.left = `${move}px`;
    })
})