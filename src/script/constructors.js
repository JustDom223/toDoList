
export function createTask(title, description, dueDate, priority) {
    return {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        complete: false,
        markComplete: function() {
            this.complete = true;
        }
    };
}

