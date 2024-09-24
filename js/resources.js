// This script can be expanded if needed for interactivity, e.g., adding notifications or dynamically loading content
document.addEventListener('DOMContentLoaded', function() {
    console.log("Resources page is loaded");
    // You can add event listeners for future features like reminders or dynamic content
});  


function toggleVideo(videoId, thumbnailId, backButtonId) {
    var video = document.getElementById(videoId);
    var thumbnail = document.getElementById(thumbnailId);
    var backButton = document.getElementById(backButtonId);

    // Mengecek apakah video sedang tersembunyi (thumbnail sedang tampil)
    if (thumbnail.style.display !== "none") {
        // Saat thumbnail diklik, tampilkan video dan tombol "Back"
        thumbnail.style.display = "none";
        video.style.display = "block";
        backButton.style.display = "block";
        video.play(); // Mulai putar video
    } else {
        // Saat tombol "Back" diklik, tampilkan kembali thumbnail dan sembunyikan video serta tombol "Back"
        video.style.display = "none";
        backButton.style.display = "none";
        thumbnail.style.display = "block";
        video.pause(); // Hentikan video
        video.currentTime = 0; // Reset waktu video ke awal
    }
}
