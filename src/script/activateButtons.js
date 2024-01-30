
import toggleTheme from "./toggleTheme";
import toggleDynamicBar from "./toggleDynamicBar";
import rotateElement from "./rotateElement";
import populateMain from "./populateMain";
import createNewTaskForm from "./createNewTask";
import { deleteProject, deleteTask } from "./projects";
import { updateLocalStorage } from "./localStorage";

function handleClick(event){
  const element = event.currentTarget;
    switch(element.dataset.action) {
      case "projects":
          populateMain(element.dataset.action);
          break;
      case "projectTasks":
        console.log(`${element.dataset.projectTitle} Tasks`);
          console.log(element.dataset.action);
          console.log(element.dataset.projectTitle);
          populateMain(element.dataset.action, element.dataset.projectTitle);
          break;
      case "today":
          populateMain(element.dataset.action, element.dataset.projectTitle);
          break;
      case "week":
          console.log("Week action");
          break;
      case "month":
          console.log("Month action");
          break;
      case "theme":
          toggleTheme();
          break;
      case "font":
          console.log("Font action");
          break;
      case "settings":
        toggleDynamicBar(element.previousElementSibling, "side");
        rotateElement(element);
        console.log("settings");
        break;
      case "filter":
        toggleDynamicBar(element.previousElementSibling, "side");
        rotateElement(element);
        console.log("filter");
        break;
      case "createTask":{
        const dialogElement = document.querySelector("dialog");
        dialogElement.textContent = "";
        dialogElement.appendChild(createNewTaskForm());
        dialogElement.showModal();
        break;}
      case "createProject":
        toggleDynamicBar(element.previousElementSibling, "side");
        rotateElement(element);
        console.log("filter");
        break;
      case "deleteProject":
        deleteProject(element.dataset.projectTitle);
        updateLocalStorage();
        populateMain("projects");
        break;
      case "deleteTask":
        deleteTask(element.dataset.projectTitle, element.dataset.projectTaskDesc);
        updateLocalStorage();
        populateMain("projectTasks", element.dataset.projectTitle);
        break;
      default:
          console.log("UnknownButton");
  }
}

export default function activateButtons(){
  // retrieve all buttons 
    const actionButton = document.querySelectorAll(".actionButton");

    actionButton.forEach(element => {
      if(!element.classList.contains("customCursor")){
        element.classList.add("customCursor");
      }
      // preventing eventlistener doubling up
      element.removeEventListener("click", handleClick);
      element.addEventListener("click", handleClick);
      });
    };
  