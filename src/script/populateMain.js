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
        })
    };
    return mainElement;
};

export function createProjectButton() {
    // Access existing elements
    const dialogElement = document.querySelector('#dialog');
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
        dialogElement.appendChild(createNewProjectForm());
        dialogElement.showModal();
    });
    return projectButtonElement
};

function createNewProjectForm() {

    // Create form
    const formElement = document.createElement('form');
    // Create form children
    const formTitleElement = document.createElement('h1');

    const titleInputContainer = document.createElement('div')
    const formProjectTitleLabelElement = document.createElement('label');
    const formProjectTitleInputElement = document.createElement('input');
    
    
    const descInputContainer = document.createElement('div')
    const formProjectDescLabelElement = document.createElement('label');
    const formProjectDescInputElement = document.createElement('input');
    
    
    const dueInputContainer = document.createElement('div')
    const formProjectDueDateLabelElement = document.createElement('label');
    const formProjectDueDateInputElement = document.createElement('input');
    
    
    const priInputContainer = document.createElement('div')
    const formProjectPriorityLabelElement = document.createElement('label');
    const formProjectPriorityInputElement = document.createElement('select');

    const formSubmitButton = document.createElement('input');

    // Choosing element type
    formProjectDueDateInputElement.type = 'date';
    formSubmitButton.type = 'submit';

    // Element classes
    formElement.classList.add('projectForm')

    // Label elements
    formProjectTitleLabelElement.classList.add('label')
    formProjectDescLabelElement.classList.add('label')
    formProjectDueDateLabelElement.classList.add('label')
    formProjectPriorityLabelElement.classList.add('label')

    formProjectTitleInputElement.classList.add('input')
    formProjectDescInputElement.classList.add('input')
    formProjectDueDateInputElement.classList.add('input')
    formProjectPriorityInputElement.classList.add('input')
    
    // Element ID's
    formElement.id = 'projectForm'
    formProjectTitleInputElement.id = 'titleInput'
    formProjectDescInputElement.id = 'descInput'
    formProjectDueDateInputElement.id = 'dueDateInput'
    formProjectPriorityInputElement.id = 'priorityInput'
       
    // Adding content to elements
    formTitleElement.textContent = 'Create your new project.';
    formProjectTitleLabelElement.textContent = 'Project Title: ';
    formProjectDescLabelElement.textContent = 'Project Description: ';
    formProjectDueDateLabelElement.textContent = 'Project Due Date: ';
    formProjectPriorityLabelElement.textContent = 'Project Priority: ';
    formSubmitButton.value = 'Submit new project'

    // Logic for select options
    const priorityOptions = ['High', 'Medium', 'Low'];
    priorityOptions.forEach(option => {
        const optionsElement = document.createElement('option');
        optionsElement.value = option;
        optionsElement.text = option;
        
        formProjectPriorityInputElement.appendChild(optionsElement)
    })
    
    // Adding an event listener to the submit button
    formSubmitButton.addEventListener('submit', function (event) {
        event.preventDefault();
        submitProject();
    });
    

    // Add children to containers
    titleInputContainer.appendChild(formProjectTitleLabelElement)
    titleInputContainer.appendChild(formProjectTitleInputElement)

    descInputContainer.appendChild(formProjectDescLabelElement)
    descInputContainer.appendChild(formProjectDescInputElement)

    dueInputContainer.appendChild(formProjectDueDateLabelElement)
    dueInputContainer.appendChild(formProjectDueDateInputElement)

    priInputContainer.appendChild(formProjectPriorityLabelElement)
    priInputContainer.appendChild(formProjectPriorityInputElement)

    // Add children to formElement
    formElement.appendChild(formTitleElement);
    formElement.appendChild(titleInputContainer);
    formElement.appendChild(descInputContainer);
    formElement.appendChild(dueInputContainer);
    formElement.appendChild(priInputContainer);
    formElement.appendChild(formSubmitButton);

    return formElement;
}

function submitProject(){
    const form = document.querySelector('#projectForm')
    console.table('Form Data', new FormData(form))
}