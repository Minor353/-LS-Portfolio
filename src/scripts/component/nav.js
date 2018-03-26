module.exports = function(){
    const openBtn = document.querySelector(".burger"),
          btnItem = document.querySelector(".burger__btn"),
          navPanel = document.querySelector(".nav-panel"),
          navItems = document.querySelector(".nav-panel__items-wrapper"),
          bodyModal = document.body;

    openBtn.addEventListener('click', function(e){
        e.preventDefault();
        btnItem.classList.toggle("burger__btn--active");
        navPanel.classList.toggle("nav-panel--active");
        navItems.classList.toggle("nav-animate");
        bodyModal.classList.toggle("body-modal-open");
    });
}