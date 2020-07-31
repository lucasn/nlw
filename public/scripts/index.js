const buttonSearch = document.querySelector("#page-home main a")
const close = document.querySelector("#modal .header a")
buttonSearch.addEventListener("click", toggleHide)
close.addEventListener("click", toggleHide)

function toggleHide(){
    document
        .querySelector("#modal")
        .classList.toggle("hide")
}