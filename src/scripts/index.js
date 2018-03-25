const greetingRotate = function() {

    const rotateIn = document.querySelector(".btn-autorization"),
          rotateItem =  document.querySelector(".wrapper-greeting__rotate"),
          rotateOut = document.querySelector(".autorization__btn-main");
          
          
          console.log(rotateBtn);
    
          rotateIn.addEventListener('click', function(e){
            e.preventDefault();
            rotateItem.classList.add("wrapper-greeting__rotate--active");
          });

          rotateOut.addEventListener('click', function(e){
            e.preventDefault();
            rotateItem.classList.remove("wrapper-greeting__rotate--active");
          });
};

greetingRotate();