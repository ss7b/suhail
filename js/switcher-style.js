// get localStorage
document.body.classList.add(localStorage.getItem("moode"))
document.querySelector(`[title="${localStorage.getItem('themColor')}"]`).removeAttribute("disabled")

// toggler style switvher open class
let sttingIcon= document.querySelector(".style-switcher-toggler");
sttingIcon.addEventListener("click", ()=>{
    document.querySelector(".style-switcher").classList.toggle("open")
})

// hide style-switcher on scroll
window.addEventListener("scroll",()=>{

    if(document.querySelector(".style-switcher").classList.contains("open")){

    document.querySelector(".style-switcher").classList.remove("open")

    }
})

// them colors 
let colorsCssLinks = document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    colorsCssLinks.forEach(style => {
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled")
            localStorage.setItem("themColor",style.getAttribute("title"))
        }
        else{
            style.setAttribute("disabled","true")
        }
    });
}

// them light and dark mode
let dayNight  = document.querySelector(".day-night");
let logo = document.querySelector(".logo img")
console.log(logo.getAttribute("src"))

// toggler class
dayNight.addEventListener('click',()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark")
    if(document.body.classList.contains("dark")){
        logo.setAttribute("src","img/logo-2.PNG")
        localStorage.setItem("moode","dark")
    }
    else{
        logo.setAttribute("src","img/logo.png")
        localStorage.removeItem("moode")
    }
})

window.addEventListener("load",()=>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
        logo.setAttribute("src","img/logo-2.PNG")
    }
    else{
        dayNight.querySelector("i").classList.add("fa-moon");
        logo.setAttribute("src","img/logo.png")
    }
})