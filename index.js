var btn_count=document.querySelectorAll(".drum").length;

for(var i=0;i<btn_count;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){

        var drum_no = this.innerHTML;
        drum_beats(drum_no);
        animation(drum_no);
    });
}

document.addEventListener("keypress",function(event){
    var drum_no2=(event.key);
    drum_beats(drum_no2);
    animation(drum_no2);

});

function drum_beats(name){

    switch (name) {
        case "w":
            var tom_1 = new Audio("sounds/tom-1.mp3"); // buffers automatically when created
            tom_1.play();
            break;
        case "a":
            var tom_2 = new Audio("sounds/tom-2.mp3"); // buffers automatically when created
            tom_2.play();
            break;
        case "s":
            var tom_3 = new Audio("sounds/tom-3.mp3"); // buffers automatically when created
            tom_3.play();
            break;
        case "d":
            var tom_4 = new Audio("sounds/tom-4.mp3"); // buffers automatically when created
            tom_4.play();
            break;
        case "j":
            var crash = new Audio("sounds/crash.mp3"); // buffers automatically when created
            crash.play();
            break;
        case "k":
            var kick_bass = new Audio("sounds/kick-bass.mp3"); // buffers automatically when created
            kick_bass.play();
            break;
        case "l":
            var snare = new Audio("sounds/snare.mp3"); // buffers automatically when created
            snare.play();
            break;
    
        default:console.log(drum_no);
    } 

}

function animation(press_key){
    var active_btn=document.querySelector("."+press_key);
    active_btn.classList.add("pressed");

    setTimeout(function(){
        active_btn.classList.remove("pressed");
    },100);
}

    








///////////////OR////////////////////


// for(var i=0;i<document.querySelectorAll(".drum").length;i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click",function(){
//         alert("hello i got clicked");
//     });
// }