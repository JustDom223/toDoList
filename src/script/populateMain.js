import initializeProjects from "./initializeProjects";
import initializeTasks from "./initializeTasks";
import { createProjectButton, createTaskButton  } from "./createButtons";
import activateButtons from "./activateButtons";

// export function createTaskButton(projectTitle) {
//   // Access existing elements
//   const selectedProject = getProjects().find(
//     (project) => project.title === projectTitle,
//   );
//   // const dialogElement = document.querySelector("dialog");
//   // Create button element
//   const taskButtonSVGElement = createSVGImg(tasksSVG, "actionButton", "taskButtonSVG");
//   // Add project title as data
//   taskButtonSVGElement.dataset.projectTitle = selectedProject.title;
//   taskButtonSVGElement.dataset.action = "createTask";

//   // taskButtonSVGElement.addEventListener("click", () => {
//   //   dialogElement.textContent = "";
//   //   dialogElement.appendChild(createNewTaskForm());
//   //   dialogElement.showModal();
//   // });

//   return taskButtonSVGElement;
// }

// export function createProjectButton() {
//   const projectSVGElement = createSVGImg(projectSVG, "customCursor", "projectSVG");
//   // Access existing elements
//   const dialogElement = document.querySelector("dialog");
//   // Create button element
//   projectSVGElement.addEventListener("click", () => {
//     dialogElement.textContent = "";
//     dialogElement.appendChild(createNewProjectForm());
//     dialogElement.showModal();
//   });
//   return projectSVGElement;
// }

export default function populateMain(clickedElementActionData, projectTitle) {
  const mainElement = document.querySelector("main");
  // Clear main
  mainElement.textContent = "";

  // Adding content to main elements

  if (clickedElementActionData === "projects") {
    const newProjectButton = createProjectButton();
    const toDoCards = initializeProjects();
    toDoCards.forEach((project) => {
      mainElement.appendChild(project);
    });
    mainElement.appendChild(newProjectButton);
  } else if (clickedElementActionData === "today") {
    const toDoCards = initializeProjects();
    toDoCards.forEach((project) => {
      mainElement.appendChild(project);
    });
    
    //   } else if (clickedElementActionData === 'week') {
    //     const toDoCards = initializeWeek();
    //     toDoCards.forEach((project) => {
    //       mainElement.appendChild(project);
    //     });
    //   } else if (clickedElementActionData === 'month') {
    //     const toDoCards = initializeMonth();
    //     toDoCards.forEach((project) => {
    //       mainElement.appendChild(project);
    //     });
    //   } else if (clickedElementActionData === 'quater') {
    //     const toDoCards = initializeQuater();
    //     toDoCards.forEach((project) => {
    //       mainElement.appendChild(project);
    //     });
  } else if (clickedElementActionData === "taskButton") {
    const projectHeading = document.createElement("h1");
    projectHeading.innerText = projectTitle;
    const taskCards = initializeTasks(projectTitle);
    taskCards.forEach((task) => {
      mainElement.appendChild(task);
    });
    const newTaskButton = createTaskButton(projectTitle);
    mainElement.appendChild(newTaskButton);
  }
  activateButtons();
  return mainElement;
}
