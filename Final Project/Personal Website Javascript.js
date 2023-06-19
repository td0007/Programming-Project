// JavaScript code to display current date and time
function displayDateTime() {
    var date = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    var dateTimeString = date.toLocaleString('en-US', options);
    document.getElementById("current-time").textContent = dateTimeString;
  }
  
  // Call the displayDateTime function
  displayDateTime();
  