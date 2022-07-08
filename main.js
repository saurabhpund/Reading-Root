const moreButton = document.getElementById('moreButton');
const moreDiv = document.querySelector(".filterDiv .moreDiv")
const filterDiv = document.querySelector(".filterDiv")
moreButton.addEventListener("click", ()=>{
        if(moreButton.checked){
            moreDiv.style.display = "flex";
        }
        else{
            moreDiv.style.display = "none";
        }
    
})


const menu = document.querySelector("header .headerDiv .showIcon");
const nav = document.querySelector("header nav")

menu.addEventListener("click", ()=>{
    if(nav.classList.contains("show")){
        nav.classList.remove("show")
    }
    else{
        nav.classList.add("show")
    }
})
