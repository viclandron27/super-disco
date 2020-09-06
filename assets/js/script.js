var tasks = {};

//show current date
var timeDisplay = $("#currentDay");
var today = moment();
timeDisplay.text(today.format("dddd, MMMM Do YYYY"));

function loadTasks() {
    var getTasks = JSON.parse(localStorage.getItem("tasks"));
    var rowHour = $(".row").siblings().attr("id")
    console.log(rowHour);
    if (getTasks != undefined) {
        for (var i = 0; i < getTasks.length; i++) {
           var taskItem =  getTasks[i]
           //if (getTasks[i].id === )
           //if (getTask[i].id === )
           //console.log (taskItem);
        }
    }
};

//coloring the tasks
function timeMatch() {
    $(".description").each(function(){
        var currentHour = parseInt(moment().format('H'));
       // console.log(currentHour)
        var rowHour = $(this).attr("id")
        //console.log(rowHour);
        var rowNumber = parseInt(rowHour);
        //console.log(rowNumber);

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
$(".saveBtn").click(function(){
    //pick up user input
    var text = $(this).siblings(".description").val().trim();
    //pick up id number
    var row = $(this).siblings(".description").attr("id");

        //save id number and user input together
        var tasks = {
            id: row,
            content: text
        }

        //save array
        var dayTasks = JSON.parse(localStorage.getItem("tasks")) || []

        if (dayTasks != undefined) {
            dayTasks[dayTasks.length] = tasks
            localStorage.setItem("tasks", JSON.stringify(dayTasks));
        }
        else {
           var dayTasks = []
           dayTasks[0] = tasks
           localStorage.setItem("tasks", JSON.stringify(dayTasks));
        }
});

//edit task options
$("textarea").click(function(){
    var text = $(this).siblings(".description").val();
    var id = $(this).siblings(".description").attr("id");

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