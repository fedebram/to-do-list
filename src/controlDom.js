import controlToDo from "./controlToDo";
import Projects from "./projects";

function controlDom() {
    const toDo = controlToDo();

    const taskBtn = document.querySelector("#task");
    const content = document.querySelector("#content");
    const projectbtn = document.querySelector("#project-btn");
    const projectContainer = document.querySelector("#project-container");

    taskBtn.addEventListener("click", () => {
        controlToDoElement();
    });

    projectbtn.addEventListener("click", () => {
        controlProjectElement();
    });
    
    function controlToDoElement () {
        //create todo
        toDo.create();
        const newToDo = document.createElement("div");
        newToDo.textContent = `Due date: ${toDo.arr[toDo.arr.length-1].dueDate}, project: ${toDo.arr[toDo.arr.length-1].project}`;
        newToDo.setAttribute("data-id", `${toDo.arr.length-1}`);
        content.appendChild(newToDo);
        
        //create the associate button
        const removeToDo = document.createElement("button");
        removeToDo.textContent = "remove";
        removeToDo.setAttribute("data-id", `${toDo.arr.length-1}`);
        newToDo.appendChild(removeToDo);

        //add an event listener to each remove button
        removeToDo.addEventListener("click", (event) => {
            toDo.remove(event.target.dataset.id);
            newToDo.remove();
        });
    }

    function controlProjectElement () {
        //create  new project
        const newProject = document.createElement("div");
        let project = new Projects(prompt("Inserisci il titolo: "));
        newProject.textContent = project.title;
        projectContainer.appendChild(newProject);

        //create the add to do button for each project
        const addBtn = document.createElement("button");
        addBtn.textContent = "add to-do";
        newProject.appendChild(addBtn);

        addBtn.addEventListener("click", () => {
            project.addToDo(toDo.arr[1]);
            toDo.arr[1].project = project.title;
            const todoproj = document.getElementById("1");
            todoproj.textContent = `title: ${toDo.arr[toDo.arr.length-1].title}, project: ${toDo.arr[toDo.arr.length-1].project}`;
        });
    }
}

export default controlDom;
