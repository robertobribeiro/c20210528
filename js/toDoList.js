import FinishButton from "../js/components/finishButton.js";
import RemoveButton from "../js/components/removeButton.js";

const createTask = (event) => {

    event.preventDefault();

    const input = document.querySelector("[data-form-input]");
    const inputTask = input.value;
    const list = document.querySelector("[data-list]");

    const taskListItem = document.createElement("li");
    taskListItem.classList.add("task");

    const newContent = `<p class="content">${inputTask}</p>`;

    taskListItem.innerHTML = newContent;
    taskListItem.appendChild(FinishButton());
    taskListItem.appendChild(RemoveButton());
    list.appendChild(taskListItem);
    input.value = " ";
}

const newItemButton = document.querySelector("[data-form-button]");

newItemButton.addEventListener("click", createTask);
