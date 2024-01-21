let projects = [];

export function getProjects() {
  return projects;
}

export function setProjects(newProjects) {
  projects = newProjects;
}

export function deleteProject(projectTitle) {
  const isConfirmed = confirm("Are you sure you want to delete this project?");
  if (isConfirmed) {
    const newProjects = projects.filter(
      (project) => project.title !== projectTitle,
    );
    projects = newProjects;
  }
}

function replaceConstructorFunctions() {}
