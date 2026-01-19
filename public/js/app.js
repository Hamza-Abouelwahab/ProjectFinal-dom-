// * hero section
let btnVideo = document.querySelector(".btn-video")
btnVideo.addEventListener("click" , ()=> {
    let contianerCarousel = document.createElement("div")
    contianerCarousel.classList.add("contianerCarousel")
    
    let closeBtn = document.createElement("i")
    closeBtn.setAttribute("class","close bi bi-x-circle")

    contianerCarousel.appendChild(closeBtn)
    document.body.appendChild(contianerCarousel)
})

