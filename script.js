// Select the header, hamburger button, and close menu button elements
const header = document.querySelector("header");
const hamburgerBtn = document.querySelector("#hamburger-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");

// Toggle mobile menu on hamburger button click
hamburgerBtn.addEventListener("click", () => header.classList.toggle("show-mobile-menu"));
// This line adds a click event listener to the hamburger button.
// When the button is clicked, it toggles the 'show-mobile-menu' class on the header element.

// Close mobile menu on close button click
closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());
// This line adds a click event listener to the close menu button.
// When the button is clicked, it programmatically triggers a click on the hamburger button.

// end of menu button 



// Select relevant HTML elements for image filtering
function filterImages(category) {
    // Get all elements with the class 'item'
    const items = document.querySelectorAll('.card');

    // Loop through each item
    items.forEach(item => {
        // Get the value of the 'data-name' attribute of the current item
        const dataCategory = item.getAttribute('data-name');

        // Check if the category is 'all' or matches the data-category of the item
        if (category === 'all' || dataCategory === category) {
            // Display the item
            item.style.display = 'block';
        } else {
            // Hide the item
            item.style.display = 'none';
        }
    });
}


// end of filter gallery


// Execute the following code when the window has fully loaded
window.addEventListener("load", function () {
    // Set a timeout function to execute after 2000 milliseconds (2 seconds)
    setTimeout(function () {
        // Open the popup
        openPopup();
    }, 2000);
});

// Add a click event listener to the element with id 'close'
document.querySelector("#close").addEventListener("click", function () {
    // Close the popup when the 'close' element is clicked
    closePopup();
});

// Function to open the popup
function openPopup() {
    document.querySelector(".popup").style.display = "block";
}

// Function to close the popup
function closePopup() {
    document.querySelector(".popup").style.display = "none";
}

// Function to display text and hide the form
function displayText() {
    // Get the form element and hide it
    var form = document.getElementById('form');
    form.style.display = 'none';

    // Get the text element and display it
    var text = document.getElementById('textMsg');
    text.style.display = 'block';
}


// alert
function showAlert() {
    alert("Your vouhcer have been sucessfully credited in your cart.");
  }
  