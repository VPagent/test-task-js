import { divData } from "./data.js";

const root = document.getElementById("root");

let newData = divData.map((item, index) => {
  item.id = index + 1;
  item.name = index + 1;

  return item;
});

const addMarkup = (array) => {
  console.log("array", array);
  const markup = array
    .map((item) => {
      return `<div class="block" id=${item.id}><p id=${item.id}> I am div ${item.name}</p></div>`;
    })
    .join("");

  root.insertAdjacentHTML("beforeend", markup);

  return markup;
};

addMarkup(newData);

const handleClickOnDiv = (event) => {
  const currentId = Number(event.target.id);
  const currIndex = newData.findIndex((item) => item.id === currentId);

  const inspect = currIndex === currentId - 1;
  if (inspect) {
    const currentObject = newData.find((item) => item.id === currentId);

    const nextData = newData.filter((item) => item.id !== currentId);
    nextData.unshift(currentObject);
    newData = nextData;
    root.innerHTML = "";

    addMarkup(newData);
    return;
  } else {
    const currentObject = newData.find((item) => item.id === currentId);
    const nextData = newData.filter((item) => item.id !== currentId);

    const targetPosition = currentId - 1;

    nextData.splice(targetPosition, 0, currentObject);
    newData = nextData;
    root.innerHTML = "";
    addMarkup(newData);
  }
};

root.addEventListener("click", handleClickOnDiv);
