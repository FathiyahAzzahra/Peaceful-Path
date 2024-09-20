$(document).ready(function() {
    // Example: Toggle navigation menu on mobile
    $('.menu-toggle').click(function() {
        $('nav ul').toggleClass('show');
    });
    
    // Example: Load tips or activities
    $('#daily-tips').html("<p>Remember to breathe deeply and take short breaks today!</p>");
    });

    // -------------------------------------------- MyProgres
    $(document).ready(function() {
        // Mood Tracking Data
        var moodData = {
            labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            datasets: [{
                label: "Mood Score",
                data: [5, 6, 4, 7, 5, 8, 6],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        };
    
        // Create Mood Chart
        var ctx = document.getElementById('moodChart').getContext('2d');
        var moodChart = new Chart(ctx, {
            type: 'line',
            data: moodData,
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 10
                    }
                }
            }
        });
    
        // Self-Care Challenge Progress
        var totalDays = 30;
        var completedDays = 15;
        var progressPercent = (completedDays / totalDays) * 100;
        $('#progress-fill').css('width', progressPercent + '%');
    
        // Wearable Device Data
        // Mock data; in real case, fetch from wearable API
        var avgHeartRate = 70;
        var stressLevel = "Low";
        $('#avg-heart-rate').text(avgHeartRate + " bpm");
        $('#stress-level').text(stressLevel);
    });
    