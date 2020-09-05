var tasks = {};

//show current date
var timeDisplay = $("#currentDay");
var today = moment();
timeDisplay.text(today.format("dddd, MMMM Do YYYY"));

//coloring the tasks
$(".description").each(function(){

})

//detect when user clicks save
$("button").click(function(){
    var textContent = $(".description").val().trim();
    localStorage.setItem("tasks", JSON.stringify(textContent));
});

//load tasks
