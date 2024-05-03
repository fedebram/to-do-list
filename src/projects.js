
class Projects {
    constructor(title, container = []) {
        this.title = title;
        this.container = container;
    }

    addToDo (toDo) {
        this.container.push(toDo);
    }

    removeToDo (i) {
        this.container.splice(i, 1);
    }

    changeToDo (index) {
        this.container[index].title = prompt("inserisci il titolo: ");
    }
}

export default Projects;