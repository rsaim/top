import { Todo } from "./todo";

export default class Project {
    constructor(title, todoList) {
        this.title = title;
        this.todos = todoList || [];
    }

    add_todo(todo) {
        this.todos.push(todo);
    }

    static fromJSON(json) {
        let newProject = new Project();
        newProject.title = json.title;
        newProject.todos = json.todos;
        return newProject;
    }
}


// User testing
// TODO: Move to JEST
console.group("Project serialization testing");
const todo1 = new Todo("game1", "play game", "2020-01-02", "high", false);
const todo2 = new Todo("game2", "play game", "2020-01-02", "high", false);
let todoList = [todo1, todo2];
const proj = new Project("main", todoList);
console.log(proj);
let proj_str = JSON.stringify(proj);
console.log(proj_str);
let proj_str_json = JSON.parse(proj_str);
let deserializedProject = Project.fromJSON(proj_str_json);
console.log({ deserializedProject });
console.assert(proj_str === JSON.stringify(deserializedProject));
console.groupEnd();