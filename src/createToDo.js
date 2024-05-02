import ToDos from "./toDos";

function createToDo(id) {
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

    return new ToDos(title, description, dueDate, priority, notes, checklist, id);
}

export default createToDo;