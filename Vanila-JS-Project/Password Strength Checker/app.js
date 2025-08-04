const input = document.querySelector('#inp')
const result = document.querySelector("#result")
console.log(input.value ,result)



let count = 0;
input.addEventListener('input' , function(){
    let password = input.value ;
    if(password.length < 8){
        console.log(password.length)

        result.innerHTML = `password is too short`;
        result.style.color = "red";

        // check -> a-z A-Z 0-9 (!@#$%^&*()+{[?]})
    }else{
        if(password.search(/[a-z]/) == -1){
        result.innerHTML = `Password is missing a lowercase letter`;
        result.style.color = "red";
    }else if(password.search(/[A-Z]/) == -1){
        result.innerHTML = `Password is missing a uppercase letter`;
        result.style.color = "red";
    }else if(password.search(/[0-9]/) == -1){
        result.innerHTML = `Password is missing a numeric letter`;
        result.style.color = "red";
    }else if(password.search(/[!\@\#\$\%|^\&\*\(\)\-\_\+\?]/) == -1){
        result.innerHTML = `Password is missing a special character letter`;
        result.style.color = "red";
    }else{
        result.innerHTML = `Password is strong`;
        result.style.color = "green"
    }
    }
})