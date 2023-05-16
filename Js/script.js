"use strict";

const arrowBtn = document.getElementById("btn");

// Input
const dayInput = document.getElementById("input-day");
const monthInput = document.getElementById("input-month");
const yearInput = document.getElementById("input-year");

// Estimated ages
const yearText = document.getElementById("estimated-years");
const monthText = document.getElementById("estimated-months");
const daysText = document.getElementById("estimated-days");

// Parsed Input value
let day = parseInt(dayInput.value);
let month = parseInt(monthInput.value);
let year = parseInt(yearInput.value);

// Labels
const labelDay = document.getElementById("label-day");
const labelMonth = document.getElementById("label-month");
const labelYear = document.getElementById("label-year");

// Error messages
const errorDay = document.getElementById("error-day");
const errorMonth = document.getElementById("error-month");
const errorYear = document.getElementById("error-year");

arrowBtn.addEventListener("click", () => {
  // When any of the field is empty
  if (isNaN(day) && isNaN(month) && isNaN(year)) {
    errorDay.textContent = "This field is required.";
    errorMonth.textContent = "This field is required.";
    errorYear.textContent = "This field is required.";
    // Change error message color
    errorDay.style.color = "hsl(0, 100%, 67%)";
    errorMonth.style.color = "hsl(0, 100%, 67%)";
    errorYear.style.color = "hsl(0, 100%, 67%)";
  }

  // catching day error
});
