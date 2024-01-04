import initializeProjects from "./initializeProjects.js";
import initializeTasks from "./initializeTasks.js";

export default function populateMain(clickedElementId, projectTitle) {
    const mainElement = document.querySelector('main')
    // Clear main
    mainElement.textContent = '';

    // Adding content to main elements

    if (clickedElementId === 'projects') {
        const newProjectButton = createProjectButton()
        mainElement.appendChild(newProjectButton)
        const toDoCards = initializeProjects()
        toDoCards.forEach(project => {
            mainElement.appendChild(project)
        });
    } else if (clickedElementId === 'today') {
        const toDoCards = initializeProjects()
        toDoCards.forEach(project => {
            mainElement.appendChild(project)
        });
    } else if (clickedElementId === 'week') {
        const toDoCards = initializeWeek()
        toDoCards.forEach(project => {
            mainElement.appendChild(project)
        });
    } else if (clickedElementId === 'month') {
        const toDoCards = initializeMonth()
        toDoCards.forEach(project => {
            mainElement.appendChild(project)
        });

    } else if (clickedElementId === 'quater') {
        const toDoCards = initializeQuater()
        toDoCards.forEach(project => {
            mainElement.appendChild(project)
        });

    } else if (clickedElementId === 'taskButton') {
        const taskCards = initializeTasks(projectTitle)
        taskCards.forEach(task => {
            mainElement.appendChild(task)
            console.log(task)
        })
    };
    return mainElement;
};

export function createProjectButton() {
    // Access existing elements
    const dialogElement = document.querySelector('dialog');
    // Create button element
    const projectButtonElement = document.createElement('input');
    // Choosing element type
    projectButtonElement.type = 'button';
    // Adding content to button
    projectButtonElement.value = 'Create new Project';
    // Adding classes to element
    projectButtonElement.classList.add('button');
    // Adding ID's
    projectButtonElement.id = 'projectButton';

    projectButtonElement.addEventListener('click', () => {
        dialogElement.textContent = '';
        dialogElement.appendChild(createNewProject());
        dialogElement.showModal();
    });
    return projectButtonElement
};

function createNewProject() {

    // Create form
    const formElement = document.createElement('form');
    // Create form children
    const formTitleElement = document.createElement('h1');

    const formProjectTitlelabelElement = document.createElement('label');
    const formProjectTitleInputElement = document.createElement('input');

    const formProjectDesclabelElement = document.createElement('label');
    const formProjectDescInputElement = document.createElement('input');

    const formProjectDueDatelabelElement = document.createElement('label');
    const formProjectDueDateInputElement = document.createElement('input');

    const formProjectPrioritylabelElement = document.createElement('label');
    const formProjectPriorityInputElement = document.createElement('input');

    const formSubmitButton = document.createElement('input');

    // Choosing element type
    formProjectDueDateInputElement.type = 'date';
    formSubmitButton.type = 'button';


    // Adding content to elements
    formTitleElement.textContent = 'Create your new project.';
    formProjectTitlelabelElement.textContent = 'Project Title: ';
    formProjectDesclabelElement.textContent = 'Project Description: ';
    formProjectDueDatelabelElement.textContent = 'Project Due Date: ';
    formProjectPrioritylabelElement.textContent = 'Project Priority: ';
    formSubmitButton.value = 'Submit new project'


    // Add children to formElement
    formElement.appendChild(formTitleElement);

    formElement.appendChild(formProjectTitlelabelElement);
    formElement.appendChild(formProjectTitleInputElement);

    formElement.appendChild(formProjectDesclabelElement);
    formElement.appendChild(formProjectDescInputElement);

    formElement.appendChild(formProjectDueDatelabelElement);
    formElement.appendChild(formProjectDueDateInputElement);

    formElement.appendChild(formProjectPrioritylabelElement);
    formElement.appendChild(formProjectPriorityInputElement);

    formElement.appendChild(formSubmitButton)

    return formElement;

}