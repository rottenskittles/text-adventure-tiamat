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
          toggleVis('start');
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
          toggleVis('gameplay');
          toggleVis('tvkdialogue');
          break;

        case "cards":
          console.log("cards")
          toggleVis('gameplay');
          toggleVis('cardtable');
          break;
        
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
        case "backboast":
          console.log("backboast")
          toggleVis('boasttable');
          toggleVis('gameplay');
          break;

        case "boastsit":
          console.log("boastsit")
          toggleVis('boasttable');
          toggleVis('sitandlisten');
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

        case "buytavern":
          console.log("buytavern")
          toggleVis('tvkdialogue');
          toggleVis('buytav');
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
        case "item1":
          console.log("item1")
          toggleVis('buytav');
          toggleVis('item1details');
          break;

        case "buyitem1":
          console.log("buyitem1")
          toggleVis('item1details');
          toggleVis('item1confirm');
          break;
          
        case "item1yes":
          console.log("item1yes")
          toggleVis('item1confirm');
          toggleVis('buytav');
          break;

        case "item1no":
          console.log("item1no")
          toggleVis('item1confirm');
          toggleVis('item1details');
          break;
          
        case "backitem1":
          console.log("backitem1")
          toggleVis('item1details');
          toggleVis('buytav');
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
        case "item2":
          console.log("item2")
          toggleVis('buytav');
          toggleVis('item2details');
          break;
        case "buyitem2":
          console.log("buyitem2")
          toggleVis('item2details');
          toggleVis('item2confirm');
          break;
      
          case "item2yes":
            console.log("item2yes")
            toggleVis('item2confirm');
            toggleVis('buytav');
            break;
      
          case "item2no":
            console.log("item2no")
            toggleVis('item2confirm');
            toggleVis('item2details');
            break;
          case "backitem2":
            console.log("backitem2")
            toggleVis('item2details');
            toggleVis('buytav');
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
        case "item3":
          console.log("item3")
          toggleVis('buytav');
          toggleVis('item3details');
          break;
          
          case "buyitem3":
            console.log("buyitem3")
            toggleVis('item3details');
            toggleVis('item3confirm');
            break;
      
        case "item3yes":
          console.log("item3yes")
          toggleVis('item3confirm');
          toggleVis('buytav');
          break;

        case "item3no":
          console.log("item3no")
          toggleVis('item3confirm');
          toggleVis('item3details');
          break;

        case "backitem3":
          console.log("backitem3")
          toggleVis('item3details');
          toggleVis('buytav');
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
        case "potion1":
          console.log("potion1")
          toggleVis('buytav');
          toggleVis('potion1details');
          break;

        case "buypotion1":
          console.log("buypotion1")
          toggleVis('potion1details');
          toggleVis('potion1confirm');
          break;

        case "potion1yes":
          console.log("potion1yes")
          toggleVis('potion1confirm');
          toggleVis('buytav');
          break;     
          
        case "potion1no":
          console.log("potion1no")
          toggleVis('potion1confirm');
          toggleVis('potion1details');
          break;          

        case "backpotion1":
          console.log("backpotion1")
          toggleVis('potion1details');
          toggleVis('buytav');
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
        case "potion2":
          console.log("potion2")
          toggleVis('buytav');
          toggleVis('potion2details');
          break;

        case "buypotion2":
          console.log("buypotion2")
          toggleVis('potion2details');
          toggleVis('potion2confirm');
          break;

        case "potion2yes":
          console.log("potion2yes")
          toggleVis('potion2confirm');
          toggleVis('buytav');
          break;

        case "potion2no":
          console.log("potion2no")
          toggleVis('potion2confirm');
          toggleVis('potion2details');
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
        case "backpotion2":
          console.log("backpotion2")
          toggleVis('potion2details');
          toggleVis('buytav');
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
        case "potion3":
          console.log("potion3")
          toggleVis('buytav');
          toggleVis('potion3details');
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
        case "buypotion3":
          console.log("buypotion3")
          toggleVis('potion3details');
          toggleVis('potion3confirm');
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
        case "potion3yes":
          console.log("potion3yes")
          toggleVis('potion3confirm');
          toggleVis('buytav');
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
        case "potion3no":
          console.log("potion3no")
          toggleVis('potion3confirm');
          toggleVis('potion3details');
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
        case "backpotion3":
          console.log("backpotion3")
          toggleVis('potion3details');
          toggleVis('buytav');
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
        case "backtavshop":
          console.log("backtavshop")
          toggleVis('buytav');
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
document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByClassName("gameBtn");
  for (button of buttons) {
    button.addEventListener("click", function (dif) {

      let btnVal = dif.target.value;
      console.log(dif.target)
      switch (btnVal) {
        case "cardplay":
          console.log("cardplay")
          toggleVis('cardtable');
          toggleVis('cardplayending');
          break;

          case "cardreset":
            console.log("cardreset")
            toggleVis('cardplayending');
            toggleVis('gameplay');
            break;

          case "backcards":
            console.log("backcards")
            toggleVis('cardtable');
            toggleVis('gameplay');
            break;
      }
    })
  }

})
