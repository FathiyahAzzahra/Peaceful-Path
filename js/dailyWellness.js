const monthPicker = document.getElementById("month-name");
const yearPicker = document.getElementById("year");
const preYear = document.getElementById("pre-year");
const nextYear = document.getElementById("next-year");
const calendarDays = document.querySelector(".calendar-days");
const eventInput = document.getElementById("event-input");
const addEventButton = document.getElementById("add-event");
const eventList = document.querySelector(".event-list");
const monthDropdown = document.getElementById("month-dropdown");

let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();
let selectedDay = null; // To track the selected day for the event
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
        return; // Do nothing if no date selected or input is empty
    }

    const dateString = selectedDay.toDateString(); // Get the selected date as string

    if (!events[dateString]) {
        events[dateString] = [];
    }

    events[dateString].push(eventText);
    eventInput.value = ""; // Clear input
    selectedDay = null; // Reset selected day
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

// Render event list
function renderEventList() {
    eventList.innerHTML = ""; // Clear previous events
    for (const date in events) {
        events[date].forEach((event, index) => {
            const eventItem = document.createElement("div");
            eventItem.innerHTML = `${date}: ${event} <button class="delete-event" data-date="${date}" data-index="${index}">Delete</button>`;
            eventList.appendChild(eventItem);
        });
    }

    // Add event listeners for delete buttons
    const deleteButtons = document.querySelectorAll(".delete-event");
    deleteButtons.forEach(button => {
        button.onclick = () => {
            const date = button.getAttribute("data-date");
            const index = button.getAttribute("data-index");

            events[date].splice(index, 1); // Remove the event
            if (events[date].length === 0) {
                delete events[date]; // Delete the date if no events are left
            }
            renderCalendar();
            renderEventList();
        };
    });
}

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
        currentMonth = parseInt(item.getAttribute("data-month")); // Update the current month
        displayCurrentMonth(); // Re-render the calendar with the new month
        monthDropdown.style.display = "none"; // Hide the dropdown
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

// Function to update current time dynamically
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
}

// Update time every second
setInterval(updateDateTime, 1000);
updateDateTime();
