    //   for responsive menu 
const header = document.querySelector("header");
const hamburgerBtn = document.querySelector("#hamburger-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");

      // Toggle mobile menu on hamburger button click
hamburgerBtn.addEventListener("click", () => header.classList.toggle("show-mobile-menu"));

      // Close mobile menu on close button click
closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());


      // Select relevant HTML elements
function filterImages(category) {
    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        const dataCategory = item.getAttribute('data-name');

        if (category === 'all' || dataCategory === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// for popup only        

window.addEventListener("load", function () { // Execute the following code when the window has fully loaded
    // Set a timeout function to execute after 2000 milliseconds (2 seconds)
    setTimeout(function () {
        openPopup();
    }, 2000);
});

document.querySelector("#close").addEventListener("click", function () {
    closePopup();
});

function openPopup() {
    document.querySelector(".popup").style.display = "block";
}

function closePopup() {
    document.querySelector(".popup").style.display = "none";
}





function displayText(){

    var form = document.getElementById('form')
    form.style.display = 'none';

    var text = document.getElementById('textMsg')
    text.style.display = 'block'
    
    
}


// this is for the filter page 

// Select relevant HTML elements
// Select relevant HTML elements
function filterImages(category) {
    const items = document.querySelectorAll('.card');

    items.forEach(item => {
        const dataCategory = item.getAttribute('data-name');

        if (category === 'all' || dataCategory === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}




// alert
function showAlert() {
    alert("Your vouhcer have been sucessfully credited in your cart.");
  }
  