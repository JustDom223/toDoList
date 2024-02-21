// Define taskCompletion function
export function taskCompletion() {
  if (this.complete) {
    this.complete = false;
  } else {
    this.complete = true;
  }
}

// Define createTask function
export function createTask(description, priority, dateCreated, dueDate) {
  return {
    description,
    priority,
    dateCreated,
    dueDate,
    complete: false,
    taskCompletion,
  };
}

// Function to create a project
export function createProject(
  title,
  description,
  startDate,
  dueDate,
  priority,
) {
  return {
    title,
    description,
    startDate,
    dueDate,
    priority,
    tasks: [],
    today: false,
    complete: false,
    taskCompletion,
    createTask,
  };
}
