var tasks = {};

//show current date
var timeDisplay = $("#currentDay");
var today = moment();
timeDisplay.text(today.format("dddd, MMMM Do YYYY"));

function loadTasks() {
    text = JSON.parse(localStorage.getItem("tasks"));
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
function createTask() {

}

//detect when user clicks save
$(".saveBtn").click(function(){
    //pick up user input
    var text = $(".description").val().trim();
    //pick up id number
    var row = $(".description").attr("id");

    //save id number and user input together
    var tasks = {
        id: row,
        content: text
    }
    //save to local storage
    localStorage.setItem("tasks", JSON.stringify(tasks));
});

//edit task options
$(".description").click(function(){
    var text = $(this).val().trim();
    var id = $(this).attr("id");
    var textInput = $("<p>").val(text);

    $(this).append(textInput);

    localStorage.getItem(JSON.parse("tasks"))

    //save in local storage
    tasks.push({
        id: id,
        content: text
    })

    localStorage.setItem("tasks", JSON.stringify(tasks));
})

//load tasks on refresh
loadTasks();

//run time match on refresh
timeMatch();