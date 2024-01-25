import cogSVG from "../assets/svg/settings-svgrepo-com.svg"
import toggleDynamicBar from "../script/toggleDynamicBar";
import createSVGImg from "../script/createSVGImg";

function toggleTheme() {
  document.documentElement.classList.toggle("dark");
}
// Children for tabs



export default function activateHeader() {
  // Find elements
  const settingsDropDown = document.querySelector(".settingsDropDown")
  const dropDownButtonElement = document.querySelector(".dropDownButton")
  const lightDarkButton = document.querySelector("#theme")
  // Add the image to our existing div.
  dropDownButtonElement.appendChild(createSVGImg(cogSVG, "cogSVG"))
  lightDarkButton.addEventListener("click", () => {
    toggleTheme();
  });

  dropDownButtonElement.addEventListener("click", () =>{
    toggleDynamicBar(settingsDropDown, "down")
  })
}