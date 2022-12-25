window.onload = function () {
  
    var seconds = 00; 
    var tens = 00; 
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval ;
  
    buttonStart.onclick = function() {
      
      clearInterval(Interval);
       Interval = setInterval(startTimer, 10);
    }
    
      buttonStop.onclick = function() {
         clearInterval(Interval);
    }
    
  
    buttonReset.onclick = function() {
       clearInterval(Interval);
      tens = "00";
        seconds = "00";
      appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }
    
     
    
    function startTimer () {
      tens++; 
      
      if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
      }
      
      if (tens > 9){
        appendTens.innerHTML = tens;
        
      } 
      
      if (tens > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
      
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }
    
    }
    
  
  }

  var countdown;
  var interval;
  var originalTime;

  
// Validate the input in the countdown time field
function validateInput(event) {
  // Get the current value of the input field
  var input = event.target.innerHTML;
  // Split the input into hours and minutes
  var timeParts = input.split(":");
  if (timeParts.length !== 3) {
    // Display an error message if the countdown time is not in the correct format
    displayErrorMessage();
    return;
  }
  var hours = parseInt(timeParts[0]);
  var minutes = parseInt(timeParts[1]);
  var seconds = parseInt(timeParts[2])
  if (isNaN(hours) || isNaN(minutes) || isNaN(seconds) || timeParts[0] === "" || timeParts[1] === "" || timeParts[2] === "") {
    // Display an error message if the hours or minutes are not valid numbers
    displayErrorMessage();
    return;
  }
  // Convert the hours and minutes to seconds
  countdown = (hours * 3600) + (minutes * 60) + (seconds * 1) ;
  // Update the original countdown time
  originalTime = countdown;
}

  // Display an error message in the countdown time field
  function displayErrorMessage() {
    document.getElementById("timer").innerHTML = "Error";
    // Remove the error message after 1 seconds
    setTimeout(function() {
      document.getElementById("timer").innerHTML = "00:00:00";
    }, 1000);
  }

  // Prevent the user from entering non-numeric characters in the countdown time field
  function preventNonNumericInput(event) {
    // Allow backspace, delete, and arrow keys
    if (event.keyCode === 8 || event.keyCode === 46 || (event.keyCode >= 37 && event.keyCode <= 40)) {
      return;
    }
    // Prevent any other non-numeric keys from being entered
    if (event.keyCode < 48 || event.keyCode > 57) {
      event.preventDefault();
    }
  }

  // Update the countdown timer every 1 second
  function startTimer() {
    // Make sure that the countdown time is valid before starting the timer
    if (document.getElementById("timer").innerHTML === "Error") {
      return;
    }
    originalTime = countdown;
    interval = setInterval(function() {
      countdown--;
      var hours = Math.floor(countdown / 3600);
      var minutes = Math.floor((countdown % 3600) / 60);
      var seconds = Math.floor((countdown  % 60) / 1);
      document.getElementById("timer").innerHTML = 
        (hours < 10 ? "0" + hours : hours) + ":" +
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds);
      if (countdown === 0) {
        clearInterval(interval);
        alert("Time's up!");
      }
    }, 1000);
  }

  // Stop the countdown timer
  function stopTimer() {
    clearInterval(interval);
  }

// Reset the countdown timer to 00:00
function resetTimer() {
  // Make sure that the countdown time is valid before resetting the timer
  if (document.getElementById("timer").innerHTML === "Error") {
    return;
  }
  // Reset the countdown to 00:00
  countdown = 0;
  // Set the original countdown time to 00:00
  originalTime = 0;
  // Stop the countdown timer
  clearInterval(interval);
  // Update the countdown timer display
  document.getElementById("timer").innerHTML = "00:00:00";
}

// First, check if the user has previously enabled dark mode
const isDarkModeEnabled = localStorage.getItem('darkMode') === 'true';

// If dark mode is enabled, apply the dark mode styles to the page
if (isDarkModeEnabled) {
  document.body.classList.add('dark-theme');
  moon_sun.className = "fa-solid fa-sun";
}

// Add an event listener for the dark mode toggle button
const darkmode0 = document.getElementById("darkmode");
darkmode.addEventListener('click', () => {
  // Toggle the dark mode class on the body element
  document.body.classList.toggle('dark-theme');

  // Update the dark mode setting in local storage
  localStorage.setItem('darkMode', document.body.classList.contains('dark-theme'));

  // Update the icon
  if (document.body.classList.contains('dark-theme')) {
    moon_sun.className = "fa-solid fa-sun";
  } else {
    moon_sun.className = "fa-solid fa-moon";
  }
});