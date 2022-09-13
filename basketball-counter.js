let homescore = 0;
let guestscore = 0;

let home = document.getElementById("home-score");
function addonehome() {
  homescore += 1;
  home.textContent = homescore;
}
function addtwohome() {
  homescore += 2;
  home.textContent = homescore;
}
function addthreehome() {
  homescore += 3;
  home.textContent = homescore;
}

let guest = document.getElementById("guest-score");
function addoneguest() {
  guestscore += 1;
  guest.textContent = guestscore;
}
function addtwoguest() {
  guestscore += 2;
  guest.textContent = guestscore;
}
function addthreeguest() {
  guestscore += 3;
  guest.textContent = guestscore;
}

function reset() {
  homescore = 0;
  guestscore = 0;
  home.textContent = homescore;
  guest.textContent = guestscore;
  // document.getElementById("periodDisplay").textContent = "";
}

count = 0;

function newperiod() {
  count += 1;
  para = document.createElement("p");
  para.textContent = "Period " + count + " : " + homescore + " - " + guestscore;
  para.classList.add("perioddisplay");
  document.getElementById("periodDisplay").appendChild(para);
  reset();
}
