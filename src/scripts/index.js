const greetingRotate = function() {

    const rotateIn = document.querySelector(".btn-autorization"),
          rotateItem =  document.querySelector(".wrapper-greeting__rotate"),
          rotateOut = document.querySelector(".autorization__btn-main"),
          allOut = document.querySelector(".index-wrapper"),
          allOut2 = document.querySelector(".wrapper-greeting");
          
          
          
    
          rotateIn.addEventListener('click', function(e){
            e.preventDefault();
            rotateItem.classList.add("wrapper-greeting__rotate--active");
          });

          rotateOut.addEventListener('click', function(e){
            e.preventDefault();
            rotateItem.classList.remove("wrapper-greeting__rotate--active");
          });

          allOut.addEventListener('click', function(e){
            let eTarget = e.target;
            if (eTarget == allOut  || eTarget == allOut2) {
              rotateItem.classList.remove("wrapper-greeting__rotate--active");
            };
          });
};

greetingRotate();

/////////////////////////////////////////////////////////////////////////////////////

const paralax = function(){

    const parent = document.querySelector("body"),
          item = document.querySelector(".index-img");

    var center = {
        x: parent.offsetWidth / 2,
        y: parent.offsetHeight / 2
    };

    parent.onmousemove = function(event) {
    
          item.setAttribute('style', 'transform: translate3d(' +
            Math.round((center.x - event.pageX)/40) +'px, ' +
            Math.round((center.y - event.pageY)/40) + 'px, 0);');
        
    }
};

paralax();