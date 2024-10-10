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
