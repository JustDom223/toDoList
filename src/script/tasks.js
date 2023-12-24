import { createTask } from "./constructors"
const tasks = []
export default tasks;

let newTask = createTask('FirstJob', 'This will be the first job', '2024-04-30', 'High')

tasks.push(newTask)