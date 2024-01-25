export default function getFirstChildHeight(desiredParentElement){
    const parentElement = desiredParentElement
    const firstChild = parentElement.firstElementChild
    const firstChildHeight = firstChild.offsetHeight
    console.log(firstChildHeight)
    return firstChildHeight
  }