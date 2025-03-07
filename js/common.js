window.addEventListener("scroll", (event)=> {
    let scrollY = this.scrollY;
    if(scrollY == 0){
        ScrollReveal().reveal('#mainList li', {reset:true, delay :10, distance: '50px', opacity:1});
    }
})


ScrollReveal().reveal('#mainList li', {reset:false, delay :10, distance: '50px', opacity:1});   



