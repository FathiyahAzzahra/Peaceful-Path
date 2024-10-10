// Countdown Timer
let countdownTimer;
let timeLeft = 0; // 0 seconds

// Create audio objects for the sound
const timerSound = new Audio('../assets/dina/Breatheinout.mp3');

// Function to update the timer display
function updateTimerDisplay() {
    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
    const seconds = String(timeLeft % 60).padStart(2, '0');
    document.getElementById('timeDisplay').textContent = `${minutes}:${seconds}`;

    // Calculate the progress and update the circle
    const progressDegree = (1 - timeLeft / 1800) * 360; // Calculate degree of completion
    document.querySelector('#circleProgress').style.background = `conic-gradient(var(--cokelatTua) ${progressDegree}deg, var(--cokelatMuda) ${progressDegree}deg)`;
}

// Function to start the timer
function startTimer() {
    clearInterval(countdownTimer);

    // Input waktu dari user
    const inputTime = document.getElementById('timeInput').value;
    if (inputTime && inputTime > 0) {
        timeLeft = parseInt(inputTime);
    } else {
        timeLeft = 30;
    }

    updateTimerDisplay();
    timerSound.currentTime = 0; // Reset sound to the beginning
    timerSound.play(); // Play the sound when the timer starts

    countdownTimer = setInterval(function () {
        if (timeLeft > 0) {
            timeLeft--;
            updateTimerDisplay();
        } else {
            clearInterval(countdownTimer);
            timerSound.pause(); // Stop the sound when the timer ends
            timerSound.currentTime = 0; // Reset the sound to the beginning
            alert("Waktu habis! Silakan bernafas dengan tenang.");
        }
    }, 1000);
}

// Event listener for the Start button
document.getElementById('startButton').addEventListener('click', startTimer);

// Event listener for the Enter key in the input field
document.getElementById('timeInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        startTimer();
    }
});

// Event listener for the Reset button
document.getElementById('resetButton').addEventListener('click', function () {
    clearInterval(countdownTimer);
    timeLeft = 0; // Reset time
    document.getElementById('timeInput').value = ''; 
    updateTimerDisplay();
    timerSound.pause(); 
    timerSound.currentTime = 0; 
});

// Initial display
updateTimerDisplay();