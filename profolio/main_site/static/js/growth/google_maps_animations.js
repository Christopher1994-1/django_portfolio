window.addEventListener('scroll', () => {
    let h5_header  = document.getElementById('h5_header')
    let h1_header  = document.getElementById('h1_header')
    let paragraph = document.getElementById('paragraph')


    if (window.pageYOffset >= 2100) {
        h1_header.style.opacity = 1;
        h5_header.style.opacity = 1;
        paragraph.style.opacity = 1;
    }
})
  