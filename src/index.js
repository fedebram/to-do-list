import './style.css';
import Projects from './projects';
//import changeToDo from "./changeToDo";

const project1 = new Projects("Primo Progetto");
project1.addToDo();

const project2 = new Projects("Secondo Progetto");
project2.container.push(project1.container.slice());
project1.container.splice(0 , 1);

console.log(project1);
console.log(project2);



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








