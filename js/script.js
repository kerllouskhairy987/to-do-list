let header_profileImg = document.querySelector("#header_profileImg");
let accountProfileImage = document.querySelector("#accountProfileImage");
let getProfileImg = localStorage.getItem("recent_img");
let user = document.querySelector("#user");
let accountUser = document.querySelector("#accountUser");
let accountEmail = document.querySelector("#accountEmail");

let getUserNameToProfile = localStorage.getItem("username");
let getEmailToProfile = localStorage.getItem("email");

header_profileImg.setAttribute("src", getProfileImg);
accountProfileImage.setAttribute("src", getProfileImg);
user.innerHTML = getUserNameToProfile;
accountUser.innerHTML = getUserNameToProfile;
accountEmail.innerHTML = getEmailToProfile;

function clearLocalStorage() {
    localStorage.clear();
    setTimeout(() => {
        window.location = "index.html";
    }, 1200);
    console.log("kero");
}

let article_profile = document.querySelector(".article_profile");
function showAccount() {
    article_profile.style.right = "0px";
}

function hideAccount() {
    article_profile.style.right = "-400px";
}

let header_info = document.querySelector(".header_info");
let sign = document.querySelector(".sign");
if (getUserNameToProfile) {
    header_info.style.display = "block";
    sign.style.display = "none";
} else {
    header_info.style.display = "none";
    sign.style.display = "flex";
}

let scrollToTop = document.querySelector(".scrollToTop");
let content_header = document.querySelector(".content_header");
window.onscroll = function () {
    if (window.scrollY > 50) {
        scrollToTop.style.display = "block";
        content_header.style.borderBottom = "2px solid #D4ADFC";
    } else {
        scrollToTop.style.display = "none";
        content_header.style.borderBottom = "none";
    }
}

// START CRUD
// GET TOTLE
let title = document.querySelector("#title");
let price = document.querySelector("#price");
let discount = document.querySelector("#discount");
let count = document.querySelector("#count");
let category = document.querySelector("#category");
let totalPrice = document.querySelector("#totalPrice");
let total_price = document.querySelector(".total_price");
let mood = "create";
let ii ;
// GET TOTAL PRICE
function getTotal() {
    if (price.value != '') {
        let result = (+price.value) - +discount.value;
        totalPrice.innerHTML = result + "$";
        total_price.style.border = "2px solid red";
    } else {
        totalPrice.innerHTML = "0 $";
        total_price.style.border = "2px solid #fff";
    }
}
// CRAETE PRODUCTS
let dataProduct = localStorage.getItem("dataProduct") ? JSON.parse(localStorage.getItem("dataProduct")) : [];
function createProduct() {
    if(getUserNameToProfile){
            let newProduct = {
                title: title.value,
                price: price.value,
                discount: discount.value,
                category: category.value,
                totalPrice: totalPrice.innerHTML,
            }
            if(mood === "create"){
                dataProduct.push(newProduct);
            }else{
                dataProduct[ii] = newProduct;
                mood = "create";
                create.innerHTML = "Create It";
            }
            localStorage.setItem("dataProduct", JSON.stringify(dataProduct));
            getTotal();
            clearData();
            readData();
        }else{
    alert("Please, Signup firstly ...")
}
}
// CLEAR DATA
function clearData() {
    title.value = "";
    price.value = "";
    discount.value = "";
    category.value = "";
    totalPrice.innerHTML = "0 $";
    total_price.style.border = "2px solid #fff";
}
// // READ PRODUCTS
let tBody = document.querySelector(".tBody");

function readData() {
    let table = "";
    for (let i = 0; i < dataProduct.length; i++) {
        table += `
        <tr>
            <td>${i + 1}</td>
            <td>${dataProduct[i].title}</td>
            <td>${dataProduct[i].price}</td>
            <td>${dataProduct[i].discount}</td>
            <td>${dataProduct[i].totalPrice}</td>
            <td>${dataProduct[i].category}</td>
            <td><i onclick="update(${i})" class="icon_edit fa-regular fa-pen-to-square"></i></td>
            <td><i onclick="deleteOne(${i})" class="icon_delete fa-regular fa-trash-can"></i></td>
        </tr>
        `;
        tBody.innerHTML = table;
    };
}
readData();
// // DELETE ONE PRODUCT
function deleteOne(i){
    dataProduct.splice(i , 1);
    localStorage.setItem("dataProduct" , JSON.stringify(dataProduct))
    readData();
}
// UPDATE PRODUCTs
let create = document.querySelector("#create")
function update(i){
    title.value = dataProduct[i].title;
    price.value = dataProduct[i].price;
    discount.value = dataProduct[i].discount;
    category.value = dataProduct[i].category;
    getTotal();   
    create.innerHTML = "Update It";
    mood = "update";
    ii = i;
    readData();

}