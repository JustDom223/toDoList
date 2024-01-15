import { getProjects } from "./projects";

export default function initializeTasks(projectTitle) {
    const project = getProjects().find(project => project.title === projectTitle)
    const taskCards = project.tasks.map(task =>  {

        // Create elements for Menupage
        const taskCardElement = document.createElement('div');
        const taskDescElement = document.createElement('p');
        const taskPriorityElement = document.createElement('p');
        const taskCompletionElement = document.createElement('input');
    
    
        // Adding a class to the card
        taskCardElement.classList.add('jobCard');
        taskPriorityElement.classList.add('jobPriority');
    
        // Adding ID to 
    
    
        // Choosing element type
        taskCompletionElement.type = 'checkbox';
    
        // Adding content to elements
        taskDescElement.innerHTML = task.description;
        taskPriorityElement.innerHTML = task.priority;

        // Creating event listeners to the Task button
            // Adding event listeners
    
        taskCardElement.appendChild(taskDescElement);
        taskCardElement.appendChild(taskPriorityElement);
        taskCardElement.appendChild(taskCompletionElement);
        return taskCardElement;
    });

    return taskCards
};