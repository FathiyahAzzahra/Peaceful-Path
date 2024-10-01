// Countdown Timer
let countdownTimer;
let timeLeft = 30; // 30 seconds

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
    }, 1000);
});

document.getElementById('resetButton').addEventListener('click', function () {
    clearInterval(countdownTimer);
    timeLeft = 30; // Reset time
    updateTimerDisplay();
});

// Initial display
updateTimerDisplay();
