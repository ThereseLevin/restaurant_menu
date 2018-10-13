/* --- JAVASCRIPT FOR CHANGING COLORS AND IMAGES --- */

let defaultColor = "#444444";

window.addEventListener("load", startUp, false);

function startUp() {
    bColor = document.querySelector("#backg-color");
    hColor = document.querySelector("#h1-color");

    //lägger till defaultfärgen
    bColor.value = defaultColor;
    hColor.value = "#993999";

    //lyssnar efter event, kör function
    bColor.addEventListener("input", updateFirst, false);
    bColor.addEventListener("change", updateAll, false);

    hColor.addEventListener("input", updateFirst2, false);
    hColor.addEventListener("change", updateAll2, false);

    //först markerad
    bColor.select();
}

function updateFirst(event) {
  let all = document.querySelector(".section-3");
  if (all) {
    all.style.backgroundColor = event.target.value;
  }
}

function updateAll(event) {
  document.querySelectorAll(".section-3").forEach(function(all) {
    all.style.backgroundColor = event.target.value;
  });
}

function updateFirst2(event) {
  let menyHeading = document.querySelector("h3");
  if (menyHeading) {
    menyHeading.style.color = event.target.value;
  }
}

function updateAll2(event) {
  document.querySelectorAll("h3").forEach(function(menyHeading) {
    menyHeading.style.color = event.target.value;
  });
}




// const inputs = document.querySelector('#h1-color');

// function handleUpdate() {
//   const suffix = this.dataset.sizing || '';
//   document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
// }

// inputs.forEach(input => input.addEventListener('change', handleUpdate));
// inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
