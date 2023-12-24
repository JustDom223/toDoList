import tasks from "./tasks.js";

export default function populateMain(clickedElementId){
    const mainElement = document.createElement('main')
    // Clear main
    mainElement.innerHTML = '';
    
    // Adding content to main elements
    
    if(clickedElementId === 'today'){
        const toDoCards = initializeToday()
        toDoCards.forEach(task =>{
            mainElement.appendChild(task)
        });
// 
    }else if(clickedElementId === 'week'){
        const toDoCards = initializeWeek()
        toDoCards.forEach(task =>{
            mainElement.appendChild(task)
        });
    }else if(clickedElementId === 'month'){
        const toDoCards = initializeMonth()
        toDoCards.forEach(task =>{
            mainElement.appendChild(task)
        });
        
    }else if(clickedElementId === 'quater'){
        const toDoCards = initializeQuater()
        toDoCards.forEach(task =>{
            mainElement.appendChild(task)
        });

    };
    return mainElement;
};

export function initializeToday(){

    const jobCards = tasks.map(task => {
        
        // Create elements for Menupage
        const jobCardElement = document.createElement('div');
        const jobTitleElement = document.createElement('h2');
        const jobDescElement = document.createElement('p');
        const jobDueDateElement = document.createElement('input');
        const jobPriorityElement = document.createElement('p');
        const jobCompletionElement = document.createElement('input');
        
        // Adding a class to the card
        jobCardElement.classList.add('jobCard');
        jobTitleElement.classList.add('jobTitle');
        jobDueDateElement.classList.add('jobDueDate');
        jobPriorityElement.classList.add('jobPriority');

        // Choosing element type
        jobDueDateElement.type = 'date';
        jobCompletionElement.type = 'checkbox';
        // Adding content to elements
        jobTitleElement.innerHTML = task.title;
        jobDescElement.innerHTML = task.description;
        jobDueDateElement.value = task.dueDate;
        jobPriorityElement.innerHTML = task.priority;
        
        jobCardElement.appendChild(jobTitleElement);
        jobCardElement.appendChild(jobDescElement);
        jobCardElement.appendChild(jobDueDateElement);
        jobCardElement.appendChild(jobPriorityElement);
        jobCardElement.appendChild(jobCompletionElement);
        
        return jobCardElement;
    });
    return jobCards;



};