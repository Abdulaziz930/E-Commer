const MenuItems = document.getElementById("MenuItems");
const ProductImg = document.getElementById("ProductImg");
const SmallImg = document.getElementsByClassName("small-img");
const LoginFrom = document.getElementById("LoginForm");
const RegFrom = document.getElementById("RegForm");
const Indicator = document.getElementById("Indicator");
        MenuItems.style.maxHeight = "0px";

        function menutoggle(){
            if(MenuItems.style.maxHeight == "0px"){
                MenuItems.style.maxHeight = "200px";
            }
            else{
                MenuItems.style.maxHeight = "0px";
            }
        }
SmallImg[0].onclick = function(){
    ProductImg.src = SmallImg[0].src;
}
SmallImg[1].onclick = function(){
    ProductImg.src = SmallImg[1].src;
}
SmallImg[2].onclick = function(){
    ProductImg.src = SmallImg[2].src;
}
SmallImg[3].onclick = function(){
    ProductImg.src = SmallImg[3].src;
}

function register(){
    RegFrom.style.transform = "translateX(0px)";
    LoginFrom.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(100px)";
}
function login(){
    RegFrom.style.transform = "translateX(300px)";
    LoginFrom.style.transform = "translateX(300px)";
    Indicator.style.transform = "translateX(0px)";
}