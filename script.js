function toggleAudio1() {
    var audio = document.getElementById('welcomeaudio');
    if (audio.paused) {
        if (audio.ended) {  // Check if the audio has ended
            audio.currentTime = 0;  // Reset the audio to the start
        }
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0;  // Optionally, reset the audio to the start when paused
    }
}

function toggleAudio2() {
    var audio = document.getElementById('vaelgensti');
    if (audio.paused) {
        if (audio.ended) {  // Check if the audio has ended
            audio.currentTime = 0;  // Reset the audio to the start
        }
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0;  // Optionally, reset the audio to the start when paused
    }
}

function toggleAudio3() {
    var audio = document.getElementById('stjerner');
    if (audio.paused) {
        if (audio.ended) {  // Check if the audio has ended
            audio.currentTime = 0;  // Reset the audio to the start
        }
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0;  // Optionally, reset the audio to the start when paused
    }
}

function toggleAudio4() {
    var audio = document.getElementById('objekterne');
    if (audio.paused) {
        if (audio.ended) {  // Check if the audio has ended
            audio.currentTime = 0;  // Reset the audio to the start
        }
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0;  // Optionally, reset the audio to the start when paused
    }
}

function toggleAudio5() {
    var audio = document.getElementById('stien');
    if (audio.paused) {
        if (audio.ended) {  // Check if the audio has ended
            audio.currentTime = 0;  // Reset the audio to the start
        }
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0;  // Optionally, reset the audio to the start when paused
    }
}

function toggleAudio6() {
    var audio = document.getElementById('scanqrkoden');
    if (audio.paused) {
        if (audio.ended) {  // Check if the audio has ended
            audio.currentTime = 0;  // Reset the audio to the start
        }
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0;  // Optionally, reset the audio to the start when paused
    }
}

function toggleAudio7() {
    var audio = document.getElementById('naestenimaal');
    if (audio.paused) {
        if (audio.ended) {  // Check if the audio has ended
            audio.currentTime = 0;  // Reset the audio to the start
        }
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0;  // Optionally, reset the audio to the start when paused
    }
}