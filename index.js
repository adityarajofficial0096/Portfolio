/*---------------------------------------->
<--        Responsive Navigation        -->
-----------------------------------------*/


const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
    // alert("hi");
    nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());


/*---------------------------------------->
<--          Sticky Navigation          -->
-----------------------------------------*/


const sectionHero = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
    (entries) => {
        const ent = entries[0];
        console.log(ent);
        !ent.isIntersecting ?
            document.body.classList.add("sticky") :
            document.body.classList.remove("sticky");
    }, {
        // viewport
        root: null,
        threshold: 0,
        rootMargin: "-100px",
    }
);


// When the Hero Section End Part Reached then We Need to Show the Sticky Navigation
observer.observe(sectionHero);



/*--------------------------------------------------------->
<--          Adding Media Queries in JavaScript          -->
----------------------------------------------------------*/


function myFunction(widthSize) {
    if (widthSize.matches) {
        // If media query matches
        const swiper = new Swiper(".swiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },

            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    } else {
        const swiper = new Swiper(".swiper", {
            slidesPerView: 2,
            spaceBetween: 30,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }
}

const widthSize = window.matchMedia("(max-width: 780px)");

// Call Listener Function at Run Time
myFunction(widthSize);
// Attach Listener function on State Changes
widthSize.addListener(myFunction);

// ========================================
//  Scroll to Top
// ========================================
const footerElm = document.querySelector(".section-footer");

const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");

// I am Adding the Button Element inside the DIV Element
scrollElement.innerHTML = ` <ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

// Add to the Bottom of the Page
footerElm.after(scrollElement);

// Deleting the DOM Element
const scrollTop = () => {
    sectionHero.scrollIntoView({ behavior: "smooth" });
};

document.querySelector(".scroll-top").addEventListener("click", scrollTop);

// Get the Data Attributes

/*--------------------------------------->
<--          Smooth Scrolling          -->
-----------------------------------------*/

const portfolioSection = document.querySelector(".section-portfolio");
const contactSection = document.querySelector(".section-contact");

document.querySelector(".portfolio-link").addEventListener("click", (e) => {
    e.preventDefault();
    portfolioSection.scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".hireme-btn").addEventListener("click", (e) => {
    e.preventDefault();
    contactSection.scrollIntoView({ behavior: "smooth" });
});
