export default function createHeader() {
  // create Header element
  const headerElement = document.createElement('header');
  // Create children for header element
  const headingElement = document.createElement('h1');
  const themeToggle = document.createElement('button');
  // Add content to children
  headingElement.innerHTML = 'It\'s time to get things done';
  themeToggle.value = 'theme';
  // Add event listener to button
  themeToggle.addEventListener('click', () => {
    toggleTheme();
  });

  // Populate main
  headerElement.appendChild(headingElement);
  headerElement.appendChild(themeToggle);
  return headerElement;
}

function toggleTheme() {
  document.documentElement.classList.toggle('special');
}
