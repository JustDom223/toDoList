export default function createSVGImg(importedSVG, assignedClass) {
    const svgImage = new Image();
    svgImage.src = importedSVG;
    svgImage.classList.add(assignedClass);
    return svgImage;
  }