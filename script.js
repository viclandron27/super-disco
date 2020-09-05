var tasks = {};

//show current date
var timeDisplay = $("#currentDay");
var today = moment();
timeDisplay.text(today.format("dddd, MMMM Do YYYY"));

function loadTasks() {
    textContent = JSON.parse(localStorage.getItem("tasks"));
};

//coloring the tasks
function timeMatch() {
    $(".description").each(function(){
        var currentHour = parseInt(moment().format('H'));
        console.log(currentHour)
        var rowHour = $(this).attr("id")
        console.log(rowHour);
        var rowNumber = parseInt(rowHour);
        console.log(rowNumber);

        if (rowNumber === currentHour) {
            $(this).addClass("present");
        }
       else if (rowNumber < currentHour) {
            $(this).addClass("past");
        }
        else {
            $(this).addClass("future");
        }; 
    });
    debugger;
};

//detect when user clicks save
$("button").click(function(){
    var textContent = $(".description").val().trim();
    localStorage.setItem("tasks", JSON.stringify(textContent));
});

//load tasks on refresh
loadTasks();

//run time match on refresh
timeMatch();