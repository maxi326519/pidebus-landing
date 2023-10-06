const data = document.querySelector(".search-data");
const form = document.querySelector(".search-form");
let searchBtn = document.getElementById("search__submit");
let viewBtn = document.querySelector(".view-form-btn");
let formOpen = true;

searchBtn.addEventListener("click", () => {
  console.log(formOpen);
  if (formOpen) {
    // Show data
    data.classList.remove("open");
    data.classList.add("close");

    // Hidden form
    form.classList.add("open");
    form.classList.remove("close");
    formOpen = false;
  } else {
    // Hidden data
    data.classList.add("open");
    data.classList.remove("close");

    // Show form
    form.classList.remove("open");
    form.classList.add("close");
    formOpen = true;
  }
});

viewBtn.addEventListener("click", () => {
  console.log(formOpen);
  if (formOpen) {
    // Show data
    data.classList.remove("open");
    data.classList.add("close");

    // Hidden form
    form.classList.add("open");
    form.classList.remove("close");
    formOpen = false;
  } else {
    // Hidden data
    data.classList.add("open");
    data.classList.remove("close");

    // Show form
    form.classList.remove("open");
    form.classList.add("close");
    formOpen = true;
  }
});
