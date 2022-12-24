const form = document.querySelector("form");
const text = document.getElementById("text");
const bttn = document.getElementById("bttn");
const notes = document.querySelector("notes");
const unOrderedList = document.createElement("ul");
notes.appendChild(unOrderedList);

function getData() {
  var x = text.value;
  if (x == "Add your note..." || x == "") {
    alert("Please write your note to add.");
  } else {
    let list = document.createElement("li");
    list.innerHTML = x;
    unOrderedList.appendChild(list);
    form.appendChild(unOrderedList);
    bttn.value = "Add";
  }
  text.value = "";
}
