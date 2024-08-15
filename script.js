//ASSIGNMENT
//CHAP31-34
//QUESTION NO1
const now = new Date();
document.write(now)

//QUESTION NO2
let currentMonth= now.getMonth()+1;
alert("Current Month:August" + currentMonth);

//Question NO3

 const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

 const day = new Date();
 

 const dayIndex = now.getDay();
 
 alert("Today is: " + days[dayIndex]);


 //Question No4

 const date = new Date();
        
        // Get the current day index (0 for Sunday, 1 for Monday, etc.)
        const daysIndex = date.getDay();
        
        // Check if it's Saturday (6) or Sunday (0)
        if (daysIndex === 6 || daysIndex === 0) {
            // Display the message if it's Saturday or Sunday
            alert("It's Fun day");
        }


//Question no5
const dayOfMonth = now.getDate();

    if (dayOfMonth < 16) {
         alert("First fifteen days of the month");
     } 
     else { const now = new Date();
    
         alert("Last days of the month");
     }
 
 //QUESTION NO6

const currentDate = new Date();

const epochDate = new Date(0); // January 1, 1970 00:00:00 UTC

const millisecondsSinceEpoch = currentDate - epochDate;


const minutesSinceEpoch = millisecondsSinceEpoch / 60000;


let minutesSinceMidnight = minutesSinceEpoch;


console.log("Minutes since midnight, January 1, 1970:", minutesSinceMidnight);


//QUESTION N0 7
const hours = new Date();
    const hour = hours.getHours();

    if (hour < 12) {
        alert("It's AM");
    } else {
        alert("It's PM");
    }


//QUESTION NO8
const laterDate = new Date(2020, 11, 31);

console.log("The date for the last day of the last month of 2020 is:", laterDate);

//QUESTION NO9

const ramadanStartDate = new Date(2015, 5, 18); // Month is 0-based (5 for June)

// Create a Date object for the current date
const current_Date = new Date();

// Calculate the difference in milliseconds between the current date and the 1st Ramadan
const millisecondsSinceRamadan = current_Date - ramadanStartDate;

// Convert milliseconds to days (1 day = 86400000 milliseconds)
const daysSinceRamadan = Math.floor(millisecondsSinceRamadan / 86400000);

// Alert the number of days past
alert("Number of days since 1st Ramadan (June 18, 2015): " + daysSinceRamadan);

//QUESTION NO10

const referenceDate = new Date(); // Current date and time as an example

// Define the start of 2015
const startOf2015 = new Date(2015, 0, 1); // January 1, 2015


const millisecondsElapsed = referenceDate - startOf2015;


const secondsElapsed = Math.floor(millisecondsElapsed / 1000);


console.log(`Seconds elapsed since January 1, 2015: ${secondsElapsed}`);



//QUESTION NO11
// Step 1: Create a Date object for the current date and time
const currentDat = new Date();


const currentHours = currentDat.getHours();
console.log("Current hours:", currentHours); // Optional: Log hours to the console for verification


currentDat.setHours(currentDat.getHours() + 1);


console.log("Updated Date object:", currentDat.toString());


//QUESTION NO12

const dateObj = new Date();


dateObj.setFullYear(dateObj.getFullYear() - 100);


alert("Date 100 years back: " + dateObj.toString());


//QUESTION N13

const age = prompt("Please enter your age:");


if (age && !isNaN(age)) {
    // Convert age to a number
    const ageNumber = Number(age);

    // Calculate the current year
    const currentYear = new Date().getFullYear();

    // Calculate the birth year
    const birthYear = currentYear - ageNumber;

    // Display the birth year in an alert box
    document.write("Your birth year is: " + birthYear);
} else {
    // Inform the user if they did not provide a valid number
    document.write("Please enter a valid age.");
}

//question N014
const customerName = prompt("Enter customer name:");
const currentMonthS = prompt("Enter current month:");
const numberOfUnits = parseFloat(prompt("Enter number of units:"));
const chargesPerUnit = parseFloat(prompt("Enter charges per unit:"));
const latePaymentSurcharge = parseFloat(prompt("Enter late payment surcharge:"));

// Calculate amounts
const netAmountPayable = numberOfUnits * chargesPerUnit;
const grossAmountPayable = netAmountPayable + latePaymentSurcharge;

// Round to 2 decimal places
const netAmountRounded = netAmountPayable.toFixed(2);
const grossAmountRounded = grossAmountPayable.toFixed(2)

document.write(`
    <h2>K-Electric Bill</h2>
    <p>Customer Name: ${customerName}</p>
    <p>Current Month: ${currentMonthS}</p>
    <p>Number of Units: ${numberOfUnits.toFixed(2)}</p>
    <p>Charges per Unit: $${chargesPerUnit.toFixed(2)}</p>
    <p>Net Amount Payable (within Due Date): $${netAmountRounded}</p>
    <p>Late Payment Surcharge: $${latePaymentSurcharge.toFixed(2)}</p>
    <p>Gross Amount Payable (after Due Date): $${grossAmountRounded}</p>
`);
