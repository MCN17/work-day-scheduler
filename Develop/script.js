
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

