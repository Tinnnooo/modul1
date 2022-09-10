function mobileMenu() {
    var mobile = document.getElementById("mobile");
    if(mobile.className === "dropdown"){
        mobile.className = "dropdown-mobile";
    }else{
        mobile.className = "dropdown"
    }
}

window.onresize = function(){
    var currentSize = innerWidth;
    if(currentSize >= 678){
        var mobile = document.getElementById("mobile");
        if(mobile.className === "dropdown-mobile"){
            mobile.className = "dropdown"
        }else{
            mobile.classList = "dropdown"
        }
    }
}
