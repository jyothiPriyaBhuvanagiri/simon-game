let buttonColors=["red", "blue","green","yellow"];

let gamePattern=[];

let userClickedPattern=[];


$(".btn").click(function(){
    let userChosenColor=$(this).attr("id");
    userClickedPattern.push(userChosenColor);
    console.log(userChosenColor);

});


function nextSequence(){
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor=buttonColors[randomNumber]
    gamePattern.push(randomChosenColor);
    $("#"+  randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor)


    }

    function playSound(name){
        let audio = new Audio("sounds/" + name + ".mp3");
        audio.play();
    }

    function animationPress(currentColor){
    $("#"+currentColor).addClass("pressed")
        setTimeout(function () {
            $("#" + currentColor).removeClass("pressed");
        },100);
    }

