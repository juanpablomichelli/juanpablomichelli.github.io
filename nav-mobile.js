/* Nav-mobile funcionalidad */

const sandwich = document.querySelector(".sandwich");
const listMobile = document.querySelector(".list-mobile");

sandwich.addEventListener("click",()=>{
    listMobile.classList.toggle("hide")
})   

document.addEventListener("mouseup", (e)=>{
    if(!listMobile.classList.contains("hide")){
        if(!sandwich.contains(e.target)){
        listMobile.classList.toggle("hide");
        }
    }
})