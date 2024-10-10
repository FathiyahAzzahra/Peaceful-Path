const monthPicker = document.getElementById("month-name");
const yearPicker = document.getElementById("year");
const preYear = document.getElementById("pre-year");
const nextYear = document.getElementById("next-year");
const calendarDays = document.querySelector(".calendar-days");
const eventInput = document.getElementById("event-input");
const addEventButton = document.getElementById("add-event");
const monthDropdown = document.getElementById("month-dropdown");

let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();
let selectedDay = null; 
let events = {};

// List of month names
const monthNames = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
];

// Display the current month and year
function displayCurrentMonth() {
    monthPicker.innerText = monthNames[currentMonth];
    yearPicker.innerText = currentYear;
    renderCalendar();
}

// Render the calendar days
function renderCalendar() {
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
    const totalDays = lastDayOfMonth.getDate();
    const startDay = firstDayOfMonth.getDay();

    calendarDays.innerHTML = ""; // Clear previous days

    // Add empty divs for the days before the first day of the month
    for (let i = 0; i < startDay; i++) {
        calendarDays.innerHTML += `<div></div>`;
    }

    // Add each day of the month
    for (let day = 1; day <= totalDays; day++) {
        const date = new Date(currentYear, currentMonth, day);
        const dayElement = document.createElement("div");
        dayElement.innerText = day;

        // Highlight today
        if (date.toDateString() === new Date().toDateString()) {
            dayElement.classList.add("today");
        }

        // Highlight days with events
        if (events[date.toDateString()]) {
            dayElement.classList.add("event-day");
        }

        // Highlight the selected day
        if (selectedDay && date.toDateString() === selectedDay.toDateString()) {
            dayElement.classList.add('selected-day');
        }

        // Click event to select/deselect date
        dayElement.onclick = () => {
            // Check if the clicked day is the same as the selected day
            if (selectedDay && date.toDateString() === selectedDay.toDateString()) {
                // If the same day is clicked again, deselect it
                selectedDay = null; // Clear the selected day
                dayElement.classList.remove('selected-day'); // Remove selected-day class
            } else {
                // Clear previous selected day if any
                const previouslySelected = calendarDays.querySelector('.selected-day');
                if (previouslySelected) {
                    previouslySelected.classList.remove('selected-day');
                }

                // Set the clicked day as selected
                selectedDay = date; // Store the selected date
                dayElement.classList.add('selected-day'); // Highlight the selected date
            }

            renderCalendar(); // Re-render calendar to reflect selection
        };

        calendarDays.appendChild(dayElement);
    }
}

// Function to add an event
function addEvent() {
    const eventText = eventInput.value.trim();
    if (!selectedDay || !eventText) {
        return; 
    }

    const dateString = selectedDay.toDateString(); 

    if (!events[dateString]) {
        events[dateString] = [];
    }

    events[dateString].push({
        text: eventText,
        isCompleted: false
    });

    eventInput.value = ""; 
    selectedDay = null; 
    renderCalendar();
    renderEventList();
}


// Add event listener for "Add" button
addEventButton.onclick = addEvent;

// Add event listener for "Enter" key press
eventInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addEvent();
    }
});

// Event listeners for year change
preYear.onclick = () => {
    currentYear--;
    displayCurrentMonth();
};

nextYear.onclick = () => {
    currentYear++;
    displayCurrentMonth();
};

// Show/hide the dropdown when clicking the month name
monthPicker.onclick = () => {
    monthDropdown.style.display = monthDropdown.style.display === "none" ? "block" : "none";
};

// Add click event for each month item
const monthItems = document.querySelectorAll(".month-item");
monthItems.forEach(item => {
    item.onclick = () => {
        currentMonth = parseInt(item.getAttribute("data-month")); 
        displayCurrentMonth(); 
        monthDropdown.style.display = "none"; 
    };
});

// Close dropdown when clicking outside
document.addEventListener("click", (event) => {
    if (!monthDropdown.contains(event.target) && !monthPicker.contains(event.target)) {
        monthDropdown.style.display = "none";
    }
});

// Initialize calendar display
displayCurrentMonth(); 

function checkTodayEvents() {
    const todayDate = new Date().toDateString();
    
    // Jika ada event untuk hari ini, render checklist
    if (events[todayDate]) {
        const checklist = document.getElementById('checklist');
        checklist.innerHTML = ''; 

        // Render event sebagai checklist
        events[todayDate].forEach((event, index) => {
            const listItem = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `event-${index}`;
            checkbox.classList.add('habit');
            checkbox.checked = event.isCompleted;
            
            // Update event ketika checkbox di-check
            checkbox.addEventListener('change', () => {
                event.isCompleted = checkbox.checked;
                updateProgress();
            });

            const label = document.createElement('label');
            label.htmlFor = `event-${index}`;
            label.innerText = event.text;

            listItem.appendChild(checkbox);
            listItem.appendChild(label);
            checklist.appendChild(listItem);
        });

        // Update progress bar setelah rendering checklist
        updateProgress();
    }
}

// Panggil fungsi ini dalam updateDateTime
function updateDateTime() {
    const todayElement = document.getElementById('today');

    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const month = now.toLocaleString('default', { month: 'long' });
    const year = now.getFullYear();

    // Display time and date
    todayElement.innerHTML = `${hours}:${minutes}:${seconds} <br> ${day} - ${month} - ${year}`;

    // Check for events today
    checkTodayEvents();
}


// Update time every second
setInterval(updateDateTime, 1000);
updateDateTime();
