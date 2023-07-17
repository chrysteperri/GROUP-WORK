/*Question: Write a JavaScript code to find the largest among three numbers using the nested if statement.*/

  // Function to find the largest number among three numbers
function findLargestNumber() {
    // Get input values from the form
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const num3 = parseFloat(document.getElementById("num3").value);
  
    // Nested if statements to find the largest number
    let largestNumber;
  
    if (num1 >= num2) {
      if (num1 >= num3) {
        largestNumber = num1;
      } else {
        largestNumber = num3;
      }
    } else {
      if (num2 >= num3) {
        largestNumber = num2;
      } else {
        largestNumber = num3;
      }
    }
  
    // Display the result
    document.getElementById("result3").textContent = "The largest number is: " + largestNumber;
  }
  
        
