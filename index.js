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
const aboutSection = document.querySelector(".section-biodata");

document.querySelector(".portfolio-link").addEventListener("click", (e) => {
    e.preventDefault();
    portfolioSection.scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".hireme-btn").addEventListener("click", (e) => {
    e.preventDefault();
    contactSection.scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".about-link").addEventListener("click", (e) => {
    e.preventDefault();
    aboutSection.scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".contact-link").addEventListener("click", (e) => {
    e.preventDefault();
    contactSection.scrollIntoView({ behavior: "smooth" });
});

/*------------------------------------------------------------>
<--          Creating a Portfolio Tabbed Component          -->
-------------------------------------------------------------*/


const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-ovelay");

p_btns.addEventListener("click", (e) => {
    // Console.log(e.target);

    // We will Get which child Element was Clicked
    const p_btn_clicked = e.target;
    console.log(p_btn_clicked);

    p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));
    // img_div.forEach((curElem) =>
    //   curElem.classList.remove("portfolio-image-active")
    // );

    p_btn_clicked.classList.add("p-btn-active");

    // To Find the p-img Class Number of the Images Using the btn data Attribute Number

    const btn_num = p_btn_clicked.dataset.btnNum;
    console.log(btn_num);

    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
    // console.log(img_active);

    p_img_elem.forEach((curElem) =>
        curElem.classList.add("p-image-not-active")
    );

    img_active.forEach((curElem) =>
        curElem.classList.remove(`p-image-not-active`)
    );
});


/*------------------------------------------------------------>
<--             Lazy Loading Section JavaScript             -->
-------------------------------------------------------------*/


const workSection = document.querySelector(".section-work-data");

const workSectionObserve = (entries) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    console.log(entries);


    const counterNum = document.querySelectorAll(".counter-numbers");
    // console.log(counterNum);
    const speed = 200;

    counterNum.forEach((curNumber) => {
        const updateNumber = () => {
            const targetNumber = parseInt(curNumber.dataset.number);
            // console.log(targetNumber);
            const initialNumber = parseInt(curNumber.innerText);
            // console.log(initialNumber);
            const incrementNumber = Math.trunc(targetNumber / speed);
            // I am Adding the value to the Main Number
            // console.log(incrementNumber);

            if (initialNumber < targetNumber) {
                curNumber.innerText = `${initialNumber + incrementNumber}+`;
                setTimeout(updateNumber, 10);
            } else {
                curNumber.innerText = `${targetNumber}+`;
            }

        };
        updateNumber();
    });
};

const workSecObserver = new IntersectionObserver(workSectionObserve, {
    root: null,
    threshold: 0,
});

workSecObserver.observe(workSection);
