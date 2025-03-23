// Global variables needed for pulsing "now playing..." text
var play_text_fade_percent = 0;
var play_text_fade_percent_inc = false;
var play_text_fade_percent_max = 100;
var play_text_fade_percent_min = 40;
var play_text_fade_percent_step = 1;

function toggle_play() {
    var player      = document.getElementById("player");
    var play_button = document.getElementById("playpause");
    var play_text   = document.getElementById("play_indicator");

    if (player.paused) {
        player.play();
        play_button.src = "./resources/pause.png";
        play_text_fade_percent = 100;
    }
    else {
        player.pause();
        play_button.src = "./resources/play.png";
        play_text_fade_percent = 0
        play_text.style.opacity = "0%";
        
    }
}

function update_vol() {
    var volume = document.getElementById("volume");
    var player = document.getElementById("player");

    player.volume = (parseInt(volume.value)/100);
}

function pulse_play_text() {
    // Condition for when the text should be hidden
    if (play_text_fade_percent == 0) {
        return;
    }

    // Update fade percent
    if (play_text_fade_percent_inc) {
        play_text_fade_percent += play_text_fade_percent_step;
    }
    else {
        play_text_fade_percent -= play_text_fade_percent_step;
    }
    if (play_text_fade_percent <= play_text_fade_percent_min) {
        play_text_fade_percent_inc = true;
    }
    else if (play_text_fade_percent >= play_text_fade_percent_max) {
        play_text_fade_percent_inc = false;
    }

    // Set fade percent to element
    var play_text = document.getElementById("play_indicator");
    play_text.style.opacity = play_text_fade_percent+"%";
}

$(document).ready(function () {
    $("#volume").on("input", update_vol);

    // Set the interval to pulse the "now playing..." text when the stream is playing
    setInterval(pulse_play_text, 40);

    // Correct the player position from the "now playing..." text
    var player_div = document.getElementById('audio-player'); 
    var play_text  = document.getElementById('play_indicator');

    player_div.style.paddingLeft = play_text.offsetWidth+"px"; 
});
