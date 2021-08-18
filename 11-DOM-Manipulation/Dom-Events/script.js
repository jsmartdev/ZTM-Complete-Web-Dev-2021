/* eslint-disable */

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function createListElement() {
	var div = document.createElement("div")
	var li = document.createElement("li");
	var deleteButton = document.createElement("button")
	div.classList.add("container");
	ul.appendChild("div");
	div.append(li, deleteButton);
	li.classList.add("toDo");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	deleteButton.classList.add("delete");
	deleteButton.innerHTML="Delete";
}

function inputLength() {
	return input.value.length;
}


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function doneToDo(element) {
	if (element.target.tagName === "li") {
		element.target.classList.toggle("done");
	}
}

function deleteToDo(element) {
	if (element.target.className === "delete") {
		element.target.parentElement.remove();
	}
}

function handleListClicks(element) {
	doneToDo(element);
	deleteToDo(element);
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);