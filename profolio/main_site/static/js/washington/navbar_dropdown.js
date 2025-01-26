function navbar_dropdown() {
    let nav_links = document.getElementById('nav_links');
    let jumbo = document.getElementById('jumbo')
  
    // to hide
    if (nav_links.style.display === "grid") {
      nav_links.style.opacity = "0";
      setTimeout(function() {
        nav_links.style.display = "none";
        jumbo.style.marginTop = "4%";
      }, 500);

      // to show
    } else {

      // jumbo 
      jumbo.style.marginTop = "20%";
      jumbo.style.transition = "margin-top 0.5s ease";

      setTimeout(function() {
        nav_links.style.opacity = "1";
        nav_links.style.transition = "opacity 0.5s ease";
        nav_links.style.display = "grid";
        nav_links.style.position = "absolute";
        nav_links.style.width = '90%';
        nav_links.style.gridTemplateColumns = "1fr"
        nav_links.style.rowGap = "30px";
      }, 500);
    }
}





function navbar_dropdown2() {
  let navbar_dropdown = document.getElementById('nav_links2')
  let button = document.getElementById('menu-btn')
  let button_x = document.getElementById('menu0x')

  if (navbar_dropdown.style.display = "none") {
    navbar_dropdown.style.display = "block"
    navbar_dropdown.style.display = "flex"
    navbar_dropdown.style.flexDirection = "column"
    button.style.display = 'none'
    button_x.style.display = 'block'
  }
};



function navbar_x() {
  let button_x = document.getElementById('menu0x')
  let button = document.getElementById('menu-btn')
  let navbar_dropdown = document.getElementById('nav_links2')

  button.style.display = 'block'
  button_x.style.display = 'none'
  navbar_dropdown.style.display = 'none'

}
