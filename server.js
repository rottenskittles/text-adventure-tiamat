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


document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByClassName("gameBtn");
  for (button of buttons) {
    button.addEventListener("click", function (e) {

      let btnVal = e.target.value;
      console.log(e.target)
      switch (btnVal) {
        case "tavernkeep":
          console.log("tavernkeep")
          document.getElementById("start").classList.add("hidden");
          document.getElementById("tvkdialogue").classList.remove("hidden");
          break;

      }
    })
  }

})



