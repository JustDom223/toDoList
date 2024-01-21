import { getProjects, setProjects } from './projects';

export function updateLocalStorage() {
  const projectsString = JSON.stringify(getProjects());
  localStorage.setItem('myProjects', projectsString);
}

export function fetchLocalStorage() {
  const retrievedProjectsString = localStorage.getItem('myProjects');

  if (retrievedProjectsString) {
    const retrievedProjects = JSON.parse(retrievedProjectsString);
    for (const project of retrievedProjects) {
      project.taskCompletion = function () {
        if (this.complete) {
          this.complete = false;
        } else {
          this.complete = true;
        }
      };
      project.createTask = function (description, priority, dateCreated, dueDate) {
        return {
          description,
          priority,
          dateCreated,
          dueDate,

          complete: false,
          taskCompletion() {
            if (this.complete) {
              this.complete = false;
            } else {
              this.complete = true;
            }
          },

        };
      };
    }
    console.log(retrievedProjects);
    setProjects(retrievedProjects);
  }
}
