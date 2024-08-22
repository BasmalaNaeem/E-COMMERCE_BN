let x = document.getElementById("login")
let y = document.getElementById("register")
let z = document.getElementById("btn")
let profilePhoto = document.getElementById('profilePhoto')


profilePhoto.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior of the anchor tag
    alert("Show Your Profile ? ");
    // window.location.href="./profile.html";
});

function register(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}
function register1() {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let pass = document.getElementById('password').value;
    let checkbox = document.querySelector('#register .checkbx');

    // Username Validation: Minimum 4 characters
    if (username.length < 4) {
        alert('Username must be at least 4 characters long.');
        return;
    }

    // Email Validation: Basic email pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Password Validation: Minimum 6 characters
    if (pass.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    // Checkbox Validation: Terms and conditions
    if (!checkbox.checked) {
        alert('Please agree to the terms and conditions.');
        return;
    }

    // Store user data in local storage
    let user = {
        email: email,
        username: username,
        password: pass,
    };

    let json = JSON.stringify(user);
    localStorage.setItem(username, json);

    alert('Registration Successful!');
    // window.location.href="./Home.html";
}


function login(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
}
function login1() {
    event.preventDefault();

    let username = document.getElementById('user').value;
    let pass = document.getElementById('pass').value;
    let checkbox = document.querySelector('#login .checkbx');

    if (!checkbox.checked) {
        alert('Please check Remember Me.');
        return;
    }

    let user = localStorage.getItem(username);
    let data = JSON.parse(user);

    if (user == null) {
        alert('Wrong username');
    } else if (username == data.username && pass == data.password) {
        console.log("login");
        // window.location.href="index.html";
    } else {
        alert('Wrong password');
    }
}


  //menu-button
// var menuIcon = document.querySelector(".menu-icon");
var navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener('click', function () {
    navLinks.classList.toggle('d-flex');
})







// function register1(){
//     event.preventDefault();
//     let username = document.getElementById('username').value;
//     let email = document.getElementById('email').value;
//     let pass = document.getElementById('password').value;

//     let user = {
//         email: email,
//         username: username,
//         password: pass,
//     };
//     let json = JSON.stringify(user);
//     localStorage.setItem(username, json);
//     if(username.value == "" && pass.value == ""){
//         console.log(alert("Empty Fields!"));
//     }
//     else 
//         // window.location.href="./Home.html";
//         console.log("done")
// }



// function login1 (){
//     event.preventDefault();
//     var username = document.getElementById('user').value;
//     var pass = document.getElementById('pass').value;

//     var user = localStorage.getItem(username);
//     var date = JSON.parse(user);
//     console.log(localStorage.getItem(username));
//     if (user == null) {
//         alert('wrong username');
//     }
//     else if (username == date.username && pass == date.password){
        
//         // window.location.href="index.html";
//         console.log("login");
//     }
//     else {
//         alert('wrong password');
//     }
// }