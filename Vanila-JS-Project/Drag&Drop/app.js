const empties = document.querySelectorAll(".square")
const box = document.querySelector(".img_box")

box.addEventListener('dragstart',dragStart)
box.addEventListener('dragend',dragEnd)

function dragStart(){

}

function dragEnd(){

}

for(let empty of empties){
    empty.addEventListener('dragenter',function dragEnter(e){
        e.preventDefault();
        this.classList.add("hold");
    })

    empty.addEventListener('dragover',function dragOver (e){
        e.preventDefault();
    })

    empty.addEventListener('dragleave',function dragLeave (){
        this.classList.remove("hold");
    })

    empty.addEventListener('drop',function Drop(){
        this.classList.remove("hold")
        this.appendChild('box');
    })
}