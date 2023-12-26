
export function createTask(title, description, startDate, dueDate, priority) {
    return {
        title: title,
        description: description,
        startDate: startDate,
        dueDate: dueDate,
        priority: priority,
        complete: false,
        markComplete: function() {
            this.complete = true;
        },
        markIncomplete: function() {
            this.complete = false;
        }
    };
}

