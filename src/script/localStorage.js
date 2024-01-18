import { getProjects, setProjects } from "./projects";
import { createTask } from "./constructors";

export function updateLocalStorage(){
    const projectsString = JSON.stringify(getProjects()) 
    localStorage.setItem('myProjects', projectsString)
}

export function fetchLocalStorage(){
    const retrievedProjectsString = localStorage.getItem('myProjects');

    if (retrievedProjectsString) {
        const retrievedProjects = JSON.parse(retrievedProjectsString);
        for(const project of retrievedProjects){
            project.taskCompletion = function(){
                if(this.complete){
                    this.complete = false;
                }else{
                    this.complete = true;
                };
            };
            project.createTask = function createTask(description, priority, dateCreated, dueDate){
                return {
                    description: description,
                    priority: priority,
                    dateCreated: dateCreated,
                    dueDate: dueDate,
            
                    complete: false,
                    taskCompletion: function() {
                        if(this.complete){
                            this.complete = false;
                        }else{
                            this.complete = true;
                        }
                    },
            
                };
            };
        };
        console.log(retrievedProjects)
        setProjects(retrievedProjects);
    }
}


