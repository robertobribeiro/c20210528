const RemoveButton = () => {
    const removeButton = document.createElement("button");
    removeButton.classList.add("check-button");
    removeButton.innerText = "remove";

    removeButton.addEventListener("click", removeTask);

    return removeButton;
}

const removeTask = (event) => {
    const removeButton = event.target;
    const removeTask = removeButton.parentElement;

    removeTask.remove();
}

export default RemoveButton;