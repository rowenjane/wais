//This is a function for closing and opening the sidebar
function togglesidebar(){
    document.getElementById("sidebar").classList.toggle("active");
    document.getElementById("header").style.left = "0";
    document.body.classList.toggle("active");
  }

  //function for the dropdown menu
  function dropdown() {
    document.getElementById("dropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches(".userprofile")) {
      var dropdowns = document.getElementsByClassName("dropdowncontent");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var opendropdown = dropdowns[i];
        if (opendropdown.classList.contains("show")) {
          opendropdown.classList.remove("show");
        }
      }
    }
  }