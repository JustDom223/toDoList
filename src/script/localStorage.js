import { getProjects, setProjects } from "./projects";


export function updateLocalStorage(){
    const projectsString = JSON.stringify(getProjects()) 
    localStorage.setItem('myProjects', projectsString)
}

export function fetchLocalStorage(){
    const retrievedProjectsString = localStorage.getItem('myProjects');

    if (retrievedProjectsString) {
        const retrievedProjects = JSON.parse(retrievedProjectsString);
        console.log(retrievedProjects)
        setProjects(retrievedProjects);
    }
}