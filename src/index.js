import './styles/main.css'
import createHeader from './pageManipulaton/header';
import createSidebar from './pageManipulaton/sideBar';
import createMain from './pageManipulaton/main';
import createFooter from './pageManipulaton/footer';
import tasks from './script/tasks';

document.addEventListener('DOMContentLoaded', function() {
  // DOM is fully parsed and ready for manipulation
  
  const contentElement = document.querySelector('#content')
  
  // Add the image to our existing div.

  contentElement.appendChild(createHeader());
  contentElement.appendChild(createSidebar())
  contentElement.appendChild(createMain());
  contentElement.appendChild(createFooter());

  
}



);