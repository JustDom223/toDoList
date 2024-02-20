import deleteSVG from "../assets/svg/recycle-bin-trash-svgrepo-com.svg";
import { getProjects } from "./projects";
import createSVGImg from "./createSVGImg";

export default function initializeTasks(projectTitle) {
  const selectedProject = getProjects().find(
    (project) => project.title === projectTitle,
  );
  const taskCards = selectedProject.tasks.map((task) => {
    // Create elements for Menupage
    const taskCardElement = document.createElement("div");
    const taskDescElement = document.createElement("p");
    const taskPriorityElement = document.createElement("p");
    const taskCompletionElement = document.createElement("input");
    const taskDeleteButtonElement = createSVGImg(
      deleteSVG,
      "actionButton",
      "taskDeleteSVG",
    );

    // Adding a class to the card
    taskCardElement.classList.add("jobCard");
    taskPriorityElement.classList.add("jobPriority");

    // taskDeleteButtonElement
    taskDeleteButtonElement.dataset.projectTitle = projectTitle;
    taskDeleteButtonElement.dataset.projectTaskDesc = task.description;
    taskDeleteButtonElement.dataset.action = "deleteTask";
    // Choosing element type
    taskCompletionElement.type = "checkbox";

    // Adding content to elements
    taskDescElement.innerHTML = task.description;
    taskPriorityElement.innerHTML = task.priority;

    // Creating event listeners to the Task button
    // Adding event listeners

    taskCardElement.appendChild(taskDescElement);
    taskCardElement.appendChild(taskPriorityElement);
    taskCardElement.appendChild(taskCompletionElement);
    taskCardElement.appendChild(taskDeleteButtonElement);
    return taskCardElement;
  });

  return taskCards;
}
