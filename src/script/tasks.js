import { createTask } from "./constructors"
const tasks = []
export default tasks;

let newTask = createTask('FirstJob', 'This will be the first job', '2023-12-26', '2024-04-30', 'High')
let newTask2 = createTask('SecondJob', 'This will be the second job', '2023-12-27', '2024-08-30', 'High')
let newTask3 = createTask('Job 1', 'Description of Job 1', '2024-01-01', '2023-01-15', 'Medium');
let newTask4 = createTask('Job 2', 'Description of Job 2', '2023-03-20', '2023-04-01', 'Low');
let newTask5 = createTask('Job 3', 'Description of Job 3', '2022-12-01', '2023-01-10', 'High');
let newTask6 = createTask('Job 4', 'Description of Job 4', '2023-07-15', '2023-08-20', 'Medium');
let newTask7 = createTask('Job 5', 'Description of Job 5', '2023-09-10', '2023-10-05', 'Low');
let newTask8 = createTask('Job 6', 'Description of Job 6', '2023-06-07', '2023-06-30', 'High');
let newTask9 = createTask('Job 7', 'Description of Job 7', '2023-11-12', '2023-12-15', 'Medium');
let newTask10 = createTask('Job 8', 'Description of Job 8', '2023-05-05', '2023-05-20', 'Low');
let newTask11 = createTask('Job 9', 'Description of Job 9', '2023-02-14', '2023-03-01', 'High');
let newTask12 = createTask('Job 10', 'Description of Job 10', '2023-08-25', '2023-09-10', 'Medium');




tasks.push(newTask, newTask2, newTask3, newTask4, newTask5, newTask6, newTask7, newTask8, newTask9, newTask10, newTask11, newTask12, )