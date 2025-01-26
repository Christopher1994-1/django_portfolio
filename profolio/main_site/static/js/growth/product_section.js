// JS for Products section animations

window.addEventListener('scroll', () => {

    let h5_header = document.getElementById('h5-header')
    let h1_header = document.getElementById('h1-header')
  
    let products = document.getElementById('products')
  
    if (window.pageYOffset >= 900) {
  
      h5_header.style.opacity = 1;
      h5_header.style.transform = "translateY(0)";
  
    };
  
    if (window.pageYOffset >= 930) {
  
      h1_header.style.opacity = 1;
      h1_header.style.transform = "translateY(0)";
  
    };
  
  
    if (window.pageYOffset >= 950) {
  
      products.style.opacity = 1;
      // products.style.transform = "translateY(0)";
    };
  
  });