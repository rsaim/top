import Project from "./project";

export default class ProjectStorage {
    static load() {
        let projectList = [];
        let objList = JSON.parse(window.localStorage.getItem("projects"));
        for (let obj in objList)
            projectList.push(Project.fromJSON(obj));
        return projectList;
    }

    static save(projectList) {
        window.localStorage.setItem("projects", JSON.stringify(projectList));
    }
}