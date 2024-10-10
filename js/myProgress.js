// // Grab elements
// const habits = document.querySelectorAll('.habit');
// const progressBar = document.getElementById('progress-bar');
// const progressPercentage = document.getElementById('progress-percentage');

// // Function to update progress
// function updateProgress() {
//     const totalHabits = habits.length;
//     let completedHabits = 0;

//     // Count completed habits
//     habits.forEach(habit => {
//         if (habit.checked) {
//             completedHabits++;
//         }
//     });

//     // Calculate percentage
//     const progress = (completedHabits / totalHabits) * 100;

//     // Update progress bar and percentage text
//     progressBar.style.width = `${progress}%`;
//     progressPercentage.innerText = `${Math.floor(progress)}% Complete`;
// }

// // Add event listeners to checkboxes
// habits.forEach(habit => {
//     habit.addEventListener('change', updateProgress);
// });


function updateProgress() {
    const checklistItems = document.querySelectorAll('#checklist input[type="checkbox"]');
    const totalItems = checklistItems.length;
    let completedItems = 0;

    // Hitung checklist yang sudah di-check
    checklistItems.forEach(item => {
        if (item.checked) {
            completedItems++;
        }
    });

    // Kalkulasi progress dalam persen
    const progressPercent = totalItems === 0 ? 0 : (completedItems / totalItems) * 100;

    // Update lebar progress bar
    const progressBar = document.getElementById('progressBar');
    progressBar.style.width = progressPercent + '%';
}
