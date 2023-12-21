
export default function createSidebar(){
    // Create Sidebar
    const sideBarElement = document.createElement('div');
    sideBarElement.id = 'sidebar'

    const sideBarHeadingElement = document.createElement('h1');
    sideBarHeadingElement.textContent = 'Timeline';

    // Sidebar children
    const sideBarTabs = document.createElement('ul');

    // Create list items
    const tabToday = document.createElement('li');
    const tabThisWeek = document.createElement('li');
    const tabThisMonth = document.createElement('li');
    const tabThisQuater = document.createElement('li');

    // Create Tabchildren
    tabToday.textContent = 'Today';
    tabThisWeek.textContent = 'This Week';
    tabThisMonth.textContent = 'This Month';
    tabThisQuater.textContent = 'This Quater';

    // 

    // Add items to list
    sideBarTabs.appendChild(tabToday);
    sideBarTabs.appendChild(tabThisWeek);
    sideBarTabs.appendChild(tabThisMonth);
    sideBarTabs.appendChild(tabThisQuater);
    
    // Add content to elements
    sideBarElement.appendChild(sideBarHeadingElement);
    sideBarElement.appendChild(sideBarTabs);
    return sideBarElement;
};