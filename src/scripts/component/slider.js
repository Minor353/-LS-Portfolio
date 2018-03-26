module.exports = function(){
    const arrowPrev = document.querySelector(".slider__arrow-prev"),
          arrowNext = document.querySelector(".slider__arrow-next"),
          sliderItem = document.querySelector(".slider__items"),
          sliderItems = document.querySelectorAll(".slider__item"),
          paginatorItem = document.querySelectorAll(".slider__paginator-item");

    var position = 0;
    const itemsCount = (sliderItems.length - 1) * 100;

    const pugStyle = function(){
        let pugCount = position / 100;
        for(let i = 0; i < paginatorItem.length; i++) {
            paginatorItem[i].classList.remove("slider__paginator-item--active");
        }
        paginatorItem[pugCount].classList.add("slider__paginator-item--active");
    };

    

    arrowNext.addEventListener('click', function(e){
        e.preventDefault();
        position += 100;
        if (position > itemsCount) {
            position = 0;
        }
        
        sliderItem.style.left = "-" + position + "%";

        pugStyle();
    });

    arrowPrev.addEventListener('click', function(e){
        e.preventDefault();
        position -= 100;
        if (position < 0) {
            position = itemsCount;
        }

        sliderItem.style.left = "-" + position + "%";

        pugStyle();
    });

    for(let i = 0; i < paginatorItem.length; i++) {
        paginatorItem[i].addEventListener('click', function(e){
            e.preventDefault();
        });
    }
    
};