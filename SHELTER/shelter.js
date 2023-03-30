function togglelabel(e){
  var toggle = document.getElementById("flexSwitchCheckChecked").value;
  var open = document.getElementById("open");
  var close = document.getElementById("close");

  if (open.classList.contains("act") == true){
    close.classList.add("act");
    open.classList.remove("act");
  }
  else{
    open.classList.add("act");
    close.classList.remove("act");
  }

  return;
}

function load(){
  document.getElementById("flexSwitchCheckChecked").addEventListener("change", togglelabel, false);
}

document.addEventListener("DOMContentLoaded", load, false);
