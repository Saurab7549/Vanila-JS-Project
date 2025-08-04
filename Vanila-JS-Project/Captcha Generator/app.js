const char = 'ABCDEFGHIJKLMNOPQRSTUVXWYZabcdefghijklmnopqrstuvwxyz@#$%&1234567890';
const captcha = document.querySelector('#captcha');
const input = document.querySelector('input');
const submit = document.querySelector('#sub');
const refresh = document.querySelector('#ref');

submit.addEventListener('click',(e) => {
    if(input.value == captcha.textContent)
        alert('Captcha Match');
    else{
        alert('Captcha Not Match');
    }
})

refresh.addEventListener('click',()=>{
    captcha.innerHTML = GenerateCaptcha();
})


function GenerateCaptcha(){
    let result = "";
    for(let i=0; i<6; i++){
        result += char[Math.floor(Math.random()*char.length)]
    }
    return result;
}

captcha.textContent = GenerateCaptcha();




