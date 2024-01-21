import { createProject } from "./constructors";
import { getProjects } from "./projects";
import populateMain from "./populateMain";
import { updateLocalStorage } from "./localStorage";

export default function createNewProjectForm() {
  // Create form
  const formElement = document.createElement("form");
  // Create form children
  const formTitleElement = document.createElement("h1");

  const titleInputContainer = document.createElement("div");
  const formProjectTitleLabelElement = document.createElement("label");
  const formProjectTitleInputElement = document.createElement("input");

  const descInputContainer = document.createElement("div");
  const formProjectDescLabelElement = document.createElement("label");
  const formProjectDescInputElement = document.createElement("input");

  const dueInputContainer = document.createElement("div");
  const formProjectDueDateLabelElement = document.createElement("label");
  const formProjectDueDateInputElement = document.createElement("input");

  const priInputContainer = document.createElement("div");
  const formProjectPriorityLabelElement = document.createElement("label");
  const formProjectPriorityInputElement = document.createElement("select");

  const formSubmitButton = document.createElement("input");

  // Choosing element type
  formProjectDueDateInputElement.type = "date";
  formSubmitButton.type = "button";

  // Element classes
  formElement.classList.add("projectForm");

  // Label elements
  formProjectTitleLabelElement.classList.add("label");
  formProjectDescLabelElement.classList.add("label");
  formProjectDueDateLabelElement.classList.add("label");
  formProjectPriorityLabelElement.classList.add("label");

  formProjectTitleInputElement.classList.add("input");
  formProjectDescInputElement.classList.add("input");
  formProjectDueDateInputElement.classList.add("input");
  formProjectPriorityInputElement.classList.add("input");

  // Element ID's
  formElement.id = "projectForm";
  formProjectTitleInputElement.id = "titleInput";
  formProjectDescInputElement.id = "descInput";
  formProjectDueDateInputElement.id = "dueDateInput";
  formProjectPriorityInputElement.id = "priorityInput";

  formProjectTitleInputElement.name = "titleInput";
  formProjectDescInputElement.name = "descInput";
  formProjectDueDateInputElement.name = "dueDateInput";
  formProjectPriorityInputElement.name = "priorityInput";

  // Adding content to elements
  formTitleElement.textContent = "Create your new project.";
  formProjectTitleLabelElement.textContent = "Project Title: ";
  formProjectDescLabelElement.textContent = "Project Description: ";
  formProjectDueDateLabelElement.textContent = "Project Due Date: ";
  formProjectPriorityLabelElement.textContent = "Project Priority: ";
  formSubmitButton.value = "Submit new project";

  // Logic for select options
  const priorityOptions = ["High", "Medium", "Low"];
  priorityOptions.forEach((option) => {
    const optionsElement = document.createElement("option");
    optionsElement.value = option;
    optionsElement.text = option;

    formProjectPriorityInputElement.appendChild(optionsElement);
  });

  // Adding an event listener to the submit button
  formSubmitButton.addEventListener("click", (event) => {
    const dialogElement = document.querySelector("dialog");
    event.preventDefault();
    submitProject();
    dialogElement.close();
    // Updating DOM
    populateMain("projects");
  });

  // Add children to containers
  titleInputContainer.appendChild(formProjectTitleLabelElement);
  titleInputContainer.appendChild(formProjectTitleInputElement);

  descInputContainer.appendChild(formProjectDescLabelElement);
  descInputContainer.appendChild(formProjectDescInputElement);

  dueInputContainer.appendChild(formProjectDueDateLabelElement);
  dueInputContainer.appendChild(formProjectDueDateInputElement);

  priInputContainer.appendChild(formProjectPriorityLabelElement);
  priInputContainer.appendChild(formProjectPriorityInputElement);

  // Add children to formElement
  formElement.appendChild(formTitleElement);
  formElement.appendChild(titleInputContainer);
  formElement.appendChild(descInputContainer);
  formElement.appendChild(dueInputContainer);
  formElement.appendChild(priInputContainer);
  formElement.appendChild(formSubmitButton);

  return formElement;
}

export function submitProject() {
  const form = document.querySelector("#projectForm");
  const formData = new FormData(form);
  const currentDate = new Date();
  const newProject = createProject(
    formData.get("titleInput"),
    formData.get("descInput"),
    currentDate,
    formData.get("dueDateInput"),
    formData.get("priorityInput"),
  );
  getProjects().unshift(newProject);
  updateLocalStorage();
}
