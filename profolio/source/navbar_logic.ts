//. MOBILE NAVBAR BURGER MENU ELEMENT
let mobileNavBurger:any = document.getElementById("buttonMenu");

//. MOBILE NAVBAR BURGER MENU ELEMENT
let mobileNavBurger2:any = document.getElementById("buttonMenu2");



//. LINKS
const LINKS: Record<string, string> = {
  starbucks_project: "projects_showcase/Starbucks Remake",
  washington_project: "projects_showcase/Washington",
  ofdream_project: "projects_showcase/Ofdream",
  stripe_payment: "projects_showcase/Stripe Backend Payment/",
  chatgpt: "/projects_showcase/ChatGPT Replica/",
  bigfoot: "",
  calapp: "projects_showcase/GUI Calculator App"
};
  


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
            <div class="nav-item-clickable" onclick="open_panel_options(${'clientside'})">
              <a>Client Side Apps</a>
              <i class="fa-solid fa-plus"></i>
            </div>
            <div class="dropdown-content" id="clientside">
                <a href="${LINKS.starbucks_project}">Starbucks Remake</a>
                <a href="${LINKS.washington_project}">Washington</a>
                <a href="${LINKS.ofdream_project}">Ofdream</a>
            </div>
        </div>
  
        <div class="nav-item">
            <div class="nav-item-clickable" onclick="open_panel_options(${'serverside'})">
              <a>Server Side App</a>
              <i class="fa-solid fa-plus"></i>
            </div>
            <div class="dropdown-content" id="serverside">
                <a href="${LINKS.stripe_payment}">Stripe Payment API</a>
                <a href="${LINKS.chatgpt}">ChatGPT Remake</a>
                <a href="#">Bigfoot Dataset Visualization</a>
            </div>
        </div>

        <div class="nav-item">
            <div class="nav-item-clickable" onclick="open_panel_options(${'apps'})">
              <a>Applications</a>
              <i class="fa-solid fa-plus"></i>
            </div>
            <div class="dropdown-content" id="apps">
                <a href="${LINKS.calapp}">Calculator App</a>
            </div>
        </div>
  
        <div class="nav-item">
            <div class="nav-item-clickable">
              <a>About Me</a>
            </div>
        </div>
  
  
        <div class="nav-item">
            <div class="nav-item-clickable">
              <a href="/contact_page">Contact Me</a>
            </div>
        </div>
  
  
        <div class="nav-item">
            <div class="nav-item-clickable">
              <a href="/privacy-policy" >Privacy Policy</a>
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
let boo: boolean = false;


//. FUNCTION THAT OPENS PANEL OPTIONS 
function open_panel_options(option:any): void {
  if (boo) {
    option.style.display = 'none';
    boo = false;
  }

  else {
    option.style.display = 'flex';
    boo = true;
  }
};




if (mobileNavBurger) {
    mobileNavBurger.addEventListener("click", function(event:any) {
        const newDiv = document.createElement('div');

        newDiv.id = "overlay";
      
        //Apply styles to make it cover the entire viewport
        newDiv.style.position = "fixed"; // Fixed position to cover everything
        newDiv.style.top = "0"; // Start from the top
        newDiv.style.left = "0"; // Start from the left
        newDiv.style.width = "100%"; // Full width
        newDiv.style.height = "100%"; // Full height
        newDiv.style.backgroundColor = "rgba(0, 0, 0, 0.61)"; // Semi-transparent black background
        newDiv.style.zIndex = "15"; // High z-index to ensure it is above all other elements
      
      
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
};


if (mobileNavBurger2) {
    mobileNavBurger2.addEventListener("click", function(event:any) {
        const newDiv = document.createElement('div');

        newDiv.id = "overlay";
      
        //Apply styles to make it cover the entire viewport
        newDiv.style.position = "fixed"; // Fixed position to cover everything
        newDiv.style.top = "0"; // Start from the top
        newDiv.style.left = "0"; // Start from the left
        newDiv.style.width = "100%"; // Full width
        newDiv.style.height = "100%"; // Full height
        newDiv.style.backgroundColor = "rgba(0, 0, 0, 0.61)"; // Semi-transparent black background
        newDiv.style.zIndex = "15"; // High z-index to ensure it is above all other elements
      
      
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
};