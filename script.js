      const header = document.querySelector("header");
      const hamburgerBtn = document.querySelector("#hamburger-btn");
      const closeMenuBtn = document.querySelector("#close-menu-btn");

      // Toggle mobile menu on hamburger button click
      hamburgerBtn.addEventListener("click", () => header.classList.toggle("show-mobile-menu"));

      // Close mobile menu on close button click
      closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());


      // Select relevant HTML elements
      const filterButtons = document.querySelectorAll("#filter-buttons button");
      const filterableCards = document.querySelectorAll("#filterable-cards .card");
      
      // Function to filter cards based on filter buttons
      const filterCards = (e) => {
          document.querySelector("#filter-buttons .active").classList.remove("active");
          e.target.classList.add("active");
      
          filterableCards.forEach(card => {
              // show the card if it matches the clicked filter or show all cards if "all" filter is clicked
              if(card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all") {
                  return card.classList.replace("hide", "show");
              }
              card.classList.add("hide");
          });
      }
      
      filterButtons.forEach(button => button.addEventListener("click", filterCards));


      function show(){
        var pswrd = document.getElementById('pswrd');
        var icon = document.querySelector('.fas');
        if (pswrd.type === "password") {
         pswrd.type = "text";
         pswrd.style.marginTop = "20px";
         icon.style.color = "#7f2092";
        }else{
         pswrd.type = "password";
         icon.style.color = "grey";
        }
       }     