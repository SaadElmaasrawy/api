let txt = document.getElementById("advice");

let dice = document.getElementById("dice");

let adId = document.getElementById("adviceId");

dice.onclick = function(){
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => txt.innerText = '" '+data.slip.advice+' "');
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => adId.innerText = "ADVICE #"+data.slip.id);
}

fetch('https://api.adviceslip.com/advice')
.then(res => res.json())
.then(data => txt.innerText ='" '+data.slip.advice+' "');
fetch('https://api.adviceslip.com/advice')
.then(res => res.json())
.then(data => adId.innerText = "ADVICE #"+data.slip.id);

