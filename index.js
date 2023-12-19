document.getElementById('audio-Q').addEventListener('click', function () {
    var audio =document.getElementById('Q');
    audio.play();
    document.getElementById('display').innerText = "Heater-1";
});

document.getElementById('audio-W').addEventListener('click', function () {
    var audio = document.getElementById('W');
    audio.play();
    document.getElementById('display').innerText = "Heater-2";
});

document.getElementById('audio-E').addEventListener('click', function () {
    var audio =document.getElementById('E');
    audio.play();
    document.getElementById('display').innerText = "Heater-3";
});

document.getElementById('audio-A').addEventListener('click', function () {
    var audio =document.getElementById('A');
    audio.play();
    document.getElementById('display').innerText = "Heater-4";
});

document.getElementById('audio-S').addEventListener('click', function () {
    var audio = document.getElementById('S');
    audio.play();
    document.getElementById('display').innerText = "Clap";
});

document.getElementById('audio-D').addEventListener('click', function () {
    var audio =document.getElementById('D');
    audio.play();
    document.getElementById('display').innerText = "Open-HH";
});

document.getElementById('audio-Z').addEventListener('click', function () {
    var audio = document.getElementById('Z');
    audio.play();
    document.getElementById('display').innerText = "Kick-n'-Hat";
});

document.getElementById('audio-X').addEventListener('click', function () {
    var audio = document.getElementById('X');
    audio.play();
    document.getElementById('display').innerText = "Kick";
});

document.getElementById('audio-C').addEventListener('click', function () {
    var audio =document.getElementById('C');
    audio.play();
    document.getElementById('display').innerText = "Closed-HH";
});

document.addEventListener('keydown', function(event) {
    var keyPressed = event.key.toUpperCase();
    var drumPadElement = document.getElementById('audio-' + keyPressed);
    if (drumPadElement) {
        drumPadElement.click();
    }
});

function handleVolumeChange(){
    let display=document.getElementById('display')
    let volumeRange=document.getElementById('volumeRange')
    let volume=parseFloat(volumeRange.value).toFixed(2);
    display.innerText='Volume' + volume

}
document.getElementById('volumeRange').addEventListener('input',handleVolumeChange)


