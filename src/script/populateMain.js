import initializeProjects from "./initializeProjects";
import initializeTasks from "./initializeTasks";
import createNewProjectForm from "./createNewProject";
import createNewTaskForm from "./createNewTask";
import { getProjects } from "./projects";
import createSVGImg from "./createSVGImg";
import tasksSVG from "../assets/svg/clipboard-add-svgrepo-com.svg";
import projectSVG from "../assets/svg/rocket-svgrepo-com.svg";

export function createTaskButton(projectTitle) {
  // Access existing elements
  const selectedProject = getProjects().find(
    (project) => project.title === projectTitle,
  );
  const dialogElement = document.querySelector("dialog");
  // Create button element
  const taskButtonSVGElement = createSVGImg(tasksSVG, "customCursor", "taskButtonSVG");
  // Add project title as data
  taskButtonSVGElement.dataset.projectTitle = selectedProject.title;

  taskButtonSVGElement.addEventListener("click", () => {
    dialogElement.textContent = "";
    dialogElement.appendChild(createNewTaskForm());
    dialogElement.showModal();
  });
  return taskButtonSVGElement;
}

export function createProjectButton() {
  const projectSVGElement = createSVGImg(projectSVG, "customCursor", "projectSVG");
  // Access existing elements
  const dialogElement = document.querySelector("dialog");
  // Create button element
  projectSVGElement.addEventListener("click", () => {
    dialogElement.textContent = "";
    dialogElement.appendChild(createNewProjectForm());
    dialogElement.showModal();
  });
  return projectSVGElement;
}

export default function populateMain(clickedElementId, projectTitle) {
  const mainElement = document.querySelector("main");
  // Clear main
  mainElement.textContent = "";

  // Adding content to main elements

  if (clickedElementId === "projects") {
    const newProjectButton = createProjectButton();
    const toDoCards = initializeProjects();
    toDoCards.forEach((project) => {
      mainElement.appendChild(project);
    });
    mainElement.appendChild(newProjectButton);
  } else if (clickedElementId === "today") {
    const toDoCards = initializeProjects();
    toDoCards.forEach((project) => {
      mainElement.appendChild(project);
    });
    //   } else if (clickedElementId === 'week') {
    //     const toDoCards = initializeWeek();
    //     toDoCards.forEach((project) => {
    //       mainElement.appendChild(project);
    //     });
    //   } else if (clickedElementId === 'month') {
    //     const toDoCards = initializeMonth();
    //     toDoCards.forEach((project) => {
    //       mainElement.appendChild(project);
    //     });
    //   } else if (clickedElementId === 'quater') {
    //     const toDoCards = initializeQuater();
    //     toDoCards.forEach((project) => {
    //       mainElement.appendChild(project);
    //     });
  } else if (clickedElementId === "taskButton") {
    const projectHeading = document.createElement("h1");
    projectHeading.innerText = projectTitle;
    const taskCards = initializeTasks(projectTitle);
    taskCards.forEach((task) => {
      mainElement.appendChild(task);
    });
    const newTaskButton = createTaskButton(projectTitle);
    mainElement.appendChild(newTaskButton);
  }
  return mainElement;
}
