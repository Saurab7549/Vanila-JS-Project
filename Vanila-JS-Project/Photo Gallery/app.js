const input = document.querySelector("#user_input");
const btn = document.querySelector("#btn")
const img_container = document.querySelector('.img_container')

btn.addEventListener('click', async ()=>{
    let count = input.value;
    if(count < 0 || count > 20){
        alert('enter the number between 1 and 20');
    }else{
            for(let i=0; i<count; i++){
                let image = document.createElement('img');
                image.src = `https://picsum.photos/200/300/?random/${i}`;
                img_container.appendChild(image);
            }
        }
})
