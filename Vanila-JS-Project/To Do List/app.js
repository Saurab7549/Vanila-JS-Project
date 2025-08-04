const addTask = document.querySelector('.btn')
const user_input = document.querySelector('.user_input')
const taskBtn = document.querySelector('.remove')
const output = document.querySelector('#output')

addTask.addEventListener('click', ()=>{
    const result = user_input.value;
    if(result === ""){
        alert('please enter a todo');
        return;
    }else{
        const li = document.createElement('li');
        li.innerHTML = `<span                        class="task_text">${result}</span>
        <button class="remove" onclick = "removeTodo(this)">Remove</button>`;
        output.appendChild(li);
        user_input.value = "";
    }
})

function removeTodo(element){
    element.parentNode.remove();
}