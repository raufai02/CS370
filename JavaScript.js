function v_validate(e){
  var name = VSignUpForm.fname.value;
  var username = VSignUpForm.username.value;
  var pass = VSignUpForm.pass.value;
  var email = VSignUpForm.email.value;
  var phone = VSignUpForm.phone.value;
  var address = VSignUpForm.address.value;
  var cb = VSignUpForm.TeryC;
  var a = 0;
  var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; 

  if (name == "" || /^\s+$/.test(name)){
    e.preventDefault();
    VSignUpForm.fname.focus();
    VSignUpForm.fname.classList.add("invalid");
    a = 1;
  } // NAME VALIDATION
  else{VSignUpForm.fname.classList.remove("invalid");}

  if (username == "" || /^\s+$/.test(username)){
    e.preventDefault();
    VSignUpForm.username.focus();
    VSignUpForm.username.classList.add("invalid");
    a = 1;
  } // USERNAME VALIDATION
  else{VSignUpForm.username.classList.remove("invalid");}

  if (pass == "" || pattern.test(pass)){
    e.preventDefault();
    VSignUpForm.pass.focus();
    VSignUpForm.pass.classList.add("invalid");
    a = 1;
  } // PASSWORD VALIDATION
  else{VSignUpForm.pass.classList.remove("invalid");}

  if (email == "" || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
    e.preventDefault();
    if(!a){VSignUpForm.email.focus(); a=1;}
    VSignUpForm.email.classList.add("invalid");
  } // EMAIL VALIDATION
  else{VSignUpForm.email.classList.remove("invalid");}

  if (phone == "" || !(/^\d{9}$/.test(phone))){

    e.preventDefault();
    if(!a){VSignUpForm.phone.focus(); a=1;}
    VSignUpForm.phone.classList.add("invalid");
  } // PHONE VALIDATION
  else{VSignUpForm.phone.classList.remove("invalid");}

  if (address == "" || address.length == 0 || address == null){
    e.preventDefault();
    if(!a){VSignUpForm.address.focus(); a=1;}
    VSignUpForm.address.classList.add("invalid");
  } // ADDRESS VALIDATION
  else{VSignUpForm.address.classList.remove("invalid");}

  if(!(cb.checked)){
    e.preventDefault();
    VSignUpForm.TeryC.classList.add("invalid");
    a=1;
  } // CHECKBOX VALIDATION
  else{VSignUpForm.TeryC.classList.remove("invalid");}

  if(!a){alert('Your request has been sent!');}

  return;
}
function r_validate(e){
  var name = RSignUpForm.fname.value;
  var email = RSignUpForm.email.value;
  var pass = RSignUpForm.pass.value;
  var phone = RSignUpForm.phone.value;
  var address = RSignUpForm.address.value;
  var license = RSignUpForm.license.value;
  var cb = RSignUpForm.TeryC;
  var a = 0;
  var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; 

  if (name == "" || /^\s+$/.test(name)){
    e.preventDefault();
    RSignUpForm.fname.focus();
    RSignUpForm.fname.classList.add("invalid");
    a = 1;
  } // NAME VALIDATION
  else{RSignUpForm.fname.classList.remove("invalid");}

  if (pass == "" || pattern.test(pass)){
    e.preventDefault();
    RSignUpForm.pass.focus();
    RSignUpForm.pass.classList.add("invalid");
    a = 1;
  } // PASSWORD VALIDATION
  else{RSignUpForm.pass.classList.remove("invalid");}

  if (email == "" || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
    e.preventDefault();
    if(!a){RSignUpForm.email.focus(); a=1;}
    RSignUpForm.email.classList.add("invalid");
  } // EMAIL VALIDATION
  else{RSignUpForm.email.classList.remove("invalid");}

  if (phone == "" || !(/^\d{9}$/.test(phone))){

    e.preventDefault();
    if(!a){RSignUpForm.phone.focus(); a=1;}
    RSignUpForm.phone.classList.add("invalid");
  } // PHONE VALIDATION
  else{RSignUpForm.phone.classList.remove("invalid");}

  if (address == "" || address.length == 0 || address == null){
    e.preventDefault();
    if(!a){RSignUpForm.address.focus(); a=1;}
    RSignUpForm.address.classList.add("invalid");
  } // ADDRESS VALIDATION
  else{RSignUpForm.address.classList.remove("invalid");}

  if (license == "" || license.length == 0 || license == null){
    e.preventDefault();
    if(!a){RSignUpForm.license.focus(); a=1;}
    RSignUpForm.license.classList.add("invalid");
  } // LICENSE VALIDATION
  else{RSignUpForm.license.classList.remove("invalid");}

  if(!(cb.checked)){
    e.preventDefault();
    RSignUpForm.TeryC.classList.add("invalid");
    a=1;
  } // CHECKBOX VALIDATION
  else{RSignUpForm.TeryC.classList.remove("invalid");}

  if(!a){alert('Your request has been sent!');}

  return;
}

function load(){
  VSignUpForm.addEventListener("submit", v_validate, false);
  RSignUpForm.addEventListener("submit", r_validate, false);
}

document.addEventListener("DOMContentLoaded", load, false);
