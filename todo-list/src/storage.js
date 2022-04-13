import Project from "./project";

export default class ProjectStorage {
    static load() {
        let projectList = [];
        let objList = JSON.parse(window.localStorage.getItem("projects"));
        console.log({ objList });
        
        for (let obj of objList) {
            console.log(obj);
            projectList.push(Project.fromJSON(obj));
        }
        return projectList;
    }

    static save(projectList) {
        // window.localStorage.removeItem("projects");
        window.localStorage.setItem("projects", JSON.stringify(projectList));
    }

    static save_todo(projectName, todo) {
        let projects = this.load();
        let idx = projects.findIndex(x => x.title === projectName);
        if (idx != -1) {
            let project = projects.pop(idx);
            project.add_todo(todo);
            projects.push(project);
        } else {
            let newProject = new Project(projectName, [todo]);
            projects.push(newProject);
        }
        this.save(projects);
    }
}