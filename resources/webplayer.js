function toggle_play() {
    var player = document.getElementById("player");
    var play_button = document.getElementById("playpause");

    if (player.paused) {
        player.play();
        play_button.textContent = "\u{23f8}";
    }
    else {
        player.pause();
        play_button.textContent = "\u{23f5}";
    }
}

function update_vol() {
    var volume = document.getElementById("volume");
    var player = document.getElementById("player");

    player.volume = (parseInt(volume.value)/100);
}

$(document).ready(function () {
    $("#volume").on("input", update_vol);
});
