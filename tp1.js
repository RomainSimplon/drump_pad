let keys = document.querySelectorAll(".key");
let audios = document.querySelectorAll("audio");
 


window.addEventListener('keydown', function (event) {
    if (event.repeat) {
        return false
    }

    audios.forEach(function (audio){
        if (event.keyCode == audio.getAttribute("data-key")) {
            audio.play()
        }
    })
    keys.forEach(function(key){
        if (event.keyCode == key.getAttribute("data-key")) {
            key.classList.add('playing', "sound")
        }
    })
})

window.addEventListener('keyup', function (event) {
    if (event.repeat) {
        return false
    }

    audios.forEach(function (audio){
        if (event.keyCode == audio.getAttribute("data-key")) {
            audio.pause()
            audio.currentTime = 0
        }
    })
    keys.forEach(function(key){
        if (event.keyCode == key.getAttribute("data-key")) {
            key.classList.remove('playing', "sound")
        }
    })
})

// let keys = document.querySelectorAll('.key');

// document.addEventListener('keydown', playSound);

// function playSound(a) {
//     let audio = document.querySelector(`audio[data-key="${a.keyCode}"]`);
//      let keys = document.querySelector(`div[data-key="${a.keyCode}"]`);

//     audio.play();
//     keys.classList.add('playing');
// }


// code en foreach



/* code en for 

let sounds = document.querySelectorAll("audio");
let key = document.querySelectorAll(".key");
console.log("cl key =" + key);

//On boucle sur les balises audios
for (let i = 0; i < sounds.length; i++) {

    // On récupère toute les key des audios 
    let keysound = sounds[i].getAttribute("data-key");

    console.log("cl de sound =" + keysound);

    window.addEventListener("keydown", function(event){
        // Si l'input ce repeate on return false
        if (event.repeat){
            return(false);
        }
        // On compare la valeur de notre key avec l'input appuyer
        if (keysound == event.keyCode){
            console.log("cl de event.keyCode[i] =" + event.keyCode);
        //Si la condition est respecté, on ajoute les classes a key
            key[i].classList.add('playing','sound');
            sounds[i].play();
        } 

    })

    window.addEventListener("keyup", function(event){

        // On compare la valeur de notre key avec l'input appuyer
        if (keysound == event.keyCode){
            console.log("eventkeyCode[i] =" + event.keyCode);
        //On retire les classes ajouté a key
            key[i].classList.remove('playing','sound');
            sounds[i].pause()
            sounds[i].currentTime = 0

        } 

    })
}
// FIN DE BOUCLE


*/



