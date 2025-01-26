window.addEventListener('scroll', () => {
    let weAreGrowth = document.getElementById('under-jumbo-items')
  
    if (window.pageYOffset >= 300) {
  
      weAreGrowth.style.opacity = 1;
      weAreGrowth.style.transform = "translateY(0)";
    } 
  
  });