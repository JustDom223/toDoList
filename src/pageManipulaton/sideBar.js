// importing SVG files
import magGlassSVG from "../assets/svg/magnifier-glass-svgrepo-com.svg";
import cogSVG from "../assets/svg/sunflower-flower-svgrepo-com.svg";

// Importing functions
// import populateMain from "../script/populateMain";
import createSVGImg from "../script/createSVGImg";
import activateButtons from "../script/activateButtons";


// export default function createSidebar() {
//   // Create Sidebar
//   const sideBarElement = document.createElement("div");
//   sideBarElement.id = "sidebar";

//   const sideBarHeadingElement = document.createElement("h1");
//   sideBarHeadingElement.textContent = "Timeline";

//   // Sidebar children
//   const sideBarTabs = document.createElement("ul");

//   // Create list items
//   const tabProjects = document.createElement("li");
//   const tabToday = document.createElement("li");
//   const tabThisWeek = document.createElement("li");
//   const tabThisMonth = document.createElement("li");
//   const tabThisQuater = document.createElement("li");

//   // Create Tabchildren
//   tabProjects.textContent = "Projects";
//   tabToday.textContent = "Today";
//   tabThisWeek.textContent = "This Week";
//   tabThisMonth.textContent = "This Month";
//   tabThisQuater.textContent = "This Quater";

//   // Tab ID's
//   sideBarTabs.id = "tabs";
//   tabProjects.id = "projects";
//   tabToday.id = "today";
//   tabThisWeek.id = "week";
//   tabThisMonth.id = "month";
//   tabThisQuater.id = "quater";

//   // Tab classes
//   sideBarTabs.classList.add("tabs");
//   tabProjects.classList.add("tab");
//   tabToday.classList.add("tab");
//   tabThisWeek.classList.add("tab");
//   tabThisMonth.classList.add("tab");
//   tabThisQuater.classList.add("tab");

//   // Adding event listeners
//   sideBarTabs.addEventListener("click", (event) => {
//     const contentElement = document.querySelector("#content");
//     const clickedTab = event.target.closest("li");
//     if (clickedTab.classList.contains("tab")) {
//       console.log(`You clicked ${clickedTab.id}`);
//       const clickedElementId = clickedTab.id;

//       const newMainContent = populateMain(clickedElementId);

//       // Replace the existing main content with the new one
//       const existingMainElement = document.querySelector("main");
//       contentElement.replaceChild(newMainContent, existingMainElement);
//       // setActiveTab(clickedElementId)
//     }
//   });

//   // Add items to list
//   sideBarTabs.appendChild(tabProjects);
//   sideBarTabs.appendChild(tabToday);
//   sideBarTabs.appendChild(tabThisWeek);
//   sideBarTabs.appendChild(tabThisMonth);
//   sideBarTabs.appendChild(tabThisQuater);

//   // Add content to elements
//   sideBarElement.appendChild(sideBarHeadingElement);
//   sideBarElement.appendChild(sideBarTabs);
//   return sideBarElement;
// }


export default function activateSidebar(){
  // Adding Mag glass
  const filterBarElement = document.querySelector("#filterBar");
  const filterMagGlassElement = createSVGImg(magGlassSVG, "actionButton" ,"magGlassSVG");
  filterMagGlassElement.dataset.action = "filter";
  filterBarElement.appendChild(filterMagGlassElement);



  // Adding settings cog
  const settingsBarElement = document.querySelector("#settingsBar");
  const settingsBarCogElement = createSVGImg(cogSVG, "actionButton" ,"cogSVG");
  settingsBarCogElement.dataset.action = "settings";
  settingsBarElement.appendChild(settingsBarCogElement);


  activateButtons();
}
