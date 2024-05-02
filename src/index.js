import './style.css';
import Projects from './projects';
import controlToDo from './controlToDo';

const toDo = controlToDo();

let firstToDo = toDo.create();
let secondToDo = toDo.create();

console.log(firstToDo, secondToDo);





/*const taskBtn = document.querySelector("#task");
const projectsDiv = document.querySelector("#projects");

taskBtn.addEventListener("click", () => {
    project1.addToDo();
    console.log(project1);
    project1.changeToDo(0);
    console.log(project1);
});


/*const newDiv = document.createElement("div");
newDiv.textContent = project1.title;
projectsDiv.appendChild(newDiv);*/








