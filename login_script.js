let loginBtn = document.getElementById("loginBtn");
let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");

let nameField = document.getElementById("nameField");
let title = document.getElementById("title");
let signInModel = document.getElementById("signInModel");
signupBtn.classList.add("active");


loginBtn.onclick = function () {
    console.log("hyy");
    signInModel.classList.toggle("pop-up");
    loginBtn.classList.add("active");
}

signinBtn.onclick = function () {
    nameField.style.maxHeight = "0";
    title.innerHTML = "Log In";
    signupBtn.classList.remove("active");
    signinBtn.classList.add("active");

}
signupBtn.onclick = function () {
    nameField.style.maxHeight = "60px";
    title.innerHTML = "Sign Up";
    signupBtn.classList.add("active");
    signinBtn.classList.remove("active");

}
window.onclick = function(event) {
    if (event.target === signInModel) {
        closeModal();
    }
};

function closeModal() {
    signInModel.classList.remove("pop-up");
    loginBtn.classList.remove("active");
}
