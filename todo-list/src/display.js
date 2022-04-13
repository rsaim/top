import { SortModule, TabulatorFull as Tabulator } from 'tabulator-tables';
Tabulator.registerModule([SortModule]);
// var moment = require("moment");

function displayTable(projectList) {
    let json_data = [];
    for (let project of projectList) {
        for (let todo of project.todos) {
            json_data.push(todo.toJson());
        }
    }

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
            { title: "Due Date", field: "dueDate", editor: true},
            { title: "Priotiy", field: "priority", editor: true, },
            { title: "Progress", field: "progress", formatter: "progress", editor: true, },
        ],
    });

    table.on('rowClick', (e, row) => {
        console.log("Row " + row.getIndex() + " Clicked!!!!");
        // table.deleteRow(row.getIndex());
    });
}

export { displayTable };