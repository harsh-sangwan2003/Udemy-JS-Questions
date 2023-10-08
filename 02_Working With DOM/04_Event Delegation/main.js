// Implement a click on todo item as fast as possible
const app = document.querySelector(".todo-app");
app.addEventListener("click", (e) => {

    if (e.target && e.target.classList.contans('item')) {

        console.log("You cliked on item", e.target.innerText);
    }
})