const input = document.querySelector("#inp")
const QR = document.querySelector("#result")
const qr_btn = document.querySelector("#btn")

console.log(input ,QR ,qr_btn)

qr_btn.addEventListener('click' , () => {
    const inputValue = input.value ;
    console.log(inputValue);

    if(! inputValue){
        alert("enter a valid url")
        return;
    }else{
       // goqr.me -> api
       QR.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;

       QR.alt = `QR code for ${inputValue}`;
    }
 
})