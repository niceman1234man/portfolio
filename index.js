
document.getElementById('image').onclick = () => {
  document.getElementById('image').style.visibility = 'hidden';
  document.getElementById('xsign').style.visibility = 'visible';
  var headerListInfo = document.getElementsByClassName('header-list-info');
  for (var i = 0; i < headerListInfo.length; i++) {
    headerListInfo[i].style.visibility = 'visible';
  }
};

document.getElementById('xsign').onclick = () => {
  document.getElementById('image').style.visibility = 'visible';
  document.getElementById('xsign').style.visibility = 'hidden';
  var headerListInfo = document.getElementsByClassName('header-list-info');
  for (var i = 0; i < headerListInfo.length; i++) {
    headerListInfo[i].style.visibility = 'hidden';
  }
};
 
 

// Initial visibility update when the page loads

// Event handler for window resize event

const emailField = document.getElementById('email');
const emailError = document.getElementById('email-error');
const usernameField = document.getElementById('username');
const usernameError = document.getElementById('username-error');

document.getElementById('email').onkeyup = () => {
  const emailRegex = /^[\\w-]+@([\\w-]+\\.)+[\\w-]{2,4}$/;
  if (!emailRegex.test(emailField.value)) {
    emailError.innerHTML = 'Please enter a valid email address.';
    return false;
  }
  emailError.innerHTML = '';

  return true;
};
document.getElementById('username').onkeyup = () => {
  const usernameRegex = /^[a-zA-Z]{4,20}$/;
  if (!usernameRegex.test(usernameField.value)) {
    usernameError.innerHTML = 'Username must be 4-20 characters long and contain only letters.';
    return false;
  }
  usernameError.innerHTML = '';

  return true;
};