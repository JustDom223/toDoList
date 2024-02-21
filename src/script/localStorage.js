import { getProjects, setProjects } from "./projects";
import { taskCompletion, createTask } from "./constructors";

export function updateLocalStorage() {
  const projectsString = JSON.stringify(getProjects());
  localStorage.setItem("myProjects", projectsString);
}

export function fetchLocalStorage() {
  const retrievedProjectsString = localStorage.getItem("myProjects");

  if (retrievedProjectsString) {
    const retrievedProjects = JSON.parse(retrievedProjectsString);

    // Assign functions to each retrieved project
    const projectsWithFunctions = retrievedProjects.map((project) => ({
      ...project,
      taskCompletion,
      createTask,
    }));

    // Set the modified projects back
    setProjects(projectsWithFunctions);
    console.log(projectsWithFunctions);
    console.log(retrievedProjects);
  }
}
