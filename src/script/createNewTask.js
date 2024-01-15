import { getProjects } from "./projects";
import populateMain from "./populateMain";
import { createTask } from "./constructors";
import { updateLocalStorage } from "./localStorage";

export default function createNewTaskForm() {
    // Create form
    const formElement = document.createElement('form');
    // Create form children
    const formTitleElement = document.createElement('h1');
 
    const descInputContainer = document.createElement('div')
    const formTaskDescLabelElement = document.createElement('label');
    const formTaskDescInputElement = document.createElement('input');
    
    
    const dueInputContainer = document.createElement('div')
    const formTaskDueDateLabelElement = document.createElement('label');
    const formTaskDueDateInputElement = document.createElement('input');
    
    
    const priorityInputContainer = document.createElement('div')
    const formTaskPriorityLabelElement = document.createElement('label');
    const formTaskPriorityInputElement = document.createElement('select');

    const formSubmitButton = document.createElement('input');

    // Choosing element type
    formTaskDueDateInputElement.type = 'date';
    formSubmitButton.type = 'button';

    // Element classes
    formElement.classList.add('taskForm');

    // Label elements
    formTaskDescLabelElement.classList.add('label');
    formTaskDueDateLabelElement.classList.add('label');
    formTaskPriorityLabelElement.classList.add('label');

    formTaskDescInputElement.classList.add('input');
    formTaskDueDateInputElement.classList.add('input');
    formTaskPriorityInputElement.classList.add('input');
    
    // Element ID's
    formElement.id = 'taskForm';
    formTaskDescInputElement.id = 'descInput';
    formTaskDueDateInputElement.id = 'dueDateInput';
    formTaskPriorityInputElement.id = 'priorityInput';

    formTaskDescInputElement.name = 'descInput';
    formTaskDueDateInputElement.name = 'dueDateInput';
    formTaskPriorityInputElement.name = 'priorityInput';
       
    // Adding content to elements
    formTitleElement.textContent = 'Add task';
    formTaskDescLabelElement.textContent = 'Task Description: ';
    formTaskDueDateLabelElement.textContent = 'Task Due Date: ';
    formTaskPriorityLabelElement.textContent = 'Task Priority: (1 being highest priority and 10 being lowest)';
    formSubmitButton.value = 'Submit new task';

    // Logic for select options
    const priorityOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    priorityOptions.forEach(option => {
        const optionsElement = document.createElement('option');
        optionsElement.value = option;
        optionsElement.text = option;
        
        formTaskPriorityInputElement.appendChild(optionsElement)
    });
    
    // Adding an event listener to the submit button
    formSubmitButton.addEventListener('click', function (event) {
        const taskFormButtonElement = document.querySelector('#taskButton')
        const projectTitle = taskFormButtonElement.dataset.projectTitle;
        const dialogElement = document.querySelector('dialog');
        event.preventDefault();
        console.log(projectTitle)
        submitTask(projectTitle);
        dialogElement.close();
        // Updating DOM
    // FIXME: change this so that it update to the correct projects tasks
        populateMain('taskButton', projectTitle);
    });

    // Add children to containers

    descInputContainer.appendChild(formTaskDescLabelElement);
    descInputContainer.appendChild(formTaskDescInputElement);

    dueInputContainer.appendChild(formTaskDueDateLabelElement);
    dueInputContainer.appendChild(formTaskDueDateInputElement);

    priorityInputContainer.appendChild(formTaskPriorityLabelElement);
    priorityInputContainer.appendChild(formTaskPriorityInputElement);

    // Add children to formElement
    formElement.appendChild(formTitleElement); formElement.appendChild(descInputContainer);
    formElement.appendChild(dueInputContainer);
    formElement.appendChild(priorityInputContainer);
    formElement.appendChild(formSubmitButton);

    return formElement;
}

export function submitTask(projectTitle){
    const projects = getProjects()
    for (const project of projects){
        if (project.title === projectTitle){
        const form = document.querySelector('#taskForm');
        const formData = new FormData(form);
        const currentDate = new Date;
        const newTask = createTask(
            formData.get('descInput'),
            formData.get('priorityInput'),
            currentDate,
            formData.get('dueDateInput'),
            );
            
            project.tasks.unshift(newTask);
            updateLocalStorage()
            break;
}}};
