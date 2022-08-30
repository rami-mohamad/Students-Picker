const imageUrls = [
  "https://media.giphy.com/media/COYGe9rZvfiaQ/giphy.gif",
  "https://media.giphy.com/media/I9BrUZDq5hksw/source.gif",
  "https://media.giphy.com/media/B37cYPCruqwwg/source.gif",
  "https://media.giphy.com/media/hHuOmWidPXwCk/source.gif",
  "https://media.giphy.com/media/18hKuycmFuwaQ/source.gif",
  "https://media.giphy.com/media/3oFzma9FGIblOf6Wk0/source.gif",
  "https://media.giphy.com/media/7QxZfWnBLdGI8/source.gif",
  "https://media.giphy.com/media/KmTnUKop0AfFm/source.gif",
  "https://media.giphy.com/media/UseBZDm3O00hy/source.gif",
  "https://media.giphy.com/media/l0HlMWkHJKvyjftKM/source.gif",
  "https://media.giphy.com/media/d10dMmzqCYqQ0/source.gif",
  "https://media.giphy.com/media/PzQvWAhgfUipW/source.gif",
  "https://media.giphy.com/media/3q3RzbSNRugy0mH6LQ/giphy.gif",
  "https://media.giphy.com/media/2gG2xiMTtFwsg/source.gif",
  "https://media.giphy.com/media/YrD1PQldGsstG/source.gif",
  "https://media.giphy.com/media/uHox9Jm5TyTPa/giphy.gif",
  "https://media.giphy.com/media/gLQjUikb8nQnS/source.gif",
  "https://media.giphy.com/media/B6G2MYBmtnGYU/source.gif",
  "https://media.giphy.com/media/gE6IUBRWZd744/source.gif",
  "https://media.giphy.com/media/cO39srN2EUIRaVqaVq/source.gif",
];
const students = [
  "Ann",
  "Ali",
  "Dennis",
  "Eduard",
  "Florian",
  "Leonie",
  "Lion",
  "Luciano",
  "Othman",
  "Quan",
  "Ramon",
  "Sebastian",
  "Simon",
  "Steffen",
  "Susanne",
  "Oezguer",
  "Marvin",
];
const list = document.querySelector(".stuList");
const button = document.querySelector(".btn");

const getRandomName = (array) => {
  const name = Math.floor(Math.random() * array.length);
  const outputHtml = array[name];
  return outputHtml;
};

function updateHtml() {
  hasBeenClicked = true;
  go();
  const interval = setInterval(() => {
    document.getElementById("randomName1").innerText = getRandomName(students);
    document
      .getElementById("photo")
      .setAttribute("src", getRandomImage(imageUrls));
    button.style.backgroundColor = "red";
  }, 50);
  setTimeout(() => {
    clearInterval(interval);

    hasBeenClicked = false;
    button.style.backgroundColor = "green";
    go();
  }, 1000);
}
function getRandomImage(imageUrls) {
  const image = Math.floor(Math.random() * imageUrls.length);
  return imageUrls[image];
}
let hasBeenClicked = false;

function go() {
  if (hasBeenClicked) {
    button.innerText = "wait";
    button.disabled = true;
  } else {
    button.innerText = "Go!";
    button.disabled = false;
  }
}

function studentsList(arr) {
  for (let i = 0; i < arr.length; i++) {
    let name = arr[i];
    let li = document.createElement("li");
    let checkbox = document.createElement("input");
    let label = document.createElement("label");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("value", `${name}`);
    checkbox.setAttribute("onchange", "getListValue(this)");
    li.classList.add("list-group-item");
    checkbox.classList.add("form-check-input", "me-1");
    // checkbox.innerHTML = name;
    li.appendChild(label);
    label.innerHTML = name;
    list.appendChild(li);
    // li.appendChild(checkbox);
    label.appendChild(checkbox);
  }
}
studentsList(students);

function getListValue(e) {
  if (e.checked === true) {
    for (let i = 0; i <= students.length - 1; i++) {
      if (e.value === students[i]) {
        console.log(e.value, i);
        students.splice(i, 1);
      }
    }
  } else {
    students.push(e.value);
  }
  console.log(students);
}
