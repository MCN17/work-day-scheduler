
var currentTime = moment().format("dddd, MM/DD/YY");
document.getElementById("currentDay").innerHTML = currentTime;


// Another way to get the date to display at the top of the page
// var currentTime = new Date();
// displayCurrentTime = document.querySelector("#currentDay");
// displayCurrentTime.textContent = currentTime;



$("textarea").each(function () {
    hour = moment().format("H");
    var textArea = $(this);
    var id = parseInt(textArea.attr("id"));

    if (id < hour) {
        $(this).addClass("past");
    } else if (id > hour) {
        $(this).addClass("future")
    } else {
        $(this).addClass("present")
    }
});
