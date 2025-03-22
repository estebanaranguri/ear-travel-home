/* MUSIC PLAYER ICONS */
document.getElementById('play-music').addEventListener('click', function() {
    document.getElementById('pause-music').style.display = 'block';
    document.getElementById('play-music').style.display = 'none';

})

document.getElementById('pause-music').addEventListener('click', function() {
    document.getElementById('play-music').style.display = 'block';
    document.getElementById('pause-music').style.display = 'none';
    
})

/* MUTE-UNMUTED AUDIO */

document.getElementById('volume-mute').addEventListener('click', function() {
    document.getElementById('volume-high').style.display = 'block';
    document.getElementById('volume-mute').style.display = 'none';
    document.getElementById("audio-showcase").muted = false;

})

document.getElementById('volume-high').addEventListener('click', function() {
    document.getElementById('volume-mute').style.display = 'block';
    document.getElementById('volume-high').style.display = 'none';
    document.getElementById("audio-showcase").muted = true;
})

/* PLAY-PAUSE AUDIO */
var x = document.getElementById("audio-showcase");

function playAudio() {
  x.play();
}

function pauseAudio() {
  x.pause();
}
