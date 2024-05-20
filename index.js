


function updateVisibility() {

    if (window.innerWidth > 375 && window.innerWidth < 767) {
        document.getElementById('image').onclick=()=>{
     document.getElementById('image').style.visibility = 'hidden';
      document.getElementById('xsign').style.visibility = 'visible';
      document.getElementById('nav').style.visibility = 'visible';

        }
        document.getElementById('xsign').onclick=()=>{
            document.getElementById('image').style.visibility = 'visible';
            document.getElementById('xsign').style.visibility = 'hidden';
            document.getElementById('nav').style.visibility = 'hidden';
    
    
            }
       
      
    } else {
    //   document.getElementById('image').style.visibility = 'hidden';
    //   document.getElementById('xsign').style.visibility = 'hidden';
    //   document.getElementById('nav').style.visibility = 'hidden';
    }
  }
  
  // Initial visibility update when the page loads
  updateVisibility();
  
  // Event handler for window resize event
  window.addEventListener('resize', updateVisibility);
