if (document.querySelector("#wrap").classList.contains("main")) {
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
    gsap.utils.toArray(".section_box").forEach((box) => {
        gsap.to(box, {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: box,
                start: "top 80%", // 화면의 80% 지점에서 시작
                toggleActions: "play none none reverse"
            }
        });
    });
}



