document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector("form").addEventListener("submit", (e) => {
        e.preventDefault();
        makeTodoList(document.getElementById("new-task-description").value);
    })
});

function makeTodoList(todo) {
    let li = document.createElement("li");
    let btn = document.createElement("button");
    btn.addEventListener("click", handleDelete);
    li.textContent = `${todo} `;
    btn.textContent = "X";
    li.appendChild(btn);
    console.log(li);
    document.getElementById("tasks").appendChild(li);
}

function handleDelete(e) {
    e.target.parentNode.remove();
}