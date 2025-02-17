const scrollThreshold = 700;  // Define the threshold in pixels
let lastScrollY = 0;


let navBar10: any = document.getElementById('narbar');

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > scrollThreshold) {
    navBar10.style.backgroundColor = "#333";
    
  } else {
    navBar10.style.backgroundColor = "#232323c8";
  }

  lastScrollY = currentScrollY;
});






//. FUNCTION THAT OPENS SIDE PANEL FOR MOBILE
function openSidePanel(): void {

  const newDiv = document.createElement('div');

  newDiv.id = "panel"

  newDiv.innerHTML = `
  <div id="mobile-side-panel">

    <div id="close-button-container">
      <button id="close-button"><i class="fa-solid fa-xmark"></i></button>
    </div>

      <div class="nav-item">
          <div class="nav-item-clickable" onclick="open_panel_options(${'about_us'})">
            <a>Abuse Us</a>
            <i class="fa-solid fa-plus"></i>
          </div>
          <div class="dropdown-content" id="about_us">
              <a href="#">About AeroTherm</a>
              <a href="#">In The Media</a>
              <a href="#">Contact Us</a>
          </div>
      </div>

      <div class="nav-item">
          <div class="nav-item-clickable" onclick="open_panel_options(${'why_us'})">
            <a>Why Us?</a>
            <i class="fa-solid fa-plus"></i>
          </div>
          <div class="dropdown-content" id="why_us">
              <a href="#">Why Us?</a>
              <a href="#">Why Preheat?</a>
          </div>
      </div>

      <div class="nav-item">
          <div class="nav-item-clickable">
            <a>Shop</a>
          </div>
      </div>

      <div class="nav-item">
          <div class="nav-item-clickable">
            <a>Compare</a>
          </div>
      </div>

      <div class="nav-item">
          <div class="nav-item-clickable" onclick="open_panel_options(${'customer_planes'})">
            <a>Customer Planes</a>
            <i class="fa-solid fa-plus"></i>
          </div>
          <div class="dropdown-content" id="customer_planes">
              <a href="#">Customer Planes</a>
              <a href="#">Testimonials</a>
          </div>
      </div>

      <div class="nav-item">
          <div class="nav-item-clickable">
            <a>Manuals</a>
          </div>
      </div>


      <div class="nav-item">
          <div class="nav-item-clickable">
            <a>FAQ</a>
          </div>
      </div>


  </div>

`;


  document.body.appendChild(newDiv);


  let close_button:any = document.getElementById('close-button');
  let overlay:any = document.getElementById("overlay");
  close_button.addEventListener('click', () => {
    if (newDiv) {
      // Remove the div from the body
      document.body.removeChild(newDiv);
      if (overlay) {
        document.body.removeChild(overlay);
      }
    }
  });

};



//. BOOLEAN VALUE
let boo1: boolean = false;


//. FUNCTION THAT OPENS PANEL OPTIONS 
function open_panel_options(option:any): void {
  if (boo1) {
    option.style.display = 'none';
    boo1 = false;
  }

  else {
    option.style.display = 'flex';
    boo1 = true;
  }
};










let mobileNavButton: any = document.getElementById('mobile-nav-button');


mobileNavButton.addEventListener('click', () => {
  const newDiv = document.createElement('div');

  newDiv.id = "overlay";

  // //Apply styles to make it cover the entire viewport
  // newDiv.style.position = "fixed"; // Fixed position to cover everything
  // newDiv.style.top = "0"; // Start from the top
  // newDiv.style.left = "0"; // Start from the left
  // newDiv.style.width = "100%"; // Full width
  // newDiv.style.height = "100%"; // Full height
  // newDiv.style.backgroundColor = "rgba(0, 0, 0, 0.61)"; // Semi-transparent black background
  // newDiv.style.zIndex = "15"; // High z-index to ensure it is above all other elements


  document.body.appendChild(newDiv);

  openSidePanel();


  let overlay:any = document.getElementById("overlay");
  let panel:any = document.getElementById('panel');
  overlay.addEventListener('click', () => {
    if (newDiv) {
      // Remove the div from the body
      document.body.removeChild(newDiv);

      if (panel) {
        document.body.removeChild(panel);
      }
    }
  });


});