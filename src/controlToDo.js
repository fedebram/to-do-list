import ToDos from "./toDos";
import { compareAsc, format } from "date-fns";

function controlToDo() {
    let arr = [];

    function create() {
        //prompt to fill proprierties of a new todo
        let title = prompt("Insert title: ");
        let description = prompt("Insert description: ");

        let dueDate = format(new Date(prompt("Insert due date: ")), "dd-MM-yy");

        let priority = prompt("Priority?: ");
        if (priority === "true") priority = true;
        else priority = false;

        let notes = prompt("Insert notes: ");

        let checklist = prompt("Done?: ");
        if (checklist === "yes") checklist = true;
        else checklist = false;

        let toDo = new ToDos(title, description, dueDate, priority, notes, checklist);

        //push the new todo in an array, in order to further manipulation
        arr.push(toDo)
        return toDo;
    }

    function remove(i) {
        arr.splice(i, 1);
    }

    function change(i) {
        arr[i].title = prompt("insert !!! title: ");
    }

    return { create, remove, change, arr }
}

export default controlToDo;