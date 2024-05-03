document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const hiddenUl = document.querySelector(".hidden-in-small-screen");
    const navbar = document.querySelector(".navigation-bar");

     // Function to handle screen size changes
function handleScreenSizeChange(mql) {
    const magnifyingGlassIcon = document.querySelector(".fa-magnifying-glass");
    const cartShoppingIcon = document.querySelector(".fa-cart-shopping");
    const visibleInAllSizesList = document.querySelector(".visible-in-all-sizes");
  
    // Check if the screen size matches the media query
    if (mql.matches) {
      // Screen size matches the media query
      // Create navbarIcons div
      const navbarIcons = document.createElement("div");
      navbarIcons.append(magnifyingGlassIcon, cartShoppingIcon);
      
      // Add the new div to the visibleInAllSizesList
      visibleInAllSizesList.appendChild(navbarIcons);
    } else {
      // Screen size does not match the media query
      // Ensure that the .visible-in-all-sizes list is always displayed
      // You can choose to do something else here if needed
      // For example, remove the navbarIcons div
      const navbarIcons = document.querySelector(".navbar-icons");
      if (navbarIcons) {
        navbarIcons.remove();
      }
    }
  }
  
  // Create a media query list for the specific screen size
  const mql = window.matchMedia("(max-width: 767.98px)");
  
  // Call the function initially to check the screen size
  handleScreenSizeChange(mql);
  
  // Add a listener for changes in screen size
  mql.addListener(handleScreenSizeChange);
  
  
        
    menuIcon.addEventListener("click", function() {
        hiddenUl.classList.toggle("show-ul");
        menuIcon.classList.toggle("fa-bars-staggered");
        menuIcon.classList.toggle("fa-xmark");
        if (navbar.style.backgroundColor === "white") {
            navbar.style.backgroundColor = "transparent";
        } else {
            navbar.style.backgroundColor = "white";
        }    
    });
});
