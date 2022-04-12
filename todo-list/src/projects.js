export default class Project {
    constructor(title, todoList) {
        this.title = title;
        this.todos = todoList || [];
    }

    add_todo(todo) {
        this.todos.push(todo);
    }
}