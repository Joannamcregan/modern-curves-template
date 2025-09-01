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

window.onload = addBehavior();

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

function addBehavior() {
    links.forEach((el) => {
        window.addEventListener("scroll", () => {
            handleUnderlines(el.getAttribute('href'), el);
        });
    });
}