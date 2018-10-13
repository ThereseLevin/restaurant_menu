/* --- JAVASCRIPT FOR CHANGING COLORS AND IMAGES --- */



window.addEventListener("load", startUp, false);

function startUp() {
    bColor = document.querySelector("#backg-color");
    hColor = document.querySelector("#h1-color");
    uColor = document.querySelector("#u-color");
    mColor = document.querySelector("#m-color");

    //lyssnar efter event, kör function
    bColor.addEventListener("input", updateFirst, false);
    bColor.addEventListener("change", updateAll, false);

    hColor.addEventListener("input", updateFirst2, false);
    hColor.addEventListener("change", updateAll2, false);

    uColor.addEventListener("input", updateFirst3, false);
    uColor.addEventListener("change", updateAll3, false);

    mColor.addEventListener("input", updateFirst4, false);
    mColor.addEventListener("change", updateAll4, false);

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

function updateFirst3(event) {
  let underHeading = document.querySelector("small");
  if (underHeading) {
    underHeading.style.color = event.target.value;
  }
}

function updateAll3(event) {
  document.querySelectorAll("small").forEach(function(underHeading) {
    underHeading.style.color = event.target.value;
  });
}

function updateFirst4(event) {
  let item = document.querySelector(".item");
  if (item) {
    item.style.color = event.target.value;
  }
}

function updateAll4(event) {
  document.querySelectorAll(".item").forEach(function(item) {
    item.style.color = event.target.value;
  });
}




// const inputs = document.querySelector('#h1-color');

// function handleUpdate() {
//   const suffix = this.dataset.sizing || '';
//   document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
// }

// inputs.forEach(input => input.addEventListener('change', handleUpdate));
// inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
