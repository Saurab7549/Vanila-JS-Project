const endTime = "25 June 2025 01:53 PM";
 document.getElementById("endTime").innerText = endTime;

const input = document.querySelectorAll("input");

const Start = document.getElementById('start');
const Stop = document.getElementById("stop");
const Restart = document.getElementById('restart');

function clock(){
    const end = new Date(endTime);
    const now = new Date()
    const diff = (end - now) / 1000;
    if(diff < 0) return;
    input[0].value = Math.floor(diff / 3600 / 24);
    input[1].value = Math.floor((diff / 3600) % 24);
    input[2].value = Math.floor((diff / 60) % 60);
    input[3].value = Math.floor(diff) % 60;
}



Start.addEventListener("click",()=>{
    clock();
    closeInterval = setInterval(()=>{
        clock();
    } , 1000);
});

Stop.addEventListener("click" , ()=>{
    clearInterval(closeInterval);
});

Restart.addEventListener("click" , ()=>{
    input[0].value = 0;
    input[1].value = 0;
    input[2].value = 0;
    input[3].value = 0;
})