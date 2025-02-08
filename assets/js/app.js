// function push_css_link(url){
//     const timestamp = new Date().getTime(); // Get current timestamp
//     const link = document.createElement("link");
//     link.rel = "stylesheet";
//     link.href = `./assets/css/${url}.css?version=${timestamp}`; // Append timestamp
//     document.head.appendChild(link);
// }

// push_css_link("style");
// push_css_link("responsive");







jQuery('.stellarnav').stellarNav({
    theme: 'plain', // adds default color to nav. (light, dark)
    breakpoint: 1190, // number in pixels to determine when the nav should turn mobile friendly
    menuLabel: '', // label for the mobile nav
    sticky: false, // makes nav sticky on scroll (desktop only)
    position: 'static', // 'static', 'top', 'left', 'right' - when set to 'top', this forces the mobile nav to be placed absolutely on the very top of page
    openingSpeed: 250, // how fast the dropdown should open in milliseconds
    closingDelay: 250, // controls how long the dropdowns stay open for in milliseconds
    showArrows: true, // shows dropdown arrows next to the items that have sub menus
    phoneBtn: '', // adds a click-to-call phone link to the top of menu - i.e.: "18009084500"
    phoneLabel: 'Call Us', // label for the phone button
    locationBtn: '', // adds a location link to the top of menu - i.e.: "/location/", "http://site.com/contact-us/"
    locationLabel: 'Location', // label for the location button
    closeBtn: false, // adds a close button to the end of nav
    closeLabel: 'Close', // label for the close button
    mobileMode: false,
    scrollbarFix: false // fixes horizontal scrollbar issue on very long navs
  });


//   Sticky Header
  $(window).scroll(function(){
    let scroll = $(window).scrollTop();
    let header = $('header');

    if(scroll >= 50){
        header.addClass('sticky');
    }else{
        header.removeClass('sticky');
    }

})











// Get the button and circle
let scrollTopBtn = document.getElementById("scrollTopBtn");
let circle = document.querySelector("#scrollTopBtn svg #top-circle");

// Get the maximum scrollable height of the page
function getMaxScroll() {
    return document.documentElement.scrollHeight - window.innerHeight;
}

// Show button when the user scrolls down 20px from the top of the document
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    // Show or hide the button based on scroll position
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }

    // Get the current scroll position and calculate the stroke offset
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let maxScroll = getMaxScroll();

    // Calculate the stroke-dashoffset based on scroll position
    let scrollPercent = (scrollTop / maxScroll) * 252; // 251 is the circumference of the circle
    circle.style.strokeDashoffset = 252 - scrollPercent;
}

// Scroll to the top when the user clicks on the button
scrollTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});




document.getElementById('myForm').addEventListener('submit', function() {
    // Reset the form fields after submission
    setTimeout(() => {
        this.reset(); // Clears all fields
    }, 100); // A short delay to ensure the submission happens first
});

let Year = new Date().getFullYear();
document.querySelector("footer .copy-right p span").textContent = Year;


