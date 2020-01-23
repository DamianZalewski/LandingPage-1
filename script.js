window.onload = function(){
    let menuIcon = document.getElementById("menuIcon");
    let closeIcon = document.getElementById("closeIcon");
    
    menuIcon.addEventListener("click", openSideMenu);
    closeIcon.addEventListener("click", closeSideMenu);
}

function openSideMenu(){
    let sideMenu = document.getElementById("sideMenu");
    let menuIcon = document.getElementById("menuIcon");    
    let closeIcon = document.getElementById("closeIcon");
   
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";

    sideMenu.classList.remove("closeMenu");    
    sideMenu.classList.add("openMenu");
}

function closeSideMenu(){
    let sideMenu = document.getElementById("sideMenu");
    let menuIcon = document.getElementById("menuIcon");    
    let closeIcon = document.getElementById("closeIcon");
   
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";

    sideMenu.classList.remove("openMenu");
    sideMenu.classList.add("closeMenu");    
}