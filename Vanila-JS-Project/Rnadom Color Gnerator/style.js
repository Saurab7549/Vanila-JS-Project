const colorCode = document.getElementById('ColorCode');

const getColor = () => {
    const code = Math.floor(Math.random() * 16777215);
    const color = "#" + code.toString(16);
    document.body.style.backgroundColor = color;
    colorCode.innerText = color;
}

document.getElementById('ColorGenerator').addEventListener("click" , getColor)

getColor();

