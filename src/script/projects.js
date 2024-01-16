let projects = [];

export function getProjects() {
    return projects;
};

export function setProjects(newProjects) {
    projects = newProjects;
};


export function deleteProject(projectTitle) {
    const newProjects = projects.filter(project => project.title !== projectTitle)
    projects = newProjects;
};
