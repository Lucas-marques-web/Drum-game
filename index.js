

// detecting click 
let drumLength = document.querySelectorAll(".drum").length;


for (let i = 0; i < drumLength; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handclick);
}

function handclick() {
    console.log(this)
    // this parameter 
    sfunc(this.innerHTML)
    animatedBtn(this.innerHTML)
}


// anonymous function  detecting keyboard press
document.addEventListener("keydown", function (e) {
    console.log(e);
   sfunc(e.key)
   animatedBtn(e.key)
});


function animatedBtn (currentKey){
let  activeButton = document.querySelector('.'+currentKey);
activeButton.classList.add('pressed')
console.log(activeButton);

setTimeout(function (){
    activeButton.classList.remove('pressed');
},100)


}



function sfunc (param){
    switch (param) {
        case "w":
            const audio1 = new Audio(`sounds/crash.mp3`);
            audio1.play();
            break;
        case "a":
            const audio2 = new Audio(`sounds/kick-bass.mp3`);
            audio2.play();
            break
        case "s":
            const audio3 = new Audio(`sounds/tom-2.mp3`);
            audio3.play();
            break
        case "d":
            const audio4 = new Audio(`sounds/tom-4.mp3`);
            audio4.play();
            break
        case "j":
            const audio5 = new Audio(`sounds/tom-3.mp3`);
            audio5.play();
            break
        case "k":
            const audio6 = new Audio(`sounds/tom-1.mp3`);
            audio6.play();
            break
        case "l":
            const audio7 = new Audio(`sounds/snare.mp3`);
            audio7.play();
            break
        default:
            console.log(this.innerHTML)
            break;
    }
}




