document.getElementById('play-music').addEventListener('click', function() {
    document.getElementById('pause-music').style.display = 'block';
    document.getElementById('play-music').style.display = 'none';

})

document.getElementById('pause-music').addEventListener('click', function() {
    document.getElementById('play-music').style.display = 'block';
    document.getElementById('pause-music').style.display = 'none';

})

document.getElementById('volume-mute').addEventListener('click', function() {
    document.getElementById('volume-high').style.display = 'block';
    document.getElementById('volume-mute').style.display = 'none';

})

document.getElementById('volume-high').addEventListener('click', function() {
    document.getElementById('volume-mute').style.display = 'block';
    document.getElementById('volume-high').style.display = 'none';

})