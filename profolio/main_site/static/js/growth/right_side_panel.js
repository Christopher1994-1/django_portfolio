function right_side_panel_open() {

    document.getElementById("mySidepanel").style.width = "250px";

    let closebtn = document.getElementById('closebtn')
    let social_links = document.getElementById('panel-social')
    let para = document.getElementById('para')

    closebtn.style.display = "block"

    setTimeout(function() {
      social_links.style.display = "block"
  }, 200);

    

    setTimeout(function() {
      para.style.display = 'block'
  }, 200);

};


function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";

  let closebtn = document.getElementById('closebtn')
  let social_links = document.getElementById('panel-social')


  closebtn.style.display = "none"
  social_links.style.display = "none"
  para.style.display = 'none'
};