/* eslint-disable */

/* Function Declaration */

function getDriverAge() {
    var age = prompt("What is your age?");

    if (Number(age) < 18) {
	    alert("Sorry, you are too yound to drive this car. Powering off");
    } 
    else if (Number(age) > 18) {
	    alert("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
	    alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
};

getDriverAge();


/* Function Expression */

let getDriversAge = function() {
    var age = prompt("What is your age?");

    if (Number(age) < 18) {
	    alert("Sorry, you are too yound to drive this car. Powering off");
    } 
    else if (Number(age) > 18) {
	    alert("Powering On. Enjoy the ride!");
    } 
    else if (Number(age) === 18) {
	    alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
};

getDriversAge();