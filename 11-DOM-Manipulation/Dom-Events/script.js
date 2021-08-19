/* eslint-disable */

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("UL");

function createListElement() {
	var div = document.createElement("div");
	var li = document.createElement("li");
	var deleteButton = document.createElement("button");
	ul.appendChild(div);
	div.classList.add("container");
	div.appendChild(li);
	div.appendChild(deleteButton);
	li.classList.add("toDo");
	deleteButton.classList.add("delete");
	deleteButton.innerHTML="Delete";
	li.appendChild(document.createTextNode(input.value));
	input.value = "";
	console.log(div);
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
	if (element.target.tagName === "LI") {
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

ul.addEventListener("click", handleListClicks);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);