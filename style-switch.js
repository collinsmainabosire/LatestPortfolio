/*****************************************Toggle style switch************** */
const styleSwitchToggle=document.querySelector(".style-switch-toggle");
styleSwitchToggle.addEventListener("click",() =>
{
    document.querySelector(".style-switch").classList.toggle("open");
})

/***********Hide the switch on scroll********/
window.addEventListener("scroll", ()=>{
    if( document.querySelector(".style-switch").classList.contains("open"))
    {
        document.querySelector(".style-switch").classList.remove("open");
    }
})

/****************************Theme Colors************************** */
const alternateStyles=document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyles.forEach(style)={
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled", true);
        }
    }
}