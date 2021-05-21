/* eslint-disable */

// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

let user = {
    username: "dudemanbro",
    password: "broseph92",
};

// 2. Create an array which contains the object you have made above and name the array "database".

let database = [
    {
        username: "dudemanbro",
        password: "broseph92"
    },
    {
        username: "piratebooty213",
        password: "booty312"  
    },
    {
        username: "justkim",
        password: "georgeismyfavecat"
    }
];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

let newsfeed = [
    {
        username: "Johnny88",
        timeline: "Can anyone help me with a CSS problem"
    },
    {
        username: "piratebooty213",
        timeline: "started learning C# today"
    },
    {
        username: "justkim",
        timeline: "johnny, I can help if you still need it"
    }
];

let usernamePrompt = prompt("What's your username?");
let passwordPrompt = prompt("What's your password?");

function isUserValid(username, password) {
    for (i = 0; i < database.length; i++) {
        if (database[i].username === username && database[i].password === password) {
            return true;
        }
    }
    return false;
};

function signIn(username, password) {
    if (isUserValid(username, password)) {
        for (i = 0; i < newsfeed.length; i++) {
            console.log(newsfeed[i].username, ":", newsfeed[i].timeline);
        }
    }
    else {
        alert("Sorry, wrong username and password.")
    }
};

signIn(usernamePrompt, passwordPrompt);