export default function activateButtons(){
    const sideBarListItems = document.querySelectorAll(".sidebarListItem");
    sideBarListItems.forEach(element => {
      element.classList.add("customCursor");
      element.addEventListener("click",()=> {
        console.log(element.dataset.action);
        // assignFunction(element.dataset.action);
      });
    });
  }