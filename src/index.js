import './style.css';
import Projects from './projects';
import controlToDo from './controlToDo';
import controlDom from './controlDom';
import { compareAsc } from "date-fns";
controlDom();

//try local storage
const savedTasks = JSON.parse(localStorage.getItem('tasks'));

console.log(savedTasks);

if (savedTasks != null) {
    for (let i = 0; i < savedTasks.length; i++) {
        const newToDo = document.createElement("div");
        newToDo.textContent = `Due date: ${savedTasks[i].dueDate}, project: ${savedTasks[i].project}`;
        newToDo.setAttribute("data-id", `${i}`);
        content.appendChild(newToDo);

        //create the associate button
        const removeToDo = document.createElement("button");
        removeToDo.textContent = "remove";
        removeToDo.setAttribute("data-id", `${i}`);
        newToDo.appendChild(removeToDo);

        //add an event listener to each remove button
        removeToDo.addEventListener("click", (event) => {
            toDo.remove(event.target.dataset.id);
            newToDo.remove();
        });
    }
}


