const todoList = [];

function addTodo(ev){
    const todoInput = document.getElementById('search-input');

    // 비어있는경우
    if (todoInput.value.trim() === ""){
        return;
    }

    const inputTodo = {
        title : todoInput.value
    };

    todoList.push(inputTodo);

    // localStorage.setItem("todoList", JSON.stringify(todoList));

    // 요소 생성
    const todoNode = document.createElement('div');
        todoNode.innerText = inputTodo.title;
        todoNode.onclick = function(){
            todoNode.isDone = !todoNode.isDone;
            if (todoNode.isDone) {
                this.className = 'done';
            } else {
                this.className = '';
            }
        }

    const removeInput = document.createElement('button');
    removeInput.className = 'remove-btn';
    removeInput.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    todoNode.appendChild(removeInput);
    removeInput.onclick = function(){
        this.parentNode.remove();
    }

    // 엔터일때
    if (!ev.keyCode || ev.keyCode === 13){
        const todoListArea = document.querySelector('#todo-list-area');
        todoListArea.appendChild(todoNode);

        // 입력창 비우기
        todoInput.value = "";
    }


}

