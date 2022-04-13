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
        window.localStorage.removeItem("projects");
        window.localStorage.setItem("projects", JSON.stringify(projectList));
    }
}