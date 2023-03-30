function confirm(e){
  var confirmbox = document.getElementById("alertconfirm");
  confirmbox.classList.add("act");
  return;
}

function load(){
  const postbutton = document.getElementById("post");
  postbutton.addEventListener("click", confirm);
}

document.addEventListener("DOMContentLoaded", load, false);
