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
  "Axel.N",
  "Katharina",
  "Atef",
  "Melisa",
  "Emanuela",
  "Hamze",
  "Melanie",
  "Jan",
  "Marvin",
  "Sven",
  "Mehmet",
  "Miriam",
  "Oliver",
  "Axel.H",
  "Robert",
  "Laila",
  "Janis",
  "Kai",
  "Sebastian",
  "Norbert",
  "Anna"
];
const list = document.querySelector(".stuList");
const button = document.querySelector(".btn");
const nameStu = document.getElementById("randomName1");
const getRandomName = (array) => {
  const name = Math.floor(Math.random() * array.length);
  const outputHtml = array[name];
  return outputHtml;
};

function updateHtml() {
  if (students.length >= 1) {
    hasBeenClicked = true;
    go();
    const interval = setInterval(() => {
      nameStu.innerText = getRandomName(students);
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
      let arrayNameRepeat = nameStu.innerHTML;
      const indexOfStu = students.indexOf(arrayNameRepeat);
      students.splice(indexOfStu, 1);
    }, 1000);
  } else {
    nameStu.innerHTML = "No more Names please reset the App to start again";
    nameStu.style.color = "red";
    document
      .getElementById("photo")
      .setAttribute(
        "src",
        "https://media1.giphy.com/media/rY93u9tQbybks/giphy.gif?cid=ecf05e47vlf5t1zyba5ehsefd609dkieg08f15mg2o249mbk&rid=giphy.gif&ct=g"
      );
  }
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
  let hello = e.parentElement;
  if (e.checked === true) {
    hello.style.textDecorationLine = "line-through";
    hello.style.color = "red";
    for (let i = 0; i <= students.length - 1; i++) {
      if (e.value === students[i]) {
        students.splice(i, 1);
      }
    }
  } else {
    students.push(e.value);
    hello.style.textDecorationLine = "none";
    hello.style.color = "black";
  }
  console.log(students);
}

function resetPage() {
  location.reload();
}
