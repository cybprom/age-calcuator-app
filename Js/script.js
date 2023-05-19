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

  // Current date
  let actualDay = new Date().getDate();
  let actualMonth = new Date().getMonth() + 1;
  let actualYear = new Date().getFullYear();

  // Labels
  const labelDay = document.getElementById("label-day");
  const labelMonth = document.getElementById("label-month");
  const labelYear = document.getElementById("label-year");

  // Error messages
  const errorDay = document.getElementById("error-day");
  const errorMonth = document.getElementById("error-month");
  const errorYear = document.getElementById("error-year");

  // Validate day, month, year and the whole data
  let validDay;
  let validMonth;
  let validYear;
  let validData;

  let age;
  let months;
  let days;

  // catching day error
  // If field is empty, if num. not between 1 - 31, if date is invalid e.g 31/04/1998 (there are just 30days in april)
  if (isNaN(day)) {
    errorDay.textContent = "This field is required";
    errorDay.style.color = "hsl(0, 100%, 67%)";
    errorDay.style.border = "hsl(0, 100%, 67%)";
    labelDay.style.color = "hsl(0, 100%, 67%)";
    validDay = false;
  } else if (day < 1 || day > 31) {
    errorDay.textContent = "must be a valid day";
    errorDay.style.color = "hsl(0, 100%, 67%)";
    errorDay.style.border = "hsl(0, 100%, 67%)";
    labelDay.style.color = "hsl(0, 100%, 67%)";
    validDay = false;
  } else {
    validDay = true;
    errorDay.textContent = "";
    errorDay.style.color = "";
    errorDay.style.border = "";
    labelDay.style.color = "";
  }

  // Catching month error
  // If field is empty, if month num. not between 1 - 12
  if (isNaN(month)) {
    validMonth = false;
    errorMonth.textContent = "This field is required";
    errorMonth.style.color = "hsl(0, 100%, 67%)";
    errorMonth.style.border = "hsl(0, 100%, 67%)";
    labelMonth.style.color = "hsl(0, 100%, 67%)";
  } else if (month < 1 || month > 12) {
    validMonth = false;
    errorMonth.textContent = "must be a valid month";
    errorMonth.style.color = "hsl(0, 100%, 67%)";
    errorMonth.style.border = "hsl(0, 100%, 67%)";
    labelMonth.style.color = "hsl(0, 100%, 67%)";
  } else {
    validMonth = true;
    errorMonth.textContent = "";
    errorMonth.style.color = "";
    errorMonth.style.border = "";
    labelMonth.style.color = "";
  }

  // Catch year error
  // if field is empty, if year is in the future
  if (isNaN(year)) {
    validYear = false;
    errorYear.textContent = "This field is required";
    errorYear.style.color = "hsl(0, 100%, 67%)";
    errorYear.style.border = "hsl(0, 100%, 67%)";
    labelYear.style.color = "hsl(0, 100%, 67%)";
  } else if (year > new Date().getFullYear()) {
    validYear = false;
    errorYear.textContent = "Must be in the past";
    errorYear.style.color = "hsl(0, 100%, 67%)";
    errorYear.style.border = "hsl(0, 100%, 67%)";
    labelYear.style.color = "hsl(0, 100%, 67%)";
  } else if (year < 1900) {
    validYear = false;
    errorYear.textContent = "The year cannot be before 1900";
    errorYear.style.color = "hsl(0, 100%, 67%)";
    errorYear.style.border = "hsl(0, 100%, 67%)";
    labelYear.style.color = "hsl(0, 100%, 67%)";
  } else {
    validYear = true;
    errorYear.textContent = "";
    errorYear.style.color = "";
    errorYear.style.border = "";
    labelYear.style.color = "";
  }

  // Check if one of the input is valid or not
  if (!validDay || !validMonth || !validYear) {
    validData = false;
    console.log("One is not valid");
  } else {
    validData = true;
  }

  // Main age calculation
  if (validData) {
    age = actualYear - year;
    months = actualMonth - month;
    days = actualDay - day;

    // console.log(age, months, days);

    if (months < 0 || (months === 0 && days < 0)) {
      age--;
      months = 12 - Math.abs(months);
    }

    if (days < 0) {
      months--;
      days = 30 - Math.abs(days);
    }

    yearText.innerHTML = `${age}`.padStart(2, 0);
    monthText.innerHTML = `${months}`.padStart(2, 0);
    daysText.innerHTML = `${days}`.padStart(2, 0);
  }
});
