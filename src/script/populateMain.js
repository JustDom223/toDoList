import initializeProjects from './initializeProjects';
import initializeTasks from './initializeTasks';
import createNewProjectForm from './createNewProject';
import createNewTaskForm from './createNewTask';
import { getProjects } from './projects';

export function createTaskButton(projectTitle) {
  // Access existing elements
  const selectedProject = getProjects().find((project) => project.title === projectTitle);
  const dialogElement = document.querySelector('dialog');
  // Create button element
  const taskButtonElement = document.createElement('input');
  // Choosing element type
  taskButtonElement.type = 'button';
  // Adding content to button
  taskButtonElement.value = 'Create new task';
  // Add project title as data
  taskButtonElement.dataset.projectTitle = selectedProject.title;
  // Adding classes to element
  taskButtonElement.classList.add('button');
  // Adding ID's
  taskButtonElement.id = 'taskButton';

  taskButtonElement.addEventListener('click', () => {
    dialogElement.textContent = '';
    dialogElement.appendChild(createNewTaskForm());
    dialogElement.showModal();
  });
  return taskButtonElement;
}

export function createProjectButton() {
  // Access existing elements
  const dialogElement = document.querySelector('dialog');
  // Create button element
  const projectButtonElement = document.createElement('input');
  // Choosing element type
  projectButtonElement.type = 'button';
  // Adding content to button
  projectButtonElement.value = 'New Project';
  // Adding classes to element
  projectButtonElement.classList.add('button');
  // Adding ID's
  projectButtonElement.id = 'projectButton';

  projectButtonElement.addEventListener('click', () => {
    dialogElement.textContent = '';
    dialogElement.appendChild(createNewProjectForm());
    dialogElement.showModal();
  });
  return projectButtonElement;
}

export default function populateMain(clickedElementId, projectTitle) {
  const mainElement = document.querySelector('main');
  // Clear main
  mainElement.textContent = '';

  // Adding content to main elements

  if (clickedElementId === 'projects') {
    const newProjectButton = createProjectButton();
    const toDoCards = initializeProjects();
    toDoCards.forEach((project) => {
      mainElement.appendChild(project);
    });
    mainElement.appendChild(newProjectButton);
  } else if (clickedElementId === 'today') {
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
  } else if (clickedElementId === 'taskButton') {
    const projectHeading = document.createElement('h1');
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
