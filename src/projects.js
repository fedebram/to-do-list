import controlToDo from "./controlToDo";

class Projects {
    constructor(title, container = []) {
        this.title = title;
        this.container = container;
    }

    addToDo () {
        this.container.push(prova.createToDo());
    }

    removeToDo () {
        this.container.splice(1, 1);
    }

    changeToDo (index) {
        this.container[index].title = prompt("inserisci il titolo: ");
    }
}

export default Projects;