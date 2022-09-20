const changeTextBtn = document.querySelector(".press");
const stringToChange = document.querySelector("#text");

function textChange() {
  stringToChange.innerHTML = "HEY THERE";
}

changeTextBtn.addEventListener("click", textChange);
