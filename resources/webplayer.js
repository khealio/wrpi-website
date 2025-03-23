function toggle_play() {
    var player = document.getElementById('player');
    var play_button = document.getElementById('playpause');

    if (player.paused) {
        player.play();
        play_button.textContent = "\u{23f8}";
    }
    else {
        player.pause();
        play_button.textContent = "\u{23f5}";
    }
}
