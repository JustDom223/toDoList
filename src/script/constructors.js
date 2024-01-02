
// Function to create a project
export function createProject(title, description, startDate, dueDate, priority) {
    return {
        title: title,
        description: description,
        startDate: startDate,
        dueDate: dueDate,
        priority: priority,
        tasks: [],
        complete: false,
        taskCompletion: function() {
            if(this.complete){
                this.complete = false;
            }else{
                this.complete = true;
            }
        },
        createTask: function(taskDescription, taskPriority) {
            const newTask = createTask(taskDescription, taskPriority);
            this.tasks.push(newTask);
            return newTask;
        },
    };
}

// Function to create a task
export function createTask(description, priority) {
    return {
        description: description,
        priority: priority,
        complete: false,
        taskCompletion: function() {
            if(this.complete){
                this.complete = false;
            }else{
                this.complete = true;
            }
        },

    };
}


