function toggleTheme() {
  document.documentElement.classList.toggle("special");
}

export default function createHeader() {
  // create Header element
  const headerElement = document.createElement("header");
  // Create children for header element
  const headingElement = document.createElement("h1");
  const themeToggleElement = document.createElement("input");
  //   Choosing element type
  themeToggleElement.type = "button";
  // Add content to children
  headingElement.innerHTML = "It's time to get things done";
  themeToggleElement.value = "Light/Dark";
  //   Add classes to elements
  themeToggleElement.classList.add("button");
  // Add event listener to button
  themeToggleElement.addEventListener("click", () => {
    toggleTheme();
  });

  // Populate main
  headerElement.appendChild(headingElement);
  headerElement.appendChild(themeToggleElement);
  return headerElement;
}
