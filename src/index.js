import './styles/main.css';
import createHeader from './pageManipulaton/header';
import createSidebar from './pageManipulaton/sideBar';
import createMain from './pageManipulaton/main';
import createFooter from './pageManipulaton/footer';
import { fetchLocalStorage } from './script/localStorage';
import populateMain from './script/populateMain';

document.addEventListener('DOMContentLoaded', () => {
  fetchLocalStorage();
  // DOM is fully parsed and ready for manipulation

  const contentElement = document.querySelector('#content');

  // Add the image to our existing div.

  contentElement.appendChild(createHeader());
  contentElement.appendChild(createSidebar());
  contentElement.appendChild(createMain());
  contentElement.appendChild(createFooter());

  populateMain('projects');
});
