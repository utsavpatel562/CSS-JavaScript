// Function to update the displayed time and date
function updateTimeAndDate() {
    const now = new Date();  // Get the current date and time
    let hours = now.getHours();  // Get the current hour (24-hour format)
    const minutes = now.getMinutes().toString().padStart(2, '0');  // Get the current minutes with leading zero
    let amPm = hours >= 12 ? 'PM' : 'AM';  // Determine AM/PM based on the hour

    // Convert 24-hour time to 12-hour time
    if (hours > 12) {  // If hour is greater than 12, subtract 12 to get 12-hour format
        hours -= 12;
    } else if (hours === 0) {  // If hour is 0, set to 12 (12 AM)
        hours = 12;
    }

    // Format the time string
    let timeStr = hours.toString().padStart(2, '0') + minutes;  // Combine hours and minutes
    if (timeStr.startsWith('0')) {  // Remove leading zero in the time string
        timeStr = ' ' + timeStr.slice(1);  // Add a space to maintain alignment
    }

    // Get the month and day with leading zero
    let month = (now.getMonth() + 1).toString().padStart(2, '0');  // Get month, adding 1 (January is 0)
    let day = now.getDate().toString().padStart(2, '0');  // Get day with leading zero
    const year = now.getFullYear().toString().slice(-2);  // Get last two digits of the year

    // Remove leading zeros for display alignment
    if (month.startsWith('0')) {
        month = ' ' + month.slice(1);  // Add space if there's a leading zero
    }
    if (day.startsWith('0')) {  // Same for the day
        day = ' ' + day.slice(1);
    }

    // Combine time and date into a single string for display
    const displayStr = timeStr + amPm + month + day + year;

    // Update the elements with the new time and date
    for (let i = 0; i < 12; i++) {  // Assuming 12 elements need to be updated
        document.getElementById('char' + i + '1').textContent = displayStr[i];  // Update first set
        document.getElementById('char' + i + '2').textContent = displayStr[i];  // Update second set
    }
}

// Call the function to update the time and date immediately
updateTimeAndDate();

// Set an interval to update the time and date every 60 seconds (60000 ms)
setInterval(updateTimeAndDate, 60000);
