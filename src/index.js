import "./styles/main.css";
import activateSidebar from "./pageManipulaton/sideBar";
import createMain from "./pageManipulaton/main";
import { fetchLocalStorage } from "./script/localStorage";
import populateMain from "./script/populateMain";



document.addEventListener("DOMContentLoaded", () => {
  fetchLocalStorage();
  // DOM is fully parsed and ready for manipulation
  const contentElement = document.querySelector("#content");
  contentElement.appendChild(createMain());
  activateSidebar();
  populateMain("projects");
});
