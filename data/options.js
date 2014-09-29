
// Saves options to localStorage.
function save_ip() {
  localStorage["ip"] = document.getElementById("input").value;
}

function load_ip() {
  document.getElementById("input").value = localStorage["ip"];
}

function test() {
  document.getElementById("demo").innerHTML = "Hello World";
}

document.getElementById("myBtn").addEventListener("click", save_ip);

document.addEventListener('DOMContentLoaded', function () {
  if(localStorage["ip"] == null)
  {
	localStorage["ip"] = "";
	load_ip();
  }
  else
  {
	load_ip();
  }
});

