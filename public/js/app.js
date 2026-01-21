// respinsive navbar
let list = document.querySelector("#list")
let navbarOfHeader = document.querySelector(".navbar-header")
list.addEventListener("click", ()=>{
    list.classList.toggle("bi-x")
    navbarOfHeader.classList.toggle("active")
})


// * hero section carousel
function initCarousel(container) {
    
    
    const carouselContainer = container.querySelector(".video-carousel-container");
    const carousel = container.querySelector(".video-carousel");
    const slides = container.querySelectorAll(".video-slide");

    const nextBtn = container.querySelector(".video-next");
    const prevBtn = container.querySelector(".video-prev");
    const closeBtn = container.querySelector(".video-close");
    
    let index = 0;
    
    function updateCarousel() {
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    document.querySelectorAll(".btn-video").forEach(btn => {
    btn.addEventListener("click", () => {
        const target = btn.dataset.target;
        const wrapper = document.querySelector(target);
        initCarousel(wrapper);
    })
})

    // next btn
    nextBtn.addEventListener("click", () => {
        index++;
        if (index >= slides.length) index = 0;
        updateCarousel();
    });
    
    // prev btn
    prevBtn.addEventListener("click", () => {
        index--;
        if (index < 0) index = slides.length - 1;
        updateCarousel();
    });
    //  close btn
    closeBtn.addEventListener("click", () => {
        carouselContainer.style.display = "none";
        index = 0;
        updateCarousel();

        slides.forEach(slide => {
            const iframe = slide.querySelector("iframe");
            if (iframe) iframe.src = iframe.src;
        })
    });
    
    return carouselContainer
}

const carousels = {}

document.querySelectorAll(".carousel-wrapper").forEach(wrapper => {
    const container = initCarousel(wrapper);
    carousels[wrapper.id] = container;
})

// ? carousel section hero section
document.querySelectorAll(".btn-video").forEach(btn => {
    btn.addEventListener("click", () => {
        const target = btn.dataset.target; 
        const wrapper = document.querySelector(target);
        const carouselContainer = wrapper.querySelector(".video-carousel-container");
        carouselContainer.style.display = "block"
    })
})

// ? carousel sectoin about
document.querySelectorAll(".bi-play-fill").forEach(btn => {
    btn.addEventListener("click", () => {
        const target = btn.dataset.target; 
        const wrapper = document.querySelector(target);
        const carouselContainer = wrapper.querySelector(".video-carousel-container");
        carouselContainer.style.display = "block"
    })
})
// * menu logic 
    let btns = document.querySelectorAll(".d-flexMenu button")
    let dishes = document.querySelectorAll(".all-menu .card")

        btns.forEach(btn => {
            btn.addEventListener("click" , ()=>{
                let category = btn.getAttribute("data-category")
                    dishes.forEach(card => {
                        let categories = card.dataset.category.split(" ");
                        if (categories === "all" || categories.includes(category)) {
                            card.style.display = ""
                            
                        }else{
                            card.style.display ="none"
                        }
                    })
            })
            
        })

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

// * caroussel events 

const carousel = document.querySelector(".carouselEv");
const slides = document.querySelectorAll(".carouselEv .sld");
const dots = document.querySelectorAll(".carousel-indicators .dot");
const visibleSlides = 3;
const totalSlides = slides.length;

let index = 0;

for(let i = 0; i < visibleSlides; i++){
    const clone = slides[i].cloneNode(true);
    carousel.appendChild(clone);
}

function updateCarousel() {
    const slideWidth = slides[0].offsetWidth;
    carousel.style.transform = `translateX(-${index * slideWidth}px)`;
    

    dots.forEach(dot => dot.classList.remove('active'));
    dots[index % totalSlides].classList.add('active');
}

setInterval(() => {
    index++;
    updateCarousel();
    
    
    if(index >= totalSlides) {
        setTimeout(() => {
            carousel.style.transition = 'none';
            index = 0;
            updateCarousel();
            carousel.offsetHeight; 
            carousel.style.transition = 'transform 0.5s ease-in-out';
        }, 500);
    }
}, 3000)

























// function caroussel() {
// const btnVideo = document.querySelectorAll(".btn-video");
// const carouselContainer = document.querySelectorAll(".video-carousel-container");
// const carousel = carouselContainer.querySelectorAll(".video-carousel");
// const slides = carousel.querySelectorAll(".video-slide");

// let index = 0;

// btnVideo.forEach(btn =>{
//     btn.addEventListener("click", () => {
//         carouselContainer.forEach(cont => {
//             cont.style.display = "block";
//             updateCarousel();
//         })
//     });
    
// })

// // next btn
// carouselContainer.querySelector(".video-next").addEventListener("click", () => {
//     index++;
//     if (index >= slides.length) index = 0;
//     updateCarousel();
// });

// // prev btn
// carouselContainer.querySelector(".video-prev").addEventListener("click", () => {
//     index--;
//     if (index < 0) index = slides.length - 1;
//     updateCarousel();
// });
// //  close btn
// carouselContainer.querySelector(".video-close").addEventListener("click", () => {
//     carouselContainer.style.display = "none";
//     index = 0;
//     updateCarousel();
// });

// function updateCarousel() {
//     carousel.style.transform = `translateX(-${index * 100}%)`;
// }
// }
