/* Write a JavaScript Code to display the day of the week using if-else ladder*/

function getDayOfWeek() {
  // Get input from the user
  const dayNumber = parseFloat(document.getElementById("dayNumber").value);

  //If- else ladder
    let day;
    if (dayNumber === 1) {
      day = "Sunday";
    } else if (dayNumber === 2) {
      day = "Monday";
    } else if (dayNumber === 3) {
      day = "Tuesday";
    } else if (dayNumber === 4) {
      day = "Wednesday";
    } else if (dayNumber === 5) {
      day = "Thursday";
    } else if (dayNumber === 6) {
      day = "Friday";
    } else if (dayNumber === 7) {
      day = "Saturday";
    } else {
      day = "Invalid day number";
    }
     
     // Display the result
     document.getElementById("day-display").textContent = "Today is " + day;
  }

