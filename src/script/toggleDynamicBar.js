export default function toggleDynamicBar(element, direction) {
  if(direction === "down"){
    element.classList.toggle("dropdownReveal");
  }else if(direction === "side"){
    element.classList.toggle("sidebarReveal");
  }}