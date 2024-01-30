// Import SVG files
import tasksSVG from "../assets/svg/clipboard-add-svgrepo-com.svg";
import projectSVG from "../assets/svg/rocket-svgrepo-com.svg";
// Import functions
import { getProjects } from "./projects";
import createSVGImg from "./createSVGImg";
import createNewProjectForm from "./createNewProject";


export function createTaskButton(projectTitle) {
    // Access existing elements
    const selectedProject = getProjects().find(
      (project) => project.title === projectTitle,
    );
    // Create button element
    const taskButtonSVGElement = createSVGImg(tasksSVG, "actionButton", "taskButtonSVG");
    // Add project title as data
    taskButtonSVGElement.dataset.projectTitle = selectedProject.title;
    taskButtonSVGElement.dataset.action = "createTask";
    console.log("did i make it?");
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