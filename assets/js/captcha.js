// CAPTCHA VALIDATION
function getNewcode() {
   document.getElementById('code').innerHTML = captchavalidate();
}

function captchavalidate() {
   var character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var captcha = "";

   for (let i = 0; i < 6; i++) {
       captcha += character[Math.floor(Math.random() * 62)];
   }
   return captcha;
}

document.addEventListener('DOMContentLoaded', function () {
   getNewcode();
});

// FORM VALIDATION LOGIC

function login() {
   var isValid = true;
   var captchainput = document.querySelector('#CaptchaId').value;
   var captchacode = document.querySelector('#code').innerText.replace(/\s/g, "");
   var name = document.querySelector('#name1').value;
   var email = document.querySelector('#email1').value;
   var mobile = document.querySelector('#mobile1').value;
   var message = document.querySelector('#msg1').value;
   var regexname = /^[a-zA-Z ]+$/;
   var regexemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   // For error message to be shown during validation
   document.getElementById('cnamee').innerHTML = "";
   document.getElementById('cemail').innerHTML = "";
   document.getElementById('cmobile').innerHTML = "";
   document.getElementById('cmessage').innerHTML = "";
   document.getElementById('msg').innerHTML = "";

   // Condition for validation

   if (name === "") {
       document.getElementById('cnamee').innerHTML = "Please enter your name";
       isValid = false;
   } else {
       if (!regexname.test(name)) {
           document.getElementById('cnamee').innerHTML = "Enter a valid name";
           isValid = false;
       }
   }
   if (email === "") {
       document.getElementById('cemail').innerHTML = "Enter your email";
       isValid = false;
   } else {
       if (!regexemail.test(email)) {
           document.getElementById('cemail').innerHTML = "Enter a valid email";
           isValid = false;
       }
   }
   if (mobile === "") {
       document.getElementById('cmobile').innerHTML = "Enter your mobile number";
       isValid = false;
   } else {
       if (mobile.length != 10 || /^(1234567890|0000000000|9999999999|1111111111|2222222222|3333333333|4444444444|5555555555|6666666666|7777777777|8888888888)$/.test(mobile)) {
           document.getElementById('cmobile').innerHTML = "Enter a valid mobile number";
           isValid = false;
       }
   }
   if (message === "") {
       document.getElementById('cmessage').innerHTML = "Please write your query";
       isValid = false;
   } else {
       if (message.length > 200) {
           document.getElementById('cmessage').innerHTML = "Enter the query of desirable size 200";
           isValid = false;
       } else if (message.length < 6) {
           document.getElementById('cmessage').innerHTML = "Enter the query of desirable size greater than 6 characters";
           isValid = false;
       }
   }
   if (captchainput === "") {
       document.getElementById('msg').innerHTML = "Please enter captcha";
       isValid = false;
   } else if (captchainput !== captchacode) {
       document.getElementById('msg').innerHTML = "Please enter a valid captcha";
       isValid = false;
   }

   return isValid;
}
