// respinsive navbar
let list = document.querySelector("#list")
let navbarOfHeader = document.querySelector(".navbar-header")
list.addEventListener("click", ()=>{
    list.classList.toggle("bi-x")
    navbarOfHeader.classList.toggle("active")
})


// * hero section carousel
const btnVideo = document.querySelector(".btn-video");
const carouselContainer = document.getElementById("videoCarouselContainer");
const carousel = carouselContainer.querySelector(".video-carousel");
const slides = carousel.querySelectorAll(".video-slide");

let index = 0;


btnVideo.addEventListener("click", () => {
    carouselContainer.style.display = "block";
    updateCarousel();
});

// next btn
carouselContainer.querySelector(".video-next").addEventListener("click", () => {
    index++;
    if (index >= slides.length) index = 0;
    updateCarousel();
});

// prev btn
carouselContainer.querySelector(".video-prev").addEventListener("click", () => {
    index--;
    if (index < 0) index = slides.length - 1;
    updateCarousel();
});
//  close btn
carouselContainer.querySelector(".video-close").addEventListener("click", () => {
    carouselContainer.style.display = "none";
    index = 0;
    updateCarousel();
});

function updateCarousel() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

// * testimonilas caroussel 

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
