const links = document.querySelectorAll('.desktop-link');
const aboutLink = document.getElementById('about-link');
const aboutSection = document.getElementById('about-section');
const closePrivacyPolicy = document.getElementById('close-privacy-policy');
const privacyPolicy = document.getElementById('privacy-policy');
const openMobileMenu = document.getElementById('mobile-menu-icon');
const closeMobileMenu = document.getElementById('close-mobile-menu');
const mobileMenu = document.getElementById('mobile-menu');
const privacyPolicyLink = document.getElementById('privacy-policy-link');
const cookieOverlay = document.getElementById('cookie-banner');
const allowCookies = document.getElementById('allow-cookies');
const disallowCookies = document.getElementById('disallow-cookies');
const leftArrow = document.getElementById('reviews--left-arrow');
const rightArrow = document.getElementById('reviews--right-arrow');
const reviews = document.getElementsByClassName('review-box');
const callNow = document.getElementById('callNowDesktop');
const contactOverlay = document.getElementById('contact-overlay');
const upArrow = document.getElementById('contact--up-arrow');

window.onload = addBehavior();

upArrow.addEventListener("click", () => {
    contactOverlay.classList.remove('slideDown');
    contactOverlay.classList.add('slideUp');
    setTimeout(() => {
        contactOverlay.classList.add('hidden');
        contactOverlay.classList.remove('slideUp');
    }, 1000);
})

callNow.addEventListener("click", () => {
    contactOverlay.classList.remove('hidden');
    contactOverlay.classList.add('slideDown');
})

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

rightArrow.addEventListener("click", scrollReviewsRight);

leftArrow.addEventListener("click", scrollReviewsLeft);

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

const addUnderline = (link) => {
    links.forEach((el) => {
        el.classList.remove("orange-text");
    })
    link.classList.add("orange-text");
}

const handleUnderlines = (sectionRef, linkRef) => {
    const section = document.querySelector(sectionRef);
    if (elementInView(section, 2)) {
        addUnderline(linkRef);
    }
}

function scrollReviewsRight() {
    const currentSelected = document.getElementsByClassName('selected-review')[0];
    const currentIndex = parseInt(currentSelected.getAttribute('data-review'));
    const newSelected = document.querySelector('[data-review="' + (currentIndex + 1) + '"]');
    leftArrow.classList.add('hidden');
    rightArrow.classList.add('hidden');
    currentSelected.classList.add('slideOutLeft');
    setTimeout(()=>{        
        newSelected.classList.add('slideInRight');
    }, 10);
    setTimeout(()=>{
        currentSelected.classList.remove('slideOutLeft');
        newSelected.classList.remove('slideInRight');
        currentSelected.classList.remove('selected-review');
        newSelected.classList.add('selected-review');
        if (parseInt(currentIndex) < (reviews.length - 2)){
            rightArrow.classList.remove('hidden');
        }
        leftArrow.classList.remove('hidden');
    }, 2200);
}

function scrollReviewsLeft() {
    const currentSelected = document.getElementsByClassName('selected-review')[0];
    const currentIndex = parseInt(currentSelected.getAttribute('data-review'));
    const newSelected = document.querySelector('[data-review="' + (currentIndex - 1) + '"]');
    leftArrow.classList.add('hidden');
    rightArrow.classList.add('hidden');
    setTimeout(()=>{        
        currentSelected.classList.add('slideOutRight');
        newSelected.classList.add('slideInLeft');
    }, 10);
    setTimeout(()=>{
        currentSelected.classList.remove('selected-review');
        newSelected.classList.add('selected-review');
        currentSelected.classList.remove('slideOutRight');
        newSelected.classList.remove('slideInLeft');
        if (parseInt(currentIndex) > 0){
        leftArrow.classList.remove('hidden');
    }
    rightArrow.classList.remove('hidden');
    }, 2200);
}

function addBehavior() {
    links.forEach((el) => {
        window.addEventListener("scroll", () => {
            handleUnderlines(el.getAttribute('href'), el);
        });
    });
}