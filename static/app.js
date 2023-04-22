//kadgod netko klikne button, ucitaj i prikazi random
//kadgod se ucita stranica, ucitaj i prikazi random
var myRandom = null

function getRandom() {
     $.ajax({
        url: "/random",
        cache: false
    }).done(function( msg ) {
        console.log("123", msg)
        myRandom = parseInt(msg)
       // $("#display").html(msg);
//        if (msg === "enabled"){
//            $("#myButton0").prop('disabled', false);
//            $("#myButton1").prop('disabled', true);
//        } else if (msg === "disabled") {
//            $("#myButton0").prop('disabled', true);
//            $("#myButton1").prop('disabled', false);
//        }
    });
}

function changeBackgroundImage() {
  var backgroundImageContainer = document.getElementById("background-image-container");
  backgroundImageContainer.style.backgroundImage = "url('scaryC.jpg')";
}

function buttonClicker(index) {
    console.log("buttonC", index, myRandom)
    if (index === myRandom) {
        disabledTeeth()
        changeBackgroundImage()
        $("#display").html("<b>kraj igre</b>")

    } else {
        $("#myButton" + index).prop('disabled', true)
    }
}

function disabledTeeth() {
    for (i = 0; i < 14; i++) {
        $("#myButton" + i).prop('disabled', true)
    }
}

$(document).ready(function(){
    getRandom()
    $("#myButton0").click(getRandom)
    $("#myButton1").click(getRandom)
})

