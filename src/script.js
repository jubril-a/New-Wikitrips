var mobileNav = document.querySelector(".mobile-nav")
var faqs = document.querySelectorAll(".faq")
var navlinks = document.querySelector(".navlinks")
var services = document.querySelector(".services-navlink")
let dropdown = document.querySelector('.services-dropdown')
let sliderControls = document.querySelectorAll(".slider-buttons")


mobileNav.addEventListener('click', () => {
    let navState = mobileNav.getAttribute("data-state")
    if (navState == "expanded") {
        mobileNav.setAttribute("data-state", "collapsed")
        mobileNav.children[1].style.display = "none"
        mobileNav.children[0].style.display = "Block"
        navlinks.style.display = "none"
    } else {
        mobileNav.setAttribute("data-state", "expanded")
        mobileNav.children[1].style.display = "block"
        mobileNav.children[0].style.display = "none"
        // close services dropdown
        dropdown.setAttribute("data-state", "collapsed")
        navlinks.style.display = "flex"
    }
})

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        let active = document.querySelector('.active')
        active.classList.remove("active")
        faq.classList.add("active")
    })
})

services.addEventListener('click', (e) => {
    e.preventDefault()
    let dropdownState = dropdown.getAttribute("data-state")
    if (dropdownState == "expanded") {
        dropdown.setAttribute("data-state", "collapsed")
    } else {
        dropdown.setAttribute("data-state", "expanded")
    }
})

document.querySelector('body').addEventListener('click', (e) => {
    if (!(dropdown.contains(e.target)) && services != e.target) {
        dropdown.setAttribute("data-state", "collapsed")
    }
})

for (let button of sliderControls) {
    button.addEventListener('click', () => {
        let slider = document.getElementById(button.getAttribute('data-controls'))
        let sliderWidth = slider.offsetWidth;
        if (button.classList.contains("prev")) {
            slider.scrollLeft -= sliderWidth
        } else {
            slider.scrollLeft += sliderWidth
        }
    })
}