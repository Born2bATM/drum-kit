for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    makeSounds(this.innerHTML);
    btnAnimation(this.innerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  makeSounds(event.key);
  btnAnimation(event.key);
});

function makeSounds(value) {
  switch (value) {
    case "w":
      new Audio("sounds/crash.mp3").play();
      break;
    case "a":
      new Audio("sounds/kick-bass.mp3").play();
      break;
    case "s":
      new Audio("sounds/snare.mp3").play();
      break;
    case "d":
      new Audio("sounds/tom-1.mp3").play();
      break;
    case "j":
      new Audio("sounds/tom-2.mp3").play();
      break;
    case "k":
      new Audio("sounds/tom-3.mp3").play();
      break;
    case "l":
      new Audio("sounds/tom-4.mp3").play();
      break;
    default:
      console.log(value);
      break;
  }
}

function btnAnimation(value) {
  var classToAdd = document.querySelector("." + value);
  classToAdd.classList.add("pressed");
  setTimeout(function () {
    classToAdd.classList.remove("pressed");
  }, 100);
}
