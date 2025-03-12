
if (document.querySelector("#wrap").classList.contains("main")) {
    //main
    const body = document.querySelector("#body"),
    menuButton = document.querySelector("#menu"),
    menuList = document.querySelector("#menuList"),
    header = document.querySelector("#header");

    menuButton.addEventListener("click", function(){
        this.classList.toggle("on");
        header.classList.toggle("on");
        menuList.classList.toggle("on");
        body.classList.toggle("hidden");
    });
    //main list
    function scrollRealStart(){
        ScrollReveal().reveal("#mainList li", {reset:false, delay :10, distance: '50px', opacity:.5});
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
}else if (document.querySelector("#wrap").classList.contains("about")) {
    //about
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".contents",
            start: "top 30%",
            end: "bottom 100%",
            scrub: 1,
            yoyo:true
        }
    });
    const commonProps = {y:-50, opacity:1, duration:2 , ease:"power1.out"},
          box1Props = {rotation:0, y:-50, opacity:1, duration:2 , ease:"power1.out"};
    tl.to(".box1 .bg", box1Props)
      .to(".box1 .txt_box", commonProps)
      .to(".box2 .bg", commonProps)
      .to(".box2 .txt_box", commonProps)
      .to(".box3 .bg", commonProps)
      .to(".box3 .txt_box", commonProps)
      .to(".box4 .bg", commonProps)
      .to(".box4 .txt_box", commonProps)
      .to(".box5 .bg.type1", commonProps)
      .to(".box5 .bg.type2", commonProps)
      .to(".box5 .bg.type3", commonProps)
      .to(".box5 .txt_box", commonProps);
}



