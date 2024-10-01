<<<<<<< Updated upstream
$(document).ready(function() {
    // Functionality for play buttons (audio/video)
    $('.play-btn').on('click', function() {
        const item = $(this).closest('.meditation-item');
        const type = item.data('type');
        const url = item.data('url');
=======
// Countdown Timer
let countdownTimer;
let timeLeft = 30; // 30 seconds
>>>>>>> Stashed changes

function updateTimerDisplay() {
    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
    const seconds = String(timeLeft % 60).padStart(2, '0');
    document.getElementById('timeDisplay').textContent = `${minutes}:${seconds}`;

    // Calculate the progress and update the circle
    const progressDegree = (1 - timeLeft / 1800) * 360; // Calculate degree of completion
    document.querySelector('#circleProgress').style.background = `conic-gradient(var(--cokelatTua) ${progressDegree}deg, var(--cokelatMuda) ${progressDegree}deg)`;
}


document.getElementById('startButton').addEventListener('click', function () {
    clearInterval(countdownTimer);
    timeLeft = 30; // Reset time to 30 seconds
    updateTimerDisplay();

    countdownTimer = setInterval(function () {
        if (timeLeft > 0) {
            timeLeft--;
            updateTimerDisplay();
        } else {
            clearInterval(countdownTimer);
            alert("Waktu habis! Silakan bernafas dengan tenang.");
        }
<<<<<<< Updated upstream

        $('#player-container').fadeIn();
    });

    // Close button functionality
    $('#close-player').on('click', function() {
        $('#player-container').fadeOut();
        $('#audio-element')[0].pause();
        $('#video-element')[0].pause();
    });

    // Prevent multiple audios from playing simultaneously
    let currentAudio = null;
    $('.meditation-audio').on('play', function() {
        if (currentAudio && currentAudio !== this) {
            currentAudio.pause(); // Pause currently playing audio
            currentAudio.currentTime = 0; // Optional: reset to start
        }
        currentAudio = this; // Update current playing audio
    });

    $('.meditation-audio').on('ended', function() {
        currentAudio = null; // Reset when audio ends
    });

    // Countdown Timer
    let countdownTimer;
    let timeLeft = 60; // Set initial time in seconds

    // Function to update timer display
    function updateTimerDisplay() {
        const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
        const seconds = String(timeLeft % 60).padStart(2, '0');
        $('#timeDisplay').text(`${minutes}:${seconds}`);
    }

    // Start button event handler
    $('#startButton').on('click', function() {
        clearInterval(countdownTimer); // Clear previous timer
        timeLeft = 60; // Reset time to 60 seconds
        updateTimerDisplay(); // Initial display update

        countdownTimer = setInterval(function() {
            if (timeLeft > 0) {
                timeLeft--;
                updateTimerDisplay(); // Update the display with new time
            } else {
                clearInterval(countdownTimer); // Stop timer when time's up
                alert("Waktu habis! Silakan bernafas dengan tenang.");
            }
        }, 1000); // Update every second
    });

    // Reset button event handler
    $('#resetButton').on('click', function() {
        clearInterval(countdownTimer); // Stop the timer
        timeLeft = 60; // Reset time to 60 seconds
        updateTimerDisplay(); // Update the display
    });
=======
    }, 1000);
>>>>>>> Stashed changes
});

document.getElementById('resetButton').addEventListener('click', function () {
    clearInterval(countdownTimer);
    timeLeft = 30; // Reset time
    updateTimerDisplay();
});

// Initial display
updateTimerDisplay();
