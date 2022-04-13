export default class Todo {
    constructor(title, description, dueDate, priority, finished, progress) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.finished = finished;
        this.progress = progress || 100 * Math.random();
    }

    toJson() {
        return {
            "title": this.title,
            "description": this.description,
            "dueDate": this.dueDate,
            "priority": this.priority,
            "finished": this.finished,
            "progress": this.progress,
        }
    }
    
    static fromJson(json) {
        let newTodo = new Todo();
        for (var property in json)
            newTodo[property] = json[property];
        return newTodo;
    }
}

// User testing
// TODO: Move to JEST
console.group("Todo serialization testing");
const todo = new Todo("game", "play game", "2020-01-02", "high", false);
console.log(todo);
let todo_str = JSON.stringify(todo);
console.log(todo_str);
let todo_str_json = JSON.parse(todo_str);
let deserializedTodo = Todo.fromJson(todo_str_json);
console.log({ deserializedTodo });
console.assert(todo_str === JSON.stringify(deserializedTodo));
console.groupEnd();

export { Todo };