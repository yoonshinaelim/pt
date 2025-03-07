const body = document.querySelector("#body"),
      menuButton = document.querySelector("#menu"),
      menuList = document.querySelector("#menuList"),
      header = document.querySelector("#header");

menuButton.addEventListener("click", function(){
    var toggle = this.classList.toggle("on");
    toggle;
    header.classList.toggle("on");
    menuList.classList.toggle("on");
    body.classList.toggle("hidden");

});

//main list
function scrollRealStart(){
    var mainList = "#mainList li";
    ScrollReveal().reveal(mainList, {reset:false, delay :10, distance: '50px', opacity:.5});
}
scrollRealStart();

//load scroll top 0
window.onbeforeunload = function(){
    window.scrollTo(0, 0);
};

//scroll event
window.addEventListener("scroll", function(){
    let scrollY = this.scrollY;
    if(scrollY == 0){
        scrollRealStart();
    }
});
