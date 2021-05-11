/* eslint-disable */
let age = prompt("Enter your age.")
if (Number(age) >= 16) {
    let password = prompt("Enter the password");
    if (password === "pazzwerd") {
        alert("Door is open! Have a nice drive!")
    }
    else {
        alert("Your entry is invalid!")
    }
}
else {
    alert("You are too young!")
}