export default class Todo {
    constructor(title, description, dueDate, priority, finished) {
        this.title = title;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.finished = finished;
    }
}

const todo = new Todo("game", "play game", "2020-01-02", "high", false);
// console.log(todo.title);
// todo.title = "blah";
// console.log(todo.title);