document.querySelector("span#off").addEventListener("click",function(){
  makesound("off");
});
document.querySelector("span#on").addEventListener("click",function(){
  makesound("on");
});
document.querySelector(".mysound").loop=true;

var audio = new Audio("sounds/sound.mp3");
function makesound(status){
  if (status==="off"){
    on.style.display="block";
    off.style.display="none";
    document.querySelector(".sound-icon").style.color="#08fdd8"
    play();
  } if(status==="on") {
    on.style.display="none";
    off.style.display="block";
    document.querySelector(".sound-icon").style.color="#f50057"
    pause();
  }
  function play(){
    audio.play();
  }
  function pause(){
    audio.pause();
  }
}
// Play music above
document.querySelector(".fa-bars").addEventListener("click",function(){
  asidebar("open");
});
document.querySelector(".fa-xmark").addEventListener("click",function(){
  asidebar("close");
});

function asidebar(status){
  if(status==="open"){
    document.querySelector(".fa-bars").style.display="none";
    document.querySelector(".fa-xmark").style.display="block";
    document.querySelector(".aside").classList.add("show-nav");
  }
  if(status==="close"){
    document.querySelector(".fa-bars").style.display="block";
    document.querySelector(".fa-xmark").style.display="none";
    document.querySelector(".aside").classList.remove("show-nav");

  }
}

// NOTE: ------------------------------------------------------------------


$(document).ready(function(){
  if(!$("#myCanvas").tagcanvas({
    textColour: "#08fdd8",
    outlineColour: "transparent",
    reverse: true,
    depth:0.8,
    maxSpeed: 0.05,
    weight: true,
  },"tags")){
    // if something went wrong hide the canvas container
    $("#myCanvasContainer");
  }
})
