let alertSignup = document.querySelector(".alertSignup");

let userName = document.querySelector("#userName");
let email = document.querySelector("#email");
let passWord = document.querySelector("#passWord");
let current_passWord = document.querySelector("#current_passWord");

let myFileInput = document.querySelector("#myFileInput");
let myProfile = document.querySelector("#myProfile");

let increpted = document.querySelector(".increpted");
let current_increpted = document.querySelector(".current_increpted");
let noIncrepted = document.querySelector(".noIncrepted");
let current_noIncrepted = document.querySelector(".current_noIncrepted");

let pio = document.querySelector("#pio");

function LogUp() {
    if (userName.value.trim() === "" || email.value.trim() === "" || passWord.value.trim() === "" || current_passWord.value.trim() === "" || current_passWord.value.trim() != passWord.value.trim()) {
        alertSignup.style.display = "block";

    } else {
        localStorage.setItem("username", userName.value.trim());
        localStorage.setItem("email", email.value.trim());
        localStorage.setItem("password", passWord.value.trim());

        userName.value = "";
        email.value = "";
        passWord.value = "";
        current_passWord.value = "";
        pio.value = "";

        setTimeout(() => {
            window.location = "index.html";
        }, 1200);
        alertSignup.style.display = "none";
    }
}

myFileInput.addEventListener("change", function () {
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        localStorage.setItem("recent_img", reader.result);
        let recentImgUrl = localStorage.getItem("recent_img");
        myProfile.setAttribute("src", recentImgUrl);
    })

    reader.readAsDataURL(this.files[0]);
});


function toShow() {
    passWord.setAttribute("type", "text");
    noIncrepted.style.display = "block";
    increpted.style.display = "none";
}

function toShowCurrent() {
    current_passWord.setAttribute("type", "text");
    current_noIncrepted.style.display = "block";
    current_increpted.style.display = "none";
}

function toHide() {
    passWord.setAttribute("type", "password");
    noIncrepted.style.display = "none";
    increpted.style.display = "block";
}

function toHideCurrent() {
    current_passWord.setAttribute("type", "password");
    current_noIncrepted.style.display = "none";
    current_increpted.style.display = "block";
}

function piotext() {
    
    let textPio = pio.value;
    localStorage.setItem("pio", JSON.stringify(textPio))
}