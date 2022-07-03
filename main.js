const moreButton = document.getElementById('moreButton');
const moreDiv = document.querySelector(".filterDiv .moreDiv")
moreButton.addEventListener("click", ()=>{
        if(moreButton.checked){
            moreDiv.style.display = "flex";
        }
        else{
            moreDiv.style.display = "none";
        }
    
})