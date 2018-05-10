module.exports = function(){

  const circleWrap = document.querySelector(".about-main__right"),
        blockCord = circleWrap.getBoundingClientRect().top + window.pageYOffset,
        circleAnimate = document.querySelectorAll(".circles");

    window.onscroll = function() {
      if (window.pageYOffset > (blockCord - 27)) {
        for (let i = 0; i < circleAnimate.length; i++) {
          circleAnimate[i].classList.add("circles--active");
        };
      } else if (window.pageYOffset < blockCord - 250) {
        for (let i = 0; i < circleAnimate.length; i++) {
          circleAnimate[i].classList.remove("circles--active");
        };
      };
    };
  };