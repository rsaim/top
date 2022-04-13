import Todo from "./todo";
import ProjectStorage from './storage';
import { displayTable } from "./display";

function createOverlayButton() {
    const overlayButton = document.createElement("button");
    overlayButton.setAttribute("class", "overlayButton");
    overlayButton.innerText = "+ Add Task";
    overlayButton.addEventListener("click", () => {
        document.querySelector(".overlayButton").classList.toggle("hidden");
        document.querySelector(".overlay").classList.toggle("hidden");
    });
    return overlayButton;
}

function createOverlayForm() {
    const overlay = document.createElement("div");
    overlay.setAttribute("class", "overlay");
    overlay.classList.add("hidden");

    const overlayForm = document.createElement("form");
    overlayForm.setAttribute("class", "add-items");

    const projectName = document.createElement("input");
    projectName.setAttribute("type", "text");
    projectName.setAttribute("name", "projectName");
    projectName.setAttribute("placeholder", "Project Name (will create a new project if doesn't already exist)");
    overlayForm.appendChild(projectName);

    const title = document.createElement("input");
    title.setAttribute("type", "text");
    title.setAttribute("name", "title");
    title.setAttribute("placeholder", "Task Title");
    overlayForm.appendChild(title);

    const description = document.createElement("input");
    description.setAttribute("type", "text");
    description.setAttribute("name", "description");
    description.setAttribute("placeholder", "Task description");
    overlayForm.appendChild(description);

    const DueDate = document.createElement("input");
    DueDate.setAttribute("type", "date");
    DueDate.setAttribute("name", "dueDate");
    DueDate.setAttribute("placeholder", "Task Due Date");
    overlayForm.appendChild(DueDate);

    const Priority = document.createElement("input");
    Priority.setAttribute("type", "text");
    Priority.setAttribute("name", "priority");
    Priority.setAttribute("placeholder", "Priority: high/medium/low");
    overlayForm.appendChild(Priority);
    
    const CurrentProgress = document.createElement("input");
    CurrentProgress.setAttribute("type", "number");
    CurrentProgress.setAttribute("name", "progress");
    CurrentProgress.setAttribute("placeholder", "0-100");
    overlayForm.appendChild(CurrentProgress);

    const submitButton = document.createElement("input");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("value", "+Add Task");
    overlayForm.appendChild(submitButton);

    submitButton.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("Task Submitted");
        const title = (document.querySelector('[name=title]')).value;
        const description = (document.querySelector('[name=description]')).value;
        const dueDate = (document.querySelector('[name=dueDate]')).value;
        const projectName = (document.querySelector('[name=projectName]')).value;
        console.log(dueDate);
        // Format date
        let date = new Date(dueDate);
        const yyyy = date.getFullYear();
        let mm = date.getMonth() + 1; // Months start at 0!
        let dd = date.getDate();
        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
        const dueDateFormatted = yyyy + '/' + mm + '/' + dd;

        const priority = (document.querySelector('[name=priority]')).value;
        const progress = (document.querySelector('[name=progress]')).value;
        console.log({ title, description, dueDate, progress });
        
        const todo = new Todo(title, description, dueDateFormatted, priority, false, progress);
        console.log({ projectName });
        ProjectStorage.save_todo(projectName, todo);
        displayTable(ProjectStorage.load());
        document.querySelector(".overlayButton").classList.toggle("hidden");
        document.querySelector(".overlay").classList.toggle("hidden");

        document.querySelector(".add-items").reset();
    });

    overlay.appendChild(overlayForm);
    return overlay;
}

export { createOverlayButton, createOverlayForm };