var mobileNav = document.querySelector(".mobile-nav");

mobileNav.addEventListener('click', () => {
    let navState = mobileNav.getAttribute("data-state");
    if (navState == "expanded") {
        mobileNav.setAttribute("data-state", "collapsed");
        console.log(mobileNav.firstChild);
        mobileNav.children[1].style.display = "none";
        mobileNav.children[0].style.display = "Block";
    } else {
        mobileNav.setAttribute("data-state", "expanded");
        mobileNav.children[1].style.display = "block";
        mobileNav.children[0].style.display = "none";
    }
})