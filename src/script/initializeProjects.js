import { getProjects} from "./projects";
import populateMain from "./populateMain";
import createSVGImg from "./createSVGImg";
// import SVG files
import deleteSVG from "../assets/svg/recycle-bin-trash-svgrepo-com.svg";
import taskSVG from "../assets/svg/tasks-tick-svgrepo-com.svg";

export default function initializeProjects() {
  const currentDate = new Date();
  const projectCards = getProjects()
    .filter((project) => {
      const startDate = new Date(project.startDate);
      return startDate <= currentDate;
    })
    .map((project) => {
      // Create elements for Menupage;;
      const projectCardElement = document.createElement("div");
      const projectTitleElement = document.createElement("h2");
      const projectDescElement = document.createElement("p");
      const projectDueDateLabelElement = document.createElement("label");
      const projectDueDateElement = document.createElement("input");
      const projectPriorityElement = document.createElement("p");
      const projectCompletionElement = document.createElement("input");
      const projectTasksButtonElement = createSVGImg(taskSVG, "actionButton", "projectTasksSVG");
      const projectDeleteButtonElement = createSVGImg(deleteSVG, "actionButton", "projectDeleteSVG");

      // Adding a class to the card
      projectCardElement.classList.add("jobCard");
      projectTitleElement.classList.add("jobTitle");
      projectDueDateLabelElement.classList.add("jobDueDateLabel");
      projectDueDateElement.classList.add("jobDueDate");
      projectPriorityElement.classList.add("jobPriority");

      // projectDeleteButtonElement
      projectDeleteButtonElement.dataset.projectTitle = project.title;
      projectDeleteButtonElement.dataset.action = "delete";


      // Choosing element type
      projectDueDateElement.type = "date";
      projectCompletionElement.type = "checkbox";

      // Adding content to elements
      projectTitleElement.innerHTML = project.title;
      projectDescElement.innerHTML = project.description;
      projectDueDateLabelElement.innerHTML = "Due Date: ";
      projectDueDateElement.value = project.dueDate;
      projectPriorityElement.innerHTML = project.priority;

      // Creating event listeners to the Task button
      // Adding event listeners
      projectTasksButtonElement.addEventListener("click", () => {
        populateMain("taskButton", project.title);
      });

      // console.log(projectTasksButtonElement.id)
      projectCardElement.appendChild(projectTitleElement);
      projectCardElement.appendChild(projectDescElement);
      projectCardElement.appendChild(projectDueDateLabelElement);
      projectCardElement.appendChild(projectDueDateElement);
      projectCardElement.appendChild(projectPriorityElement);
      projectCardElement.appendChild(projectCompletionElement);
      projectCardElement.appendChild(projectTasksButtonElement);
      projectCardElement.appendChild(projectDeleteButtonElement);

      return projectCardElement;
    });
  return projectCards;
}
