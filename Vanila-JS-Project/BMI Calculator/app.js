const form = document.querySelector('form');

form.addEventListener('submit' , function(e){
    e.preventDefault();

    const Height = parseInt(document.querySelector('#height').value);
    const Weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('.result');

    if(Height === '' || Height < 0 || isNaN(Height)){
        result.innerHTML = `Please give a valid height ${Height}`;
    }else if(Weight == '' || Weight < 0 || isNaN(Weight)){
        result.innerHTML = `Please give a valid weight ${Weight}`;
    }else{
        const bmi = (Weight / ((Height * Height)/10000)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`;
    }
})