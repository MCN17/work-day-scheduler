// Displays the current day at the top of the page

var currentTime = moment().format("dddd, MM/DD/YY");
document.getElementById("currentDay").innerHTML = currentTime;

// Another way to get the date to display at the top of the page
// var currentTime = new Date();
// displayCurrentTime = document.querySelector("#currentDay");
// displayCurrentTime.textContent = currentTime;


// Changes the color of the time block depending on the current time
// If it's in the past it's grey
// If it's the current time it's red
// If it's in the future it's green

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

// Saves the content of each time block to Local Storage
// Figure out how to put these all together instead of writing out each time block seperately
$(".btn9").on("click", function () {
    var text = $("#9").val();
    localStorage.setItem("09:00", text)
});

$(".btn10").on("click", function () {
    var text = $("#10").val();
    localStorage.setItem("10:00", text)
});

$(".btn11").on("click", function () {
    var text = $("#11").val();
    localStorage.setItem("11:00", text)
});

$(".btn12").on("click", function () {
    var text = $("#12").val();
    localStorage.setItem("12:00", text)
});

$(".btn13").on("click", function () {
    var text = $("#13").val();
    localStorage.setItem("13:00", text)
});

$(".btn14").on("click", function () {
    var text = $("#14").val();
    localStorage.setItem("14:00", text)
});

$(".btn15").on("click", function () {
    var text = $("#15").val();
    localStorage.setItem("15:00", text)
});

$(".btn16").on("click", function () {
    var text = $("#16").val();
    localStorage.setItem("16:00", text)
});

$(".btn17").on("click", function () {
    var text = $("#17").val();
    localStorage.setItem("17:00", text)
});

// Retrieves information of each time block from local storage so it persists on the page after browswer is refreshed.
$("#9").val(localStorage.getItem("09:00"));
$("#10").val(localStorage.getItem("10:00"));
$("#11").val(localStorage.getItem("11:00"));
$("#12").val(localStorage.getItem("12:00"));
$("#13").val(localStorage.getItem("13:00"));
$("#14").val(localStorage.getItem("14:00"));                // Figure out how to put these all together instead of writing out each time block seperately
$("#15").val(localStorage.getItem("15:00"));
$("#16").val(localStorage.getItem("16:00"));
$("#17").val(localStorage.getItem("17:00"));

