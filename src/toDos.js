class ToDos {
    constructor (title, description, dueDate, priority, notes, checklist, project = "None") {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checklist = checklist;
        this.project = project;
    }
}

export default ToDos;