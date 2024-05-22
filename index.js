


  if (window.innerWidth > 375 && window.innerWidth < 767) {
    document.getElementById('image').onclick= () => {
      document.getElementById('image').style.visibility = 'hidden';
      document.getElementById('xsign').style.visibility = 'visible';
      document.getElementById('nav').style.visibility = 'visible';
    };
    document.getElementById('xsign').onclick = () => {
      document.getElementById('image').style.visibility = 'visible';
      document.getElementById('xsign').style.visibility = 'hidden';
      document.getElementById('nav').style.visibility = 'hidden';
    };
  } else if(window.innerWidth>768){
       document.getElementById('image').style.visibility = 'hidden';
       document.getElementById('xsign').style.visibility = 'hidden';
       document.getElementById('nav').style.visibility = 'visible';
  }


// Initial visibility update when the page loads


// Event handler for window resize event


var email_field = document.getElementById('email');
var email_error = document.getElementById('email-error');
var username_field = document.getElementById('username');
var username_error = document.getElementById('username-error');

function validate() {
  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(email_field.value)) {
    email_error.innerHTML = 'Please enter a valid email address.';
    return false;
  } else {
    email_error.innerHTML = '';
  }
  return true;
 
}
function validatename(){
  var usernameRegex = /^[a-zA-Z]{4,20}$/;
  if (!usernameRegex.test(username_field.value)) {
    username_error.innerHTML = 'Username must be 4-20 characters long and contain only letters.';
    return false;
  } else {
    username_error.innerHTML = '';
  }

  return true;
}