export default function populateMain(clickedElementId){
    const mainElement = document.createElement('main')
    // Clear main
    mainElement.innerHTML = '';
    
    // Adding content to main elements
    
    if(clickedElementId === 'today'){
        const toDoCards = initializeToday()
        toDoCards.forEach(task =>{
            mainElement.appendChild(task)
        })
// 
    }else if(clickedElementId === 'week'){
        const toDoCards = initializeWeek()
        toDoCards.forEach(task =>{
            mainElement.appendChild(task)
        })
    }else if(clickedElementId === 'month'){
        const toDoCards = initializeMonth()
        toDoCards.forEach(task =>{
            mainElement.appendChild(task)
        })
        
    }else if(clickedElementId === 'quater'){
        const toDoCards = initializeQuater()
        toDoCards.forEach(task =>{
            mainElement.appendChild(task)
        })

    }
    return mainElement
}

