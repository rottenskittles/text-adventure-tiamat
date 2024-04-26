// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   //let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   //for (i = 0; i < dots.length; i++) {
//   //  dots[i].className = dots[i].className.replace(" active", "");
//  // }
//   slides[slideIndex-1].style.display = "block";
//   //dots[slideIndex-1].className += " active";
// }

function toggleVis(elementID){
  document.getElementById(elementID).classList.toggle("hidden");
}


document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByClassName("gameBtn");
  for (button of buttons) {
    button.addEventListener("click", function (e) {

      let btnVal = e.target.value;
      console.log(e.target)
      switch (btnVal) {
        case "introcont":
          console.log("introcont")
          // document.getElementById("start").classList.add("hidden");
          toggleVis('start');
          // document.getElementById("gameplay").classList.remove("hidden");
          toggleVis('gameplay');
          break;

      }
    })
  }

})

document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByClassName("gameBtn");
  for (button of buttons) {
    button.addEventListener("click", function (e) {

      let btnVal = e.target.value;
      console.log(e.target)
      switch (btnVal) {
        case "tavernkeep":
          console.log("tavernkeep")
          // document.getElementById("start").classList.add("hidden");
          toggleVis('gameplay');
          // document.getElementById("tvkdialogue").classList.remove("hidden");
          toggleVis('tvkdialogue');
          break;

      }
    })
  }

})

document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByClassName("gameBtn");
  for (button of buttons) {
    button.addEventListener("click", function (dif) {

      let btnVal = dif.target.value;
      console.log(dif.target)
      switch (btnVal) {
        case "cards":
          console.log("cards")
          toggleVis('gameplay');
          toggleVis('cardtable');
          break;

      }
    })
  }

})

document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByClassName("gameBtn");
  for (button of buttons) {
    button.addEventListener("click", function (dif) {

      let btnVal = dif.target.value;
      console.log(dif.target)
      switch (btnVal) {
        case "backcards":
          console.log("backcards")
          toggleVis('cardtable');
          toggleVis('gameplay');
          break;

      }
    })
  }

})

document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByClassName("gameBtn");
  for (button of buttons) {
    button.addEventListener("click", function (dif) {

      let btnVal = dif.target.value;
      console.log(dif.target)
      switch (btnVal) {
        case "backboast":
          console.log("backboast")
          toggleVis('boasttable');
          toggleVis('gameplay');
          break;

      }
    })
  }

})

document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByClassName("gameBtn");
  for (button of buttons) {
    button.addEventListener("click", function (dif) {

      let btnVal = dif.target.value;
      console.log(dif.target)
      switch (btnVal) {
        case "boasters":
          console.log("boasters")
          toggleVis('gameplay');
          toggleVis('boasttable');
          break;

      }
    })
  }

})

document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByClassName("gameBtn");
  for (button of buttons) {
    button.addEventListener("click", function (dif) {

      let btnVal = dif.target.value;
      console.log(dif.target)
      switch (btnVal) {
        case "backtavern":
          console.log("backtavern")
          toggleVis('tvkdialogue');
          toggleVis('gameplay');
          break;

      }
    })
  }

})

document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByClassName("gameBtn");
  for (button of buttons) {
    button.addEventListener("click", function (dif) {

      let btnVal = dif.target.value;
      console.log(dif.target)
      switch (btnVal) {
        case "teamup":
          console.log("teamup")
          toggleVis('tvkdialogue');
          toggleVis('team');
          break;

      }
    })
  }

})

document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByClassName("gameBtn");
  for (button of buttons) {
    button.addEventListener("click", function (dif) {

      let btnVal = dif.target.value;
      console.log(dif.target)
      switch (btnVal) {
        case "backteamask":
          console.log("backteamask")
          toggleVis('team');
          toggleVis('tvkdialogue');
          break;

      }
    })
  }

})

document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByClassName("gameBtn");
  for (button of buttons) {
    button.addEventListener("click", function (dif) {

      let btnVal = dif.target.value;
      console.log(dif.target)
      switch (btnVal) {
        case "goodreason":
          console.log("goodreason")
          toggleVis('team');
          toggleVis('teamyes');
          break;

      }
    })
  }

})

document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByClassName("gameBtn");
  for (button of buttons) {
    button.addEventListener("click", function (dif) {

      let btnVal = dif.target.value;
      console.log(dif.target)
      switch (btnVal) {
        case "yesteam":
          console.log("yesteam")
          toggleVis('teamyes');
          toggleVis('gameplay');
          break;

      }
    })
  }

})

document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByClassName("gameBtn");
  for (button of buttons) {
    button.addEventListener("click", function (dif) {

      let btnVal = dif.target.value;
      console.log(dif.target)
      switch (btnVal) {
        case "badreason":
          console.log("badreason")
          toggleVis('team');
          toggleVis('teamno');
          break;

      }
    })
  }

})

document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByClassName("gameBtn");
  for (button of buttons) {
    button.addEventListener("click", function (dif) {

      let btnVal = dif.target.value;
      console.log(dif.target)
      switch (btnVal) {
        case "noteam":
          console.log("noteam")
          toggleVis('teamno');
          toggleVis('deathorreset');
          break;

      }
    })
  }

})

document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByClassName("gameBtn");
  for (button of buttons) {
    button.addEventListener("click", function (dif) {

      let btnVal = dif.target.value;
      console.log(dif.target)
      switch (btnVal) {
        case "tvkreset":
          console.log("tvkreset")
          toggleVis('deathorreset');
          toggleVis('gameplay');
          break;

      }
    })
  }

})