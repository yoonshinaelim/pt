const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const titBg = document.getElementById('titBg');

let details = {};

titBg.style.background = 'url(./img/experience/page/bg'+ id +'.jpg) no-repeat center';
titBg.style.backgroundSize = "cover";
// XML 데이터 불러오기
fetch("list.xml")
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(xml => {
        const items = xml.getElementsByTagName("exp");
    
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            const itemId = item.getAttribute("id");
            details[itemId] = {
                entitle: item.getElementsByTagName("entitle")[0].textContent,
                entext: item.getElementsByTagName("entext")[0].textContent,
                kotitle: item.getElementsByTagName("kotitle")[0].textContent,
                kotext: item.getElementsByTagName("kotext")[0].textContent,
                company: item.getElementsByTagName("company")[0].textContent,
                period: item.getElementsByTagName("period")[0].textContent,
                url: item.getElementsByTagName("url")[0].textContent
            };
        }
        updatePage();
    })
    .catch(error => console.error("XML 데이터 불러오기 실패:", error));

// 페이지 내용을 업데이트하는 함수
function updatePage() {
    if (details[id]) {
        for (const key in details[id]) {
            const element = document.getElementById(key);
            if (element) {
                element.innerText = details[id][key];
            }
        }
    } else {
        document.getElementById("entitle").innerText = "정보 없음";
        document.getElementById("entext").innerText = "정보 없음";
        document.getElementById("kotitle").innerText = "정보 없음";
        document.getElementById("kotext").innerText = "정보 없음";
        document.getElementById("company").innerText = "정보 없음";
        document.getElementById("period").innerText = "정보 없음";
        document.getElementById("url").innerText = "정보 없음";
    }
}
// url 링크
function link(){
    const linktxt = document.getElementById('url').innerText;
    if(linktxt == "정보없음"){
        return false;
    }else{
        window.open(linktxt);
    }
}
// 뒤로 가기 기능
function goBack() {
    window.history.back();
}