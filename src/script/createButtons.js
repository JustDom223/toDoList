// Import SVG files
import tasksSVG from "../assets/svg/clipboard-add-svgrepo-com.svg";
import projectSVG from "../assets/svg/rocket-svgrepo-com.svg";
// Import functions
import { getProjects } from "./projects";
import createSVGImg from "./createSVGImg";

export function createTaskButton(projectTitle) {
  // Access existing elements
  const selectedProject = getProjects().find(
    (project) => project.title === projectTitle,
  );
  // Create button element
  const taskButtonSVGElement = createSVGImg(
    tasksSVG,
    "actionButton",
    "taskButtonSVG",
  );
  // Add project title as data
  taskButtonSVGElement.dataset.projectTitle = selectedProject.title;
  taskButtonSVGElement.dataset.action = "createTask";
  return taskButtonSVGElement;
}

export function createProjectButton() {
  const projectSVGElement = createSVGImg(
    projectSVG,
    "actionButton",
    "projectSVG",
  );
  // Add project title as data
  // projectSVGElement.dataset.projectTitle = selectedProject.title;
  projectSVGElement.dataset.action = "createProject";

  return projectSVGElement;
}
