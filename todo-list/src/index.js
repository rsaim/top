import { SortModule, TabulatorFull as Tabulator } from 'tabulator-tables';
import Project from './project';
import ProjectStorage from './storage';
import './style.css';
import Todo from "./todo";
Tabulator.registerModule([SortModule]);
const { DateTime } = require("luxon");
var luxon = require('luxon');



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

function createsidebar() {
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
    projectHeading.innerText = "Projects";
    projectDiv.appendChild(projectHeading);

    const projectList = document.createElement("ul");
    projectList.setAttribute("class", "project-list");
    projectDiv.appendChild(projectList);

    // Append thie child items
    // tabList.appendChild(home);
    tabList.appendChild(today);
    tabList.appendChild(week);
    sidebar.appendChild(tabList);
    sidebar.appendChild(projectDiv);
    return sidebar;
}

function createMain() {
    const main = document.createElement("div");
    main.setAttribute("class", "main");

    const tableItems = document.createElement("div");
    tableItems.setAttribute("id", "example-table");
    main.appendChild(tableItems);
    return main;
}

function displayTable(json_data) {
    var tabledata = [
        { id: 1, name: "Oli Bob", age: "12", col: "red", dob: "14/05/1983" },
        { id: 2, name: "Mary May", age: "1", col: "blue", dob: "14/05/1982" },
        { id: 3, name: "Christine Lobowski", age: "42", col: "green", dob: "22/05/1982" },
        { id: 4, name: "Brendon Philips", age: "125", col: "orange", dob: "01/08/1980" },
        { id: 5, name: "Margret Marmajuke", age: "16", col: "yellow", dob: "31/01/1999" },
    ];

    //create Tabulator on DOM element with id "example-table"
    console.table(json_data);
    var table = new Tabulator("#example-table", {
        debugInvalidOptions: true,
        data: json_data,
        layout: "fitColumns",
        // autoColumns: true,
        columns: [
            {
                title: "Title", field: "title", width: 150, editor: true, cellClick: function (e, cell) {
                    console.log(cell);
                },
            },
            { title: "Description", field: "description", editor: true, },
            { title: "Due Date", field: "dueDate", editor: true, sorter: "date",},
            { title: "Priotiy", field: "priority", editor: true, },
            { title: "Progress", field: "progress", formatter: "progress", editor: true, },
        ],
    });

    table.on('rowClick', (e, row) => {
        console.log("Row " + row.getIndex() + " Clicked!!!!");
        // table.deleteRow(row.getIndex());
    });
}

function loadHome(json_data) {
    const content = document.createElement("div");
    content.setAttribute("class", "content");
    content.appendChild(createHeader());
    content.appendChild(createsidebar());
    content.appendChild(createMain());
    document.body.appendChild(content);
    // Display todo items
    displayTable(json_data);
}

window.onload = function (e) {
    const todo1 = new Todo("task1", "play task", "05/08/2022", "high", false);
    const todo2 = new Todo("task2", "play task", "05/02/2002", "low", false);
    const todo3 = new Todo("task3", "play task", "05/06/2022", "medium", false);
    const todo4 = new Todo("task4", "play task", "04/08/2022", "high", false);
    const todo5 = new Todo("task5", "play task", "05/08/2022", "low", false);
    const todo6 = new Todo("task6", "play task", "05/08/2015", "high", false);

    let project1 = new Project("main", [todo1, todo2, todo3, todo4]);
    let project2 = new Project("secondary", [todo5, todo6]);

    let projectList = [project1, project2];
    console.log(projectList);
    ProjectStorage.save(projectList);
    let loadedProjects = ProjectStorage.load()
    console.log({ loadedProjects });

    let json_data = [];
    for (let project of projectList) {
        for (let todo of project.todos) {
            json_data.push(todo.toJson());
        }
    }

    loadHome(json_data);
}