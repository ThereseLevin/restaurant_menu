/* --- JAVASCRIPT FOR CHANGING COLORS AND IMAGES --- */



window.addEventListener("load", startUp, false);

function startUp() {
    bColor = document.querySelector("#backg-color");
    hColor = document.querySelector("#h1-color");
    uColor = document.querySelector("#u-color");
    mColor = document.querySelector("#m-color");
    hFont = document.querySelector("#Helvetica");
    aFont = document.querySelector("#h1-color");
    tFont = document.querySelector("#u-color");
    gFont = document.querySelector("#m-color");

    //lyssnar efter event, kör function
    bColor.addEventListener("input", updateFirst, false);
    bColor.addEventListener("change", updateAll, false);

    hColor.addEventListener("input", updateFirst2, false);
    hColor.addEventListener("change", updateAll2, false);

    uColor.addEventListener("input", updateFirst3, false);
    uColor.addEventListener("change", updateAll3, false);

    mColor.addEventListener("input", updateFirst4, false);
    mColor.addEventListener("change", updateAll4, false);

    hFont.addEventListener("click", updateFirst5, false);
    hFont.addEventListener("change", updateAll5, false);

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

function updateFirst5(event) {
  let font = document.querySelector("h3");
  if (font) {
    font.style.fontFamily = event.target.value;
  }
}

function updateAll5(event) {
  document.querySelectorAll(".item").forEach(function(item) {
    item.style.color = event.target.value;
  });
}



document.querySelector("#clickID").addEventListener('click', function(event) {

  //Till menyalternativ
  let formData = document.querySelector(".m-text").value;
  document.querySelector("#m-1").innerHTML = formData;

   let formData2 = document.querySelector(".m-text-2").value;
   document.querySelector("#m-2").innerHTML = formData2;

   let formData3 = document.querySelector(".m-text-3").value;
   document.querySelector("#m-3").innerHTML = formData3;

   let formData4 = document.querySelector(".m-text-4").value;
   document.querySelector("#m-4").innerHTML = formData4;

   let formData5 = document.querySelector(".m-text-5").value;
   document.querySelector("#m-5").innerHTML = formData5;

   let formData6 = document.querySelector(".m-text-6").value;
   document.querySelector("#m-6").innerHTML = formData6;

   let formData7 = document.querySelector(".m-text-7").value;
   document.querySelector("#m-7").innerHTML = formData7;

   //Till Meny rubrik
  let formData8 = document.querySelector("#heading-text").value;
  document.querySelector("h3").innerHTML = formData8;

  //Till underrubrik
  let formData9 = document.querySelector("#under-heading-text").value;
  document.querySelector("small").innerHTML = formData9;

  document.getElementById("clickID").addEventListener("click", function(event){
      event.preventDefault()
  });
  

} , false);

function getScreenshot() {
  html2canvas(document.body,{
    onrendered: function(canvas) {
      $('.box-1').html("");
      $('.box-1').append(canvas);
    }
  });
}

html2canvas(document.querySelector("#capture")).then(canvas => {
    document.body.appendChild(canvas)
});







//KOMMENTARER
// const inputs = document.querySelector('#h1-color');

// function handleUpdate() {
//   const suffix = this.dataset.sizing || '';
//   document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
// }

// inputs.forEach(input => input.addEventListener('change', handleUpdate));
// inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
