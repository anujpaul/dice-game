var player1 =prompt("Enter player 1 name:");
var player2 =prompt("Enter player 2 name:");

$("h1").css("color", "green");

$(".players .player1").text(player1);
$(".players .player2").text(player2);


document.querySelector(".roll-btn").addEventListener("click", function () {
    var num1 = Math.floor(Math.random() * 6 +1);
    var num2 = Math.floor(Math.random() *6 +1);
    document.querySelector(".dice .player1").setAttribute("src", "./DicePics/side_"+num1+".png");
    document.querySelector(".dice .player2").setAttribute("src","./DicePics/side_"+num2+".png");

    if(num1 > num2){
        document.querySelector("h1").textContent = player1 +" won";
    }
    else
    if (num1 < num2){
        document.querySelector("h1").textContent = player2 +" won";
    }
    else{
        document.querySelector("h1").textContent ="Game draw.";
    }
});

$(".reset-btn").on("click", function () {
    $("h1").text("Welcome back to dice game.")
    $(".dice .player1").attr("src","./DicePics/side_1.png")
    $(".dice .player2").attr("src","./DicePics/side_1.png")
})



