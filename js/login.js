let myLognProfile = document.querySelector("#myLognProfile");
let solder = document.querySelector(".solder");

let recentLognInImgUrl = localStorage.getItem("recent_img");
let getEmail = localStorage.getItem("email");
let getPassword = localStorage.getItem("password");


myLognProfile.setAttribute("src", recentLognInImgUrl);

function LogIn() {
    if (email.value.trim() === "" || passWord.value.trim() === "") {
        solder.style.display = "block";
    } else {
        if (email.value.trim() === getEmail.trim() && passWord.value.trim() === getPassword.trim()) {
            setTimeout(() => {
                window.location = "index.html";
            }, 1200)
            email.value = "";
            passWord.value = "";
            solder.style.display = "none";
        } else {
            solder.style.display = "block";
        }
    }
}

let getPio = localStorage.getItem("pio");
console.log(getPio);
let alreadyBio = document.querySelector(".alreadyBio");
console.log(alreadyBio);
if(localStorage.getItem("pio")){
    alreadyBio.value = JSON.parse(getPio);
}else{
    alreadyBio.value = "There is no Bio";
}