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
    taskCompletion() {
      if (this.complete) {
        this.complete = false;
      } else {
        this.complete = true;
      }
    },
    createTask(taskDescription, taskPriority) {
      const newTask = createTask(taskDescription, taskPriority);
      this.tasks.push(newTask);
      return newTask;
    },
  };
}

// Function to create a task
export function createTask(description, priority, dateCreated, dueDate) {
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
}
