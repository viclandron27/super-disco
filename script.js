//show current date
var timeDisplay = $("#currentDay");
var today = moment();
timeDisplay.text(today.format("dddd, MMMM Do YYYY"));