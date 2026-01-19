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

document.addEventListener("DOMContentLoaded", () => {

    const containers = document.querySelectorAll(".carousel-container");

    containers.forEach(container => {

        const carousel = container.querySelector(".carousel");
        const slides = container.querySelectorAll(".slide");
        let index = 0;

        const indicatorsGrp = document.createElement("div");
        indicatorsGrp.className = "indicators-grp";
        container.appendChild(indicatorsGrp);

        slides.forEach((slide, i) => {
            const indicator = document.createElement("div");
            indicator.className = "indicator";
            if (i === 0) indicator.classList.add("activeIndicator");
            indicatorsGrp.appendChild(indicator);

            indicator.addEventListener("click", () => {
                goToSlide(i);
            });
        });

        const indicators = indicatorsGrp.querySelectorAll(".indicator");

        function goToSlide(i) {
            carousel.style.transform = `translateX(-${i * 100}%)`;

            indicators.forEach(ind => ind.classList.remove("activeIndicator"));
            indicators[i].classList.add("activeIndicator");

            index = i;
        }
        setInterval(() => {
            index++;
            if (index >= slides.length) index = 0;
            goToSlide(index);
        }, 3000);
    });

});
