// JavaScript 'script.js'
// Function to Change Background Color
function myFunction_btn1() {
  document.body.style.backgroundColor = "#D5896F";
}
function myFunction_btn2() {
  document.body.style.backgroundColor = "#ff4969";
}
function myFunction_btn3() {
  document.body.style.backgroundColor = "#a783fd";
}
function myFunction_btn4() {
  document.body.style.backgroundColor = "whitesmoke";
}
// Function for taking input from the user and display output index.html
function myFunction() {
    let text;
    let person = prompt("Please enter your Email ID:", "example@gmail.com");
    if (person == null || person == "") {
      text = "<h3 style='color:#fff;'>User cancelled the prompt.</h3>";
    } else {
      text = "<h3 style='color:#fff;'>Thank you! <i><u>" + person + "</u></i> for subscribe.</h3>";
    }
    document.getElementById("demo").innerHTML = text;
  }
// function for displaying hidden link using JS on index.html
  function myFunction_two() {
    document.getElementById("demo2").innerHTML = "<a style='color:lightblue;' target='_blank' href='https://www.snhu.edu/about-us/newsroom/stem/what-is-computer-programming'>https://www.snhu.edu/about-us/newsroom/stem/what-is-computer-programming</a>";
  }
// function for open new windown using JS for printing data 
