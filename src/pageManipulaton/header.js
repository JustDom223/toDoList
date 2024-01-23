import cogSVG from "../assets/svg/settings-svgrepo-com.svg"
// import getFirstChildHeight from "../script/getFirstChildHeight";
import toggleDropDown from "../script/initializeDropDown";

function toggleTheme() {
  document.documentElement.classList.toggle("special");
}
// Children for tabs
function createTabImg() {
  const settingsSvg = new Image();
  settingsSvg.src = cogSVG;
  settingsSvg.classList.add("cogSVG");

  return settingsSvg;
}


export default function activateHeader() {
  // Find elements
  const settingsDropDown = document.querySelector(".settingsDropDown")
  const dropDownButtonElement = document.querySelector(".dropDownButton")
  const lightDarkButton = document.querySelector("#theme")
  // Add the image to our existing div.
  dropDownButtonElement.appendChild(createTabImg())
  // Change the parent elements size to match the first child
  // settingsDropDown.style.height = `${getFirstChildHeight(settingsDropDown)}px`;

  // Add event listener to button
  lightDarkButton.addEventListener("click", () => {
    toggleTheme();
  });

  dropDownButtonElement.addEventListener("click", () =>{
    toggleDropDown(settingsDropDown)
  })
}