
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHtml = this.innerText;
     toplay(buttonInnerHtml);
     buttonAnimation(buttonInnerHtml);


  });
}

document.addEventListener("keypress", function(event){
    toplay(event.key);
    buttonAnimation(event.key);
});

function toplay(key){
  switch (key) {
    case "w":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case "a":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "s":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "d":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case "l":
      var kickbass = new Audio('sounds/kick-bass.mp3');
      kickbass.play();
      break;
    default:
      alert("plzz press a valid key");

  }
}

function buttonAnimation(currentkey){
  var temp=document.querySelector("."+currentkey);
  temp.classList.add("pressed");
  setTimeout(function(){
    temp.classList.remove("pressed");
  },100);
}
