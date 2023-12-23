
export default function createHeader(){
    // create Header element
    const headerElement = document.createElement('header');
    // Create children for header element
    const headingElement = document.createElement('h1')
    // Add content to children
    headingElement.innerHTML = `Dom's Todo List`
    // Populate main
    headerElement.appendChild(headingElement)
    return headerElement
};