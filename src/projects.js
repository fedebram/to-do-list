import createToDo from "./createToDo";

class Projects {
    constructor(title, container = []) {
        this.title = title;
        this.container = container;
    }

    addToDo () {
        let id = 0;
        () => {this.container.push(createToDo(id));
        id++;
        }
    }

    removeToDo () {
        this.container.splice(1, 1);
    }

    changeToDo (index) {
        this.container[index].title = prompt("inserisci il titolo: ");
    }
}

export default Projects;