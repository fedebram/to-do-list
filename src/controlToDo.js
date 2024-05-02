import ToDos from "./toDos";
import Projects from "./projects";

function controlToDo() {
    let id = 0;

    function create() {
        let title = prompt("Insert title: ");
        let description = prompt("Insert description: ");
        let dueDate = prompt("Insert date end: ");

        let priority = prompt("Priority?: ");
        if (priority === "true") priority = true;
        else priority = false;

        let notes = prompt("Insert notes: ");

        let checklist = prompt("Done?: ");
        if (checklist === "yes") checklist = true;
        else checklist = false;

        let toDo = new ToDos(title, description, dueDate, priority, notes, checklist, id);
        id++;
        return toDo;
    }

    function add() {
    }

    return { create }
}

export default controlToDo;