import projects from "./projects.js";
import populateMain from "./populateMain.js";


export default function initializeProjects() {
    const currentDate = new Date();
    const projectCards = projects.filter(project => {
        const startDate = new Date(project.startDate);
        return startDate <= currentDate;
    })
        .map(project => {
            // Create elements for Menupage
            const projectCardElement = document.createElement('div');
            const projectTitleElement = document.createElement('h2');
            const projectDescElement = document.createElement('p');
            const projectDueDateLabelElement = document.createElement('label')
            const projectDueDateElement = document.createElement('input');
            const projectPriorityElement = document.createElement('p');
            const projectCompletionElement = document.createElement('input');
            const projectTasksButtonElement = document.createElement('input')

            // Adding a class to the card
            projectCardElement.classList.add('jobCard');
            projectTitleElement.classList.add('jobTitle');
            projectDueDateLabelElement.classList.add('jobDueDateLabel');
            projectDueDateElement.classList.add('jobDueDate');
            projectPriorityElement.classList.add('jobPriority');
            projectTasksButtonElement.classList.add('button')

            // Adding ID to 
            projectTasksButtonElement.id = 'taskButton'

            // Choosing element type
            projectDueDateElement.type = 'date';
            projectCompletionElement.type = 'checkbox';
            projectTasksButtonElement.type = 'button';
            // Adding content to elements
            projectTitleElement.innerHTML = project.title;
            projectDescElement.innerHTML = project.description;
            projectDueDateLabelElement.innerHTML = 'Due Date: '
            projectDueDateElement.value = project.dueDate;
            projectPriorityElement.innerHTML = project.priority;
            projectTasksButtonElement.value = 'Project Tasks'

            // Creating event listeners to the Task button
                // Adding event listeners
            projectTasksButtonElement.addEventListener('click', () => {
                populateMain('taskButton', project.title)
            });
            // console.log(projectTasksButtonElement.id)
            projectCardElement.appendChild(projectTitleElement);
            projectCardElement.appendChild(projectDescElement);
            projectCardElement.appendChild(projectDueDateLabelElement);
            projectCardElement.appendChild(projectDueDateElement);
            projectCardElement.appendChild(projectPriorityElement);
            projectCardElement.appendChild(projectCompletionElement);
            projectCardElement.appendChild(projectTasksButtonElement);

            return projectCardElement;
        });
    return projectCards;
};