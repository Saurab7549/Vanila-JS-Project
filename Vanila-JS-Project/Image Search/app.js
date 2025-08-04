const search = document.querySelector('#user_input')
const search_btn = document.querySelector('#btn')
const img_container = document.querySelector(".img_container")
search_btn.addEventListener('click' , async () => {
    let search_value = search.value;
    if(search_value === ""){
        alert("please enter something");
    }else{
        const key = "Fm0hYy3lh6ZICWS9OuaESkx0YBYY8l-dNR9zHWNjHWM";
        const url = `https://api.unsplash.com/search/photos?page=1&query=${search_value}&client_id=${key}`
        let data = await fetch(url);
        data = await data.json();
        displayImage(data)
    }
})

function displayImage(data){
    img_container.innerHTML="";
    search.value = "";
    data.results.forEach(element => {
        const image = document.createElement("img")
        image.src = element.urls.regular
        img_container.appendChild(image)
    });
}