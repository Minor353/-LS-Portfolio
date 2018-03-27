module.exports = function(){
    const btnOpen = document.querySelector(".blog__title-open"),
          titleOpend = document.querySelector(".blog__section-left");

    btnOpen.addEventListener('click', function(){
        titleOpend.classList.toggle("blog__section-left--open");
        console.log("click");
    }); 
};
