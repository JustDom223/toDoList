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





export function createProjectButton(){
    // Create button element
    const projectButtonElement = document.createElement('input')
    // Choosing element type
    projectButtonElement.type = 'button'
    // Adding content to button
    projectButtonElement.value = 'Create new Project'
    // Adding classes to element
    projectButtonElement.classList.add('button')
    // Adding ID's
    projectButtonElement.id = 'projectButton'

    projectButtonElement.addEventListener('click', )


    return projectButtonElement
}

function createNewProject(){
    
}