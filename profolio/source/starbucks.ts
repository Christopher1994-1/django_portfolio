//. FUNCTION THAT OPENS THE MOBILE SIDE PANEL
function openSidePanel(): void {
    const newDiv = document.createElement('div');

    let openbutton:any = document.getElementById("hamburger");
    let xbutton:any = document.getElementById("xburger");

    openbutton.style.display = 'none';
    xbutton.style.display = 'block';

    newDiv.id = "panel"
  
    newDiv.innerHTML = `
    <div id="mobile-side-panel">

        <div class="links">
            <a>Menu</a>
            <a>Rewards</a>
            <a>Gift Cards</a>
            <a href="/">Portfolio Home</a>
        </div>

        <hr>

        <div class="buttons">
            <button id="signin">Sign in</button>
            <button id="join">Join Now</button>
        </div>

        <div class="bottom">
            <i class="fa-solid fa-location-dot"></i>
            <a>Find a store</a>
        </div>
    
  
    </div>
  
  `;
  
  
    document.body.appendChild(newDiv);
};


//. FUNCTION THAT CLOSES THE MOBILE SIDE PANEL
function closeSidePanel(): void {

    let openbutton:any = document.getElementById("hamburger");
    let xbutton:any = document.getElementById("xburger");
    let panel: any = document.getElementById("panel");

    openbutton.style.display = 'block';
    xbutton.style.display = 'none';

    panel.style.display = "none";

    document.body.removeChild(panel);
};