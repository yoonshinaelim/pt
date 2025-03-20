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
    
    function goToDetail(id) {
        window.location.href = `experience.html?id=${id}`;
    }
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            nodeValFunc(this);
        }    
        
    }
    xhttp.open("GET", "list.xml", true);
    xhttp.send();

    function nodeValFunc( xml ) {
        let number, entitle, entext;
        let num, entit, entxt, xmlDoc;

        num = entit = entxt = '';
        xmlDoc = xml.responseXML;
        number = xmlDoc.getElementsByTagName("number");
        entitle = xmlDoc.getElementsByTagName('entitle');
        entext = xmlDoc.getElementsByTagName('entext');    

        for(let i=number.length-1; i >= 0; i--){
            num = number[i].childNodes[0].nodeValue;
            entit = entitle[i].childNodes[0].nodeValue;
            entxt = entext[i].childNodes[0].nodeValue;
            document.getElementById('mainList').innerHTML += '<li id="listBtn"><a href="javascript:goToDetail('+ num +');" class="btn" style="background:#fff url(./img/experience/list/bg'+ num +'.jpg) no-repeat center;background-size:cover;"><span class="tit">'+ entit + '</span><span class="tit2">' + entxt +'</span></a></li>';
        }
        //main list
        function scrollStart(){
            ScrollReveal().reveal("#mainList li", {
                mobile: false,
                duration: 300,
                easing: 'ease-in-out',
                distance: '50px', 
                opacity:.5
            });
        }
        scrollStart();
        // load scroll top 0
        window.onbeforeunload = function(){
            window.scrollTo(0, 0);
            scrollStart();
        };


        
    }

    
        

    
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

      let abH = document.getElementById('abH').offsetHeight;
      window.addEventListener("scroll", function(){
        let scrollY = this.scrollY;
        const btnX  = document.querySelector('.btn_closed');
        if(scrollY > abH){
            btnX.classList.add('on');
        }else{
            btnX.classList.remove('on');
        }
      });
    }

