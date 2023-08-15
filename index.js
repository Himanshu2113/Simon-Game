$("h1").addClass("heading");


var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level=1;
function nextSequence() {
    
    userClickedPattern=[];
    var randomNumber = Math.floor(4 * Math.random());
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("h2").text("Level "+ level);
    $("." + randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    userClickedPattern=[];
}

$("button").mousedown(function () {
    var userChosenColour = $(this).attr("class");
    userClickedPattern.push(userChosenColour);
    animatePress(userChosenColour);
    playSound(userChosenColour);
    checkAnswers(userClickedPattern.length-1);
});

function checkAnswers(currentLevel) {
   if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
    if (userClickedPattern.length === gamePattern.length ){       
         setTimeout(function () {
            nextSequence();
          }, 600);
        level++;
        }
    }
    else{
        startOver();
    }
}

function startOver(){
    $("h2").text("Game Over,Press Any Key To Restart The Game");
    level=1;
    gamePattern=[];
    userClickedPattern=[];
//    playSound(wrong);
   var audio = new Audio("sounds/wrong.mp3");
    audio.play();
}


function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $("." + currentColour).fadeOut(100).fadeIn(100);
}

$(document).keypress(function(){
    nextSequence();
});




