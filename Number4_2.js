/* Write a JavaScript Code to display the day of the week using switch case*/

function displayDayOfWeek() {
    // Get input from the user
  const day_Number = parseFloat(document.getElementById("day_Number").value);

  //Switch case

    let day;
    switch (day_Number) {
        case 1:
            day = "Sunday";
            break;
        case 2:
            day = "Monday";
            break;
        case 3:
            day = "Tuesday";
            break;
        case 4:
            day = "Wednesday";
            break;
        case 5:
            day = "Thursday";
            break;
        case 6:
            day = "Friday";
            break;
        case 7:
            day = "Saturday";
            break;
        default:
            day = "Invalid day number";
    }

    document.getElementById("result").textContent = "Day of the week is " + day;
  }
