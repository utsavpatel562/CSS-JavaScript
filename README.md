#
<h2>JavaScript Digital Clock</h2>
<p align="justify">Welcome to the JavaScript Digital Clock repository! This project implements a digital clock that displays the current time and date in a 12-hour format with AM/PM indication, as well as the current date in MM/DD/YY format. The clock automatically updates every minute to keep the time accurate.</p>
<h2>Table of Contents</h2>
<ul shape="disc">
  <a href="#id1"><li>Features</li></a>
  <a href="#id2"><li>Getting Started</li></a>
  <a href="#id3"><li>Usage</li></a>
  <a href="#id4"><li>Customization</li></a>
  <a href="#id5"><li>Contributing</li></a>
  <a href="#id6"><li>License</li></a>
</ul>
<h2 id="id1">Features</h2>
<ul shape="disc">
  <li>Displays current time in a 12-hour format with AM/PM indication.</li>
  <li>Automatically updates every minute.</li>
  <li>Shows the current date in MM/DD/YY format.</li>
  <li>Easy-to-read and customizable layout.</li>
</ul>
<h2 id="id2">Getting Started</h2>
To run the clock on your local system, follow these steps:<br/>
1. Clone this repository:<br/>
<code>git clone <repository-url></code>
2. Open the index.html file in a web browser to view the clock.

<h2 id="id3">Usage</h2>
<p align="justify">Once you open the clock in a web browser, it will display the current time and date. The clock updates every minute, ensuring that the displayed time is accurate.</p>

<h2 id="id4">Customization</h2>
<p align="justify">You can customize the appearance of the clock by modifying the accompanying CSS and HTML files. This can include changing fonts, colors, and layout to match your preferences.</p>

<h2>Changing Time Display</h2>
To modify the way time is displayed, you can adjust the following JavaScript function:<br/>
<code>
  function updateTimeAndDate() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    let amPm = hours >= 12 ? 'PM' : 'AM';
    if (hours > 12) {
        hours -= 12;
    } else if (hours === 0) {
        hours = 12;
    }
    let timeStr = hours.toString().padStart(2, '0') + minutes;
    if (timeStr.startsWith('0')) {
        timeStr = ' ' + timeStr.slice(1);
    }
    let month = (now.getMonth() + 1).toString().padStart(2, '0');
    let day = now.getDate().toString().padStart(2, '0');
    const year = now.getFullYear().toString().slice(-2);
    if (month.startsWith('0')) {
        month = ' ' + month.slice(1);
    }
    if (day.startsWith('0')) {
        day = ' ' + day.slice(1);
    }
    const displayStr = timeStr + amPm + month + day + year;
    for (let i = 0; i < 12; i++) {
        document.getElementById('char' + i + '1').textContent = displayStr[i];
        document.getElementById('char' + i + '2').textContent = displayStr[i];
    }
}
</code>
      
<h2 id="id5">Contributing</h2>
<p align="justify">Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request. Make sure to follow the existing code style and write clear, concise commit messages.</p>

<h2 id="id6">License</h2>
<p align="justify">This project is licensed under the MIT License - see the LICENSE file for details.</p>
