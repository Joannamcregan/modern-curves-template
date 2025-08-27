const links = document.querySelectorAll('.desktop-link');
const aboutLink = document.getElementById('about-link');
const aboutSection = document.getElementById('about-section');
const reviews = document.querySelectorAll('.review-box');
const closePrivacyPolicy = document.getElementById('close-privacy-policy');
const privacyPolicy = document.getElementById('privacy-policy');
const openMobileMenu = document.getElementById('mobile-menu-icon');
const closeMobileMenu = document.getElementById('close-mobile-menu');
const mobileMenu = document.getElementById('mobile-menu');
const privacyPolicyLink = document.getElementById('privacy-policy-link');
const cookieOverlay = document.getElementById('cookie-banner');
const allowCookies = document.getElementById('allow-cookies');
const disallowCookies = document.getElementById('disallow-cookies');

window.onload = addBehavior();
window.addEventListener("scroll", () => { 
    handleSlideAnimation();
});

privacyPolicyLink.addEventListener("click", () => {
    privacyPolicy.classList.remove('hidden');
    privacyPolicy.classList.add('fade-open');
    privacyPolicy.classList.add('block');
    setTimeout(()=>{
        privacyPolicy.classList.remove('fade-open');
    }, 1000);
})

closePrivacyPolicy.addEventListener("click", () => {
    privacyPolicy.classList.remove('block');
    privacyPolicy.classList.add('fade-closed');
    setTimeout(()=>{
        privacyPolicy.classList.add('hidden');
        privacyPolicy.classList.remove('fade-closed');
    }, 1000);
})

openMobileMenu.addEventListener("click", ()=>{
    mobileMenu.classList.add('fade-open');
    mobileMenu.classList.remove('hidden');
    setTimeout(()=>{
        mobileMenu.classList.remove('fade-open');
    }, 1000);
})

closeMobileMenu.addEventListener("click", ()=>{
    mobileMenu.classList.add('fade-closed');
    setTimeout(()=>{
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('fade-closed');
    }, 1000)
})

const closeCookieOverlay = () => {
    cookieOverlay.classList.add('fade-closed');
    setTimeout(()=>{
        cookieOverlay.classList.add('hidden');
    }, 1000)
}

allowCookies.addEventListener("click", closeCookieOverlay);

disallowCookies.addEventListener("click", closeCookieOverlay);

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend);
};

const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
};

const slideIn = (element) => {
    element.classList.add("sliding");
    setTimeout(()=>{
        element.classList.remove("slid");
    }, 500);
};

const slideOut = (element) => {
    element.classList.add("slid");
    element.classList.remove("sliding");
};

const handleSlideAnimation = () => {
    reviews.forEach((el) => {
        if (elementInView(el, 1.25)) {
            slideIn(el);
        } else if (elementOutofView(el)) {
            slideOut(el)
        }
    })
}

const addUnderline = (link) => {
    links.forEach((el) => {
        el.classList.remove("yellow-underline");
    })
    link.classList.add("yellow-underline");
}

const handleUnderlines = (sectionRef, linkRef) => {
    const section = document.querySelector(sectionRef);
    if (elementInView(section, 2)) {
        addUnderline(linkRef);
    }
}

function scrollMarquee() {
    const marquee = document.getElementById('marquee');
    const clone = marquee.innerHTML;
    const firstElement = marquee.children[0];
    marquee.insertAdjacentHTML('beforeend', clone);
    marquee.insertAdjacentHTML('beforeend', clone);
    marquee.insertAdjacentHTML('beforeend', clone);
    marquee.insertAdjacentHTML('beforeend', clone);
    marquee.insertAdjacentHTML('beforeend', clone);
    marquee.insertAdjacentHTML('beforeend', clone);
    marquee.insertAdjacentHTML('beforeend', clone);
    marquee.insertAdjacentHTML('beforeend', clone);
    marquee.insertAdjacentHTML('beforeend', clone);
    marquee.insertAdjacentHTML('beforeend', clone);
    let i = 0;
    setInterval(function () {
        firstElement.style.marginLeft = `-${i}px`;
        if (i > firstElement.clientWidth) {
            i = 0;
        }
        i = i + 0.2;
    }, 0);
}

function addBehavior() {
    scrollMarquee();
    links.forEach((el) => {
        window.addEventListener("scroll", () => {
            handleUnderlines(el.getAttribute('href'), el);
        });
    });
}