"use strict";

const arrowBtn = document.getElementById("btn");

// // Input
// const dayInput = document.getElementById("input-day");
// const monthInput = document.getElementById("input-month");
// const yearInput = document.getElementById("input-year");

// // Estimated ages
// const yearText = document.getElementById("estimated-years");
// const monthText = document.getElementById("estimated-months");
// const daysText = document.getElementById("estimated-days");

// // Parsed Input value
// let day = parseInt(dayInput.value);
// let month = parseInt(monthInput.value);
// let year = parseInt(yearInput.value);

// // Labels
// const labelDay = document.getElementById("label-day");
// const labelMonth = document.getElementById("label-month");
// const labelYear = document.getElementById("label-year");

// // Error messages
// const errorDay = document.getElementById("error-day");
// const errorMonth = document.getElementById("error-month");
// const errorYear = document.getElementById("error-year");

arrowBtn.addEventListener("click", () => {
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

  // When any of the field is empty
  //   if (isNaN(day) && isNaN(month) && isNaN(year)) {
  //     errorDay.textContent = "This field is required.";
  //     errorMonth.textContent = "This field is required.";
  //     errorYear.textContent = "This field is required.";
  //     // Change error message color
  //     errorDay.style.color = "hsl(0, 100%, 67%)";
  //     errorMonth.style.color = "hsl(0, 100%, 67%)";
  //     errorYear.style.color = "hsl(0, 100%, 67%)";

  //     errorDay.style.border = "hsl(0, 100%, 67%)";
  //     errorMonth.style.border = "hsl(0, 100%, 67%)";
  //     errorYear.style.border = "hsl(0, 100%, 67%)";

  //     labelDay.style.color = "hsl(0, 100%, 67%)";
  //     labelMonth.style.color = "hsl(0, 100%, 67%)";
  //     labelYear.style.color = "hsl(0, 100%, 67%)";
  //   } else if (day < 1 || day > 31) {
  //     errorDay.textContent = "must be a valid day.";
  //     console.log("Day not between 1 - 31");
  //   } else if (month < 1 || month > 12) {
  //     errorMonth.textContent = "must be a valid month.";
  //     console.log("None of the above");
  //   }

  // catching day error
  // If field is empty, if num. not between 1 - 31, if date is invalid e.g 31/04/1998 (there are just 30days in april)
  if (isNaN(day)) {
    errorDay.textContent = "This field is required";
    errorDay.style.color = "hsl(0, 100%, 67%)";
    errorDay.style.border = "hsl(0, 100%, 67%)";
    labelDay.style.color = "hsl(0, 100%, 67%)";
  } else if (day < 1 || day > 31) {
    errorDay.textContent = "must be a valid day";
    errorDay.style.color = "hsl(0, 100%, 67%)";
    errorDay.style.border = "hsl(0, 100%, 67%)";
    labelDay.style.color = "hsl(0, 100%, 67%)";
  } else {
    errorDay.textContent = "";
    errorDay.style.color = "";
    errorDay.style.border = "";
    labelDay.style.color = "";
  }

  // Catching month error
  // If field is empty, if month num. not between 1 - 12
  if (isNaN(month)) {
    errorMonth.textContent = "This field is required";
    errorMonth.style.color = "hsl(0, 100%, 67%)";
    errorMonth.style.border = "hsl(0, 100%, 67%)";
    labelMonth.style.color = "hsl(0, 100%, 67%)";
  } else if (month < 1 || month > 12) {
    errorMonth.textContent = "must be a valid month";
    errorMonth.style.color = "hsl(0, 100%, 67%)";
    errorMonth.style.border = "hsl(0, 100%, 67%)";
    labelMonth.style.color = "hsl(0, 100%, 67%)";
  } else {
    errorMonth.textContent = "";
    errorMonth.style.color = "";
    errorMonth.style.border = "";
    labelMonth.style.color = "";
  }

  // Catch year error
  // if field is empty, if year is in the future
  if (isNaN(year)) {
    errorYear.textContent = "This field is required";
    errorYear.style.color = "hsl(0, 100%, 67%)";
    labelYear.style.color = "hsl(0, 100%, 67%)";
  } else if (year > new Date().getFullYear()) {
    errorYear.textContent = "Must be in the past";
    errorYear.style.color = "hsl(0, 100%, 67%)";
    labelYear.style.color = "hsl(0, 100%, 67%)";
  } else if (year < 1900) {
    errorYear.textContent = "The year cannot be before 1900";
  } else {
    errorYear.textContent = "";
    errorYear.style.color = "";
    labelYear.style.color = "";
  }
});
