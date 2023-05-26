let email = document.getElementById('email-early-access');
let errorMsg = document.getElementById('error-msg');
let submitBtn = document.querySelector('[type=submit]');
let count = 0;
let mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;

function checker() {
  if (email.value.match(mailRegex)) {
    errorMsg.style.display = 'none';
    email.style.boxShadow = 'none';
  } else if (email.value == '') {
    errorMsg.style.display = 'none';
    email.style.boxShadow = 'none';
  } else {
    errorMsg.style.display = 'block';
    email.style.boxShadow = 'inset 0 0 0 2px #ff4242';
  }
}
