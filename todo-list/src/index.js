import './style.css';
import Todo from "./todo.js";
// import { Tabulator } from 'tabulator-tables';
// require('jquery.tabulator');
import { DateTime, Duration, FixedOffsetZone, IANAZone, Info, Interval, InvalidZone, Settings, SystemZone, VERSION, Zone, } from 'luxon';
// import { luxon } from 'luxon';
import { TabulatorFull as Tabulator, SortModule } from 'tabulator-tables';
Tabulator.registerModule([SortModule]);


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
    tabList.appendChild(home);
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

function displayTable() {
    var tabledata = [
        { id: 1, name: "Oli Bob", age: "12", col: "red", dob: "14/05/1983" },
        { id: 2, name: "Mary May", age: "1", col: "blue", dob: "14/05/1982" },
        { id: 3, name: "Christine Lobowski", age: "42", col: "green", dob: "22/05/1982" },
        { id: 4, name: "Brendon Philips", age: "125", col: "orange", dob: "01/08/1980" },
        { id: 5, name: "Margret Marmajuke", age: "16", col: "yellow", dob: "31/01/1999" },
    ];

    //create Tabulator on DOM element with id "example-table"
    var table = new Tabulator("#example-table", {
        // height:205, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
        debugInvalidOptions: true,
        data: tabledata, //assign data to table
        layout: "fitColumns", //fit columns to width of table (optional)
        columns: [ //Define Table Columns
            {
                title: "Name", field: "name", width: 150, editor: true, cellClick: function (e, cell) {
                    //e - the click event object
                    //cell - cell component
                    console.log(cell);
                },
            },
            { title: "Age", field: "age", align: "left", formatter: "progress" },
            { title: "Favourite Color", field: "col" },
            { title: "Date Of Birth", field: "dob", sorter: "date", align: "center" },
        ],
    });

    table.on('rowClick', (e, row) => {
        console.log("Row " + row.getIndex() + " Clicked!!!!");
        // table.edit
        // table.deleteRow(row.getIndex());
    });
}

function loadHome() {
    const content = document.createElement("div");
    content.setAttribute("class", "content");
    content.appendChild(createHeader());
    content.appendChild(createsidebar());
    content.appendChild(createMain());
    document.body.appendChild(content);
    // Display todo items
    document.head.innerHTML = document.head.innerHTML + '    <link href="https://unpkg.com/tabulator-tables/dist/css/tabulator_bootstrap4.min.css" rel="stylesheet"> <script type="text/javascript" src="https://unpkg.com/tabulator-tables/dist/js/tabulator.min.js"></script> <script src="https://cdnjs.cloudflare.com/ajax/libs/luxon/2.3.1/luxon.min.js" integrity="sha512-Nw0Abk+Ywwk5FzYTxtB70/xJRiCI0S2ORbXI3VBlFpKJ44LM6cW2WxIIolyKEOxOuMI90GIfXdlZRJepu7cczA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>';
    displayTable();
}

window.onload = function (e) {
    loadHome();
}