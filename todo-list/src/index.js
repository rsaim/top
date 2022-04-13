import Project from './project';
import ProjectStorage from './storage';
import './style.css';
import Todo from "./todo";
import { createOverlayButton, createOverlayForm } from './overlay';
import { displayTable } from './display';


function createHeader() {
    const header = document.createElement("header");
    header.setAttribute("class", "header");

    const todoImg = document.createElement("img");
    todoImg.src = "https://img.icons8.com/fluency/48/000000/todo-list.png";
    header.appendChild(todoImg);

    const h1 = document.createElement("h1");
    h1.innerText = "TODO List";
    header.appendChild(h1);

    return header;
}

function createsidebar(projectList) {
    const sidebar = document.createElement("div");
    sidebar.setAttribute("class", "sidebar");
    // Tabs - Home, Today, This week
    const tabList = document.createElement("ul");
    tabList.setAttribute("class", "tabs");
    // Home
    const home = document.createElement("li");
    const spanHome = document.createElement("span");
    spanHome.dataset.tab = "home";
    spanHome.setAttribute("class", "clickable");
    spanHome.innerText = "Home";
    spanHome.addEventListener("click", () => {
        console.log("home clicked");
    });
    home.appendChild(spanHome);
    // Today
    const today = document.createElement("li");
    const spanToday = document.createElement("span");
    spanToday.dataset.tab = "today";
    spanToday.setAttribute("class", "clickable");
    spanToday.innerText = "Today";
    spanToday.addEventListener("click", () => {
        console.log("Today clicked");
    });
    today.appendChild(spanToday);
    // Week
    const week = document.createElement("li");
    const spanWeek = document.createElement("span");
    spanWeek.dataset.tab = "today";
    spanWeek.setAttribute("class", "clickable");
    spanWeek.innerText = "This Week";
    spanWeek.addEventListener("click", () => {
        console.log("This week clicked");
    });
    week.appendChild(spanWeek);

    // Project list
    const projectDiv = document.createElement("div");
    projectDiv.setAttribute("class", "projects");

    const projectHeading = document.createElement("h2");
    projectHeading.innerText = "Project List";
    projectDiv.appendChild(projectHeading);

    const projectUL = document.createElement("ul");
    projectUL.setAttribute("class", "project-list");
    for (let project of projectList) {
        let li = document.createElement("li");
        li.setAttribute("name", project.title);
        li.innerText = project.title;
        li.classList.add("clickable");
        li.addEventListener("click", (e) => {
            console.log(e.target);
            let projectList = ProjectStorage.load();
            const selectedProjectName = e.target.innerText;
            console.log({ selectedProjectName });
            let project = projectList.find(x => x.title === selectedProjectName);
            if (project)
                displayTable([project]);
        });
        projectUL.appendChild(li);
    }
    projectDiv.appendChild(projectUL);

    // Append thie child items
    // tabList.appendChild(home);
    // TODO: consider supporting filtering by today/week
    // tabList.appendChild(today);
    // tabList.appendChild(week);
    // sidebar.appendChild(tabList);
    sidebar.appendChild(projectDiv);
    return sidebar;
}

function createMain() {
    const main = document.createElement("div");
    main.setAttribute("class", "main");

    const h1 = document.createElement("h1");
    h1.innerText = "All Projects";
    h1.classList.add("clickable");
    h1.addEventListener("click", () => {
        displayTable(ProjectStorage.load());
    });
    main.appendChild(h1);

    const tableItems = document.createElement("div");
    tableItems.setAttribute("id", "example-table");
    main.appendChild(tableItems);
    return main;
}

function loadHome(projectList) {
    const content = document.createElement("div");
    content.setAttribute("class", "content");
    content.appendChild(createHeader());
    content.appendChild(createsidebar(projectList));
    content.appendChild(createMain());
    document.body.appendChild(content);
    document.body.appendChild(createOverlayForm());
    document.body.appendChild(createOverlayButton());
    // Display todo items
    displayTable(projectList);
}

function renderPage() {
    if (window.localStorage.getItem("projects") == null) {
        const todo1 = new Todo("task1", "play task", "2022/05/08", "high", false, 80);
        const todo2 = new Todo("task2", "play task", "1995/05/02", "low", false, 70);
        const todo3 = new Todo("task3", "play task", "2004/05/06", "medium", false, 50);
        const todo4 = new Todo("task4", "play task", "2007/04/08", "high", false, 20);
        const todo5 = new Todo("task5", "play task", "2009/05/08", "low", false, 30);
        const todo6 = new Todo("task6", "play task", "2020/05/08", "high", false, 99);
        
        let project1 = new Project("main", [todo1, todo2, todo3, todo4]);
        let project2 = new Project("secondary", [todo5, todo6]);
        
        let projectList = [project1, project2];
        console.log(projectList);
        ProjectStorage.save(projectList);
    }
    let loadedProjects = ProjectStorage.load();
    console.log({ loadedProjects });
    loadHome(ProjectStorage.load());
}

window.onload = renderPage;