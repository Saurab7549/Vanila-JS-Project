const user_input = document.querySelector('#user_input')
const total = document.querySelector('#total')
const remaining = document.querySelector('#remain')

user_input.addEventListener('input',()=>{
    let result = user_input.value.length;
    total.innerHTML = `Total characters : ${result}`;
    remaining.innerHTML = `Reamining characters : ${200-result}`

    if(result === 200){
        user_input.disabled = true;
    }else{
        user_input.disabled = false;
    }
})