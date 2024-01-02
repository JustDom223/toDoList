import projects from "./projects.js";

export default function populateMain(clickedElementId) {
    const mainElement = document.createElement('main')
    // Clear main
    mainElement.innerHTML = '';

    // Adding content to main elements

    if (clickedElementId === 'projects') {
        const toDoCards = initializeProjects()
        toDoCards.forEach(project => {
            mainElement.appendChild(project)
        });
    } else if (clickedElementId === 'today') {
        const toDoCards = initializeToday()
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
        const taskCards = initializeTasks()
        taskCards.forEach(task => {
            mainElement.appendChild(task)
        })
    };
    return mainElement;
};

export function initializeProjects() {
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
                for (const project of projects){
                    if(project.title === projectTitleElement.innerHTML){
                        for(const task of project.tasks){
                            initializeTask(task)

                        }
                    }
                }
                // initializeTasks()
            });

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

export function initializeTask(task) {
    // Create elements for Menupage
    const taskCardElement = document.createElement('div');
    const taskDescElement = document.createElement('p');
    const taskDueDateLabelElement = document.createElement('label')
    const taskDueDateElement = document.createElement('input');
    const taskPriorityElement = document.createElement('p');
    const taskCompletionElement = document.createElement('input');


    // Adding a class to the card
    taskCardElement.classList.add('jobCard');
    taskDueDateLabelElement.classList.add('jobDueDateLabel');
    taskDueDateElement.classList.add('jobDueDate');
    taskPriorityElement.classList.add('jobPriority');

    // Adding ID to 


    // Choosing element type
    taskDueDateElement.type = 'date';
    taskCompletionElement.type = 'checkbox';

    // Adding content to elements
    taskDescElement.innerHTML = project.description;
    taskDueDateLabelElement.innerHTML = 'Due Date: '
    taskDueDateElement.value = project.dueDate;
    taskPriorityElement.innerHTML = project.priority;


    // Creating event listeners to the Task button
        // Adding event listeners

    taskCardElement.appendChild(taskDescElement);
    taskCardElement.appendChild(taskDueDateLabelElement);
    taskCardElement.appendChild(taskDueDateElement);
    taskCardElement.appendChild(taskPriorityElement);
    taskCardElement.appendChild(taskCompletionElement);


    return taskCardElement;
};
