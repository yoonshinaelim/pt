


function goBack() {
    window.history.back();
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
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    let number, entitle, entext, kotitle, kotext, company, period, url;
    let num, entit, entxt, kotit, kotxt, com, date, link ,xmlDoc;
    let numArr = [],
        entitArr = [],
        entxtArr = [],
        kotxtArr = [], 
        kotitArr = [], 
        comArr = [], 
        dateArr = [], 
        linkArr = [];
        
    
    xmlDoc = xml.responseXML;
    number = xmlDoc.getElementsByTagName("number");
    entitle = xmlDoc.getElementsByTagName('entitle');
    entext = xmlDoc.getElementsByTagName('entext');
    kotitle = xmlDoc.getElementsByTagName('kotitle');
    kotext = xmlDoc.getElementsByTagName('kotext');
    company = xmlDoc.getElementsByTagName('company');
    period = xmlDoc.getElementsByTagName('period');
    url = xmlDoc.getElementsByTagName('url');
    
    for(let i=0; i < number.length; i++){

        num = number[i].textContent;
        entit = entitle[i].textContent;
        entxt = entext[i].textContent;
        kotit = kotitle[i].textContent;
        kotxt = kotext[i].textContent;
        com = company[i].textContent;
        date = period[i].textContent;
        link = url[i].textContent;

        numArr.push(num);
        entitArr.push(entit);
        entxtArr.push(entxt);
        kotitArr.push(kotit);
        kotxtArr.push(kotxt);
        comArr.push(com);
        dateArr.push(date);
        linkArr.push(link);

    }

   
    const titBg = document.querySelector('#titBg');
    titBg.style.background = 'url(../img/experience/tit_bg'+ id +'.jpg) no-repeat';
    const details = {};
    forEach(item => {
        details[item.id] = {
            enTitle : entitArr[id - 1],
            enText : entxtArr[id - 1],
            koTitle : kotitArr[id - 1],
            koText : kotxtArr[id - 1],
            company : comArr[id - 1],
            period : dateArr[id - 1],
            url : linkArr[id - 1]
        };
    });


    // const details = {
    //     1 :{
    //         enTitle : entitArr[0],
    //         enText : entxtArr[0],
    //         koTitle : kotitArr[0],
    //         koText : kotxtArr[0],
    //         company : comArr[0],
    //         period : dateArr[0],
    //         url : linkArr[0]
    //     },
    //     2 :{
    //         enTitle : entitArr[1],
    //         enText : entxtArr[1],
    //         koTitle : kotitArr[1],
    //         koText : kotxtArr[1],
    //         company : comArr[1],
    //         period : dateArr[1],
    //         url : linkArr[1]
    //     }
    // }

        if (details[id]) {
            document.getElementById("enTit").innerText = details[id].enTitle;
            document.getElementById("enTxt").innerText = details[id].enText;
            document.getElementById("koTit").innerText = details[id].koTitle;
            document.getElementById("koTxt").innerText = details[id].koText;
            document.getElementById("com").innerText = details[id].company;
            document.getElementById("date").innerText = details[id].period;
            document.getElementById("link").innerText = details[id].url;
        } else {
            document.getElementById("enTit").innerText = "정보 없음";
            document.getElementById("enTxt").innerText = "해당 ID의 정보를 찾을 수 없습니다.";
            document.getElementById("koTit").innerText = "";
        }

}


